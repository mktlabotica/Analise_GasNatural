import { writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { Product } from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";
import prisma from "../db/index.js";
import { TNProduct } from "@prisma/client";

export const linkNormalAndWholesaleProducts = async () => {
  const normalProducts = await tnNormalStore.getAllProducts();
  const wholesaleProducts = await tnWholesaleStore.getAllProducts();
  const dbProducts = await prisma.tNProduct.findMany();

  const wholesaleProductsMap = new Map<string, Product>();
  for (const product of wholesaleProducts) {
    const sku = product.variants[0].sku;
    if (sku) {
      wholesaleProductsMap.set(sku, product);
    }
  }

  const dbProductsMap = new Map<number, TNProduct>();
  for (const product of dbProducts) {
    dbProductsMap.set(product.productId, product);
  }

  const productsToUpdate: {
    normal: Product;
    wholesale: Product;
    dbProduct: TNProduct;
  }[] = [];

  const dbMissingProducts: Product[] = [];

  for (const normalProduct of normalProducts) {
    const sku = normalProduct.variants[0].sku;
    if (!sku) continue;
    const wholesaleProduct = wholesaleProductsMap.get(sku);
    if (!wholesaleProduct) continue;
    const dbProduct = dbProductsMap.get(normalProduct.id);
    if (!dbProduct) {
      console.log(
        `Product ${normalProduct.id}, ${sku}, ${normalProduct.id} not found in db`
      );
      dbMissingProducts.push(normalProduct);
      continue;
    }
    productsToUpdate.push({
      normal: normalProduct,
      wholesale: wholesaleProduct,
      dbProduct,
    });
  }

  console.log(`Found ${productsToUpdate.length} products to link`);

  let count = 0;
  for (const { normal, wholesale } of productsToUpdate) {
    await prisma.tNProduct.update({
      where: { productId: normal.id },
      data: {
        wholesaleProductId: wholesale.id,
        wholesaleVariantId: wholesale.variants[0].id,
      },
    });
    console.log(`Linked ${count++}/${productsToUpdate.length}`);
  }

  writeFile(
    "./db_missing_products.json",
    JSON.stringify(dbMissingProducts, null, 2)
  );

  console.log("Done");
};
