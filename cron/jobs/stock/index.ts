import { CronJob } from "cron";
import { erp } from "../../../dataSources/erp/index.js";
import prisma from "../../../db/index.js";
import { PatchStockPriceInput } from "../../../dataSources/tiendaNube/types.js";
import { sendEmail } from "../../../mail/index.js";
import { tnNormalStore } from "../../../dataSources/tiendaNube/normalStore.js";
import { saveLogs } from "../../../log/index.js";
import { tnWholesaleStore } from "../../../dataSources/tiendaNube/wholesaleStore.js";

const halfHourInMs = 30 * 60 * 1000;

const job = async () => {
  console.log("Updating stock...");
  const updatedAfter = new Date(new Date().getTime() - halfHourInMs);
  const updatedBefore = new Date(new Date().getTime() + halfHourInMs);

  const erpProducts = await erp
    .getStockUpdates({
      updatedAfter,
      updatedBefore,
    })
    .catch((err) => {
      void sendEmail(`Error fetching products from ERP: ${err}`);
      void saveLogs([
        {
          message: "Error fetching products from ERP",
          type: "error",
          data: {
            error: err,
          },
        },
      ]);
      return [];
    });

  const tnProducts = await prisma.tNProduct.findMany();
  const tnProductsMap = new Map(tnProducts.map((p) => [p.interdataCode, p]));

  const wholesaleProductsToPatch: PatchStockPriceInput = erpProducts
    .filter(
      (erpProduct) =>
        tnProductsMap.has(erpProduct.prd_codigo) && erpProduct.prd_stock === 0
    )
    .map((erpProduct) => {
      const tnProduct = tnProductsMap.get(erpProduct.prd_codigo);
      if (!tnProduct) throw new Error("Product not found in Tienda Nube");

      return {
        id: tnProduct.productId,
        variants: [
          {
            id: tnProduct.variantId,
            price: 0,
          },
        ],
      };
    });
  const normalProductsToPatch: PatchStockPriceInput = erpProducts
    .filter((erpProduct) => tnProductsMap.has(erpProduct.prd_codigo))
    .map((erpProduct) => {
      const tnProduct = tnProductsMap.get(erpProduct.prd_codigo);
      if (!tnProduct) throw new Error("Product not found in Tienda Nube");

      return {
        id: tnProduct.productId,
        variants: [
          {
            id: tnProduct.variantId,
            inventory_levels: [
              {
                stock: erpProduct.prd_stock,
              },
            ],
          },
        ],
      };
    });

  if (normalProductsToPatch.length === 0) {
    console.log("No products to update");
    return;
  }

  await tnNormalStore.patchStockPrice(normalProductsToPatch).catch((err) => {
    void sendEmail(`Error updating stock in Tienda Nube: ${err}`);
    void saveLogs([
      {
        message: "Error updating stock in Tienda Nube",
        type: "error",
        data: {
          productsToPatch: normalProductsToPatch,
          error: err,
        },
      },
    ]);
  });

  await tnWholesaleStore
    .patchStockPrice(wholesaleProductsToPatch)
    .catch((err) => {
      void sendEmail(`Error updating wholesale stock in Tienda Nube: ${err}`);
      void saveLogs([
        {
          message: "Error updating wholesale stock in Tienda Nube",
          type: "error",
          data: {
            productsToPatch: wholesaleProductsToPatch,
            error: err,
          },
        },
      ]);
    });

  await saveLogs([
    {
      message: "Stock updated",
      type: "info",
      data: normalProductsToPatch.map((p) => ({
        productId: p.id,
        stock: p.variants[0].inventory_levels?.[0].stock ?? 0,
      })),
    },
  ]);
};

export default {
  name: "stock",
  cronJob: new CronJob("*/5 8-20 * * *", job),
  run: job,
};
