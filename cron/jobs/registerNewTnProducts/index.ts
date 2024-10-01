import { CronJob } from "cron";
import { tnNormalStore } from "../../../dataSources/tiendaNube/normalStore.js";
import {
  PatchStockPriceInput,
  Product as TiendaNubeProduct,
} from "../../../dataSources/tiendaNube/types.js";
import prisma from "../../../db/index.js";
import { Prisma } from "@prisma/client";
import { erp } from "../../../dataSources/erp/index.js";
import { sendEmail } from "../../../mail/index.js";
import { saveLogs } from "../../../log/index.js";

const job = async () => {
  console.log("Getting new products from TiendaNube...");
  const logs: Prisma.LogCreateManyInput[] = [];
  const lastTnProduct = await prisma.tNProduct.findFirstOrThrow({
    orderBy: {
      createdAt: "desc",
    },
  });

  const tiendaNubeProducts = await tnNormalStore.getAllProducts({
    created_at_min: lastTnProduct.createdAt.toISOString(),
  });
  const retryProducts = await prisma.failedTNProductRegistration.findMany();

  console.log("Saving products to database...");
  const productsMap = new Map<
    string,
    {
      id: number;
      variantId: number;
      code: string;
      createdAt: string;
    }[]
  >();
  for (const product of tiendaNubeProducts) {
    const variant = product.variants[0];
    if (!variant) continue;
    const code = variant.sku?.toUpperCase();
    if (!code) continue;
    const existing = productsMap.get(code) || [];

    productsMap.set(code, [
      ...existing,
      {
        id: product.id,
        variantId: variant.id,
        code,
        createdAt: product.created_at,
      },
    ]);
  }

  for (const product of retryProducts) {
    const existing = productsMap.get(product.code) || [];
    productsMap.set(product.code, [
      ...existing,
      {
        id: product.productId,
        variantId: product.variantId,
        code: product.code,
        createdAt: product.createdAt.toISOString(),
      },
    ]);
  }

  const productsToSave: Prisma.TNProductCreateManyInput[] = [];
  const productsToPatch: PatchStockPriceInput = [];
  const duplicatedCodes: string[] = [];
  const failedProducts: {
    id: number;
    variantId: number;
    code: string;
    createdAt: string;
  }[] = [];

  for (const [code, products] of productsMap) {
    if (products.length > 1) {
      duplicatedCodes.push(code);
      continue;
    }
    const product = products[0];
    const variantId = product.variantId;

    const erpProduct = await erp.getOneProduct(code);
    if (!erpProduct) {
      logs.push({
        message: `Product ${code} not found in ERP.\nNo se pudo registrar en la base de datos de la integración`,
        type: "error",
      });
      sendEmail(
        `Product ${code} not found in ERP.\nNo se pudo registrar en la base de datos de la integración`
      );
      failedProducts.push(product);
      continue;
    }

    if (product.id === lastTnProduct.productId) continue;

    if (await prisma.tNProduct.findUnique({ where: { code } })) continue;

    productsToSave.push({
      productId: product.id,
      variantId: variantId,
      code,
      stock: 0,
      active: true,
      createdAt: new Date(product.createdAt),
      interdataCode: erpProduct.prd_codigo,
    });
    productsToPatch.push({
      id: product.id,
      variants: [
        {
          id: variantId,
          price: erpProduct.prd_pvp_con_iva,
          inventory_levels: [
            {
              stock: erpProduct.prd_stock,
            },
          ],
        },
      ],
    });
  }

  if (failedProducts.length > 0) {
    await prisma.failedTNProductRegistration.createMany({
      data: failedProducts.map((product) => ({
        productId: product.id,
        variantId: product.variantId,
        createdAt: new Date(product.createdAt),
        code: product.code,
      })),
    });
  }

  if (productsToSave.length === 0) {
    console.log("No new products found");
    await saveLogs(logs);
    return;
  }

  await prisma.tNProduct.createMany({
    data: productsToSave,
  });

  await tnNormalStore.patchStockPrice(productsToPatch).catch((e) => {
    void sendEmail(`Error patching stock and prices: ${e.message}`);
    void saveLogs([
      {
        message: `Error patching stock and prices: ${e.message}`,
        type: "error",
        data: JSON.stringify(productsToPatch),
      },
    ]);
  });

  console.log("Products saved to database and stock updated!");

  logs.push({
    message: `Saved ${productsToSave.length} new products`,
    type: "info",
    data: JSON.stringify(productsToSave),
  });
  await saveLogs(logs);

  await prisma.tNDuplicatedCodes.createMany({
    data: duplicatedCodes.map((code) => ({ code })),
  });
};

export default {
  name: "registerNewProducts",
  cronJob: new CronJob("3/5 * * * *", job),
  run: job,
};
