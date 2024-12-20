import prisma from "../db/index.js";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { Product as TiendaNubeProduct } from "../dataSources/tiendaNube/types.js";
import { Prisma } from "@prisma/client";
import { saveLogs } from "../log/index.js";

export const setupProducts = async () => {
  const tnProducts = await getTiendaNubeProducts();

  await saveProducts(tnProducts);
};

async function cleanupDatabase() {
  console.log("Database cleanup...");
  await prisma.tNProduct.deleteMany();
  await prisma.tNDuplicatedCodes.deleteMany();
  console.log("Database cleanup complete!");
}

async function getTiendaNubeProducts() {
  console.log("Getting TiendaNube products...");
  const products = await tnNormalStore.getAllProducts({
    requiresShipping: true,
  });
  console.log("TiendaNube products retrieved!");

  saveLogs([
    {
      type: "info",
      message: `Se encontraron ${products.length} productos en TiendaNube`,
      data: undefined,
    },
  ]);

  return products;
}

async function saveProducts(tnProducts: TiendaNubeProduct[]) {
  console.log("Saving products to database...");
  const productsMap = new Map<string, TiendaNubeProduct[]>();
  for (const product of tnProducts) {
    const variant = product.variants[0];
    if (!variant) continue;
    const code = variant.sku;
    if (!code) continue;
    const existing = productsMap.get(code.toUpperCase()) || [];

    productsMap.set(code.toUpperCase(), [...existing, product]);
  }

  const productsToSave: Prisma.TNProductCreateManyInput[] = [];
  const duplicatedCodes: string[] = [];
  for (const [code, products] of productsMap) {
    if (products.length > 1) {
      duplicatedCodes.push(code);
      continue;
    }
    const product = products[0];
    const variant = product.variants[0];
    if (!variant) continue;
    productsToSave.push({
      productId: product.id,
      variantId: variant.id,
      code,
      stock: 0,
      active: product.published,
      createdAt: new Date(product.created_at),
    });
  }

  await prisma.$transaction(
    productsToSave.map((product) =>
      prisma.tNProduct.upsert({
        where: { productId: product.productId },
        update: product,
        create: product,
      })
    )
  );

  console.log("Products saved to database!");

  await Promise.all(
    duplicatedCodes.map((code) =>
      prisma.tNDuplicatedCodes.upsert({
        where: { code },
        update: { code },
        create: { code },
      })
    )
  );
}
