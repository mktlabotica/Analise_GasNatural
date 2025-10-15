import { writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import {
  Product,
  UpdateProductsInput,
} from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";

export const syncTags = async () => {
  const normalProducts = await tnNormalStore.getAllProducts({
    includeGiftCards: true,
    includeVirtualProducts: true,
  });
  const wholesaleProducts = await tnWholesaleStore.getAllProducts({
    includeGiftCards: true,
    includeVirtualProducts: true,
  });

  const productsPairs = new Map<string, [Product, Product | null]>();

  for (const normalProduct of normalProducts) {
    const sku = normalProduct.variants[0].sku;
    if (!sku) continue;
    productsPairs.set(sku, [normalProduct, null]);
  }

  for (const wholesaleProduct of wholesaleProducts) {
    const sku = wholesaleProduct.variants[0].sku;
    if (!sku) continue;
    const pair = productsPairs.get(sku);
    if (pair) {
      pair[1] = wholesaleProduct;
    }
  }

  const productsToUpdate: UpdateProductsInput = [];
  for (const [normalProduct, wholesaleProduct] of productsPairs.values()) {
    if (!wholesaleProduct) continue;

    productsToUpdate.push({
      productId: wholesaleProduct.id,
      variantId: wholesaleProduct.variants[0].id,
      tags: normalProduct.tags,
    });
  }

  if (!productsToUpdate.some((p) => p.productId === 248173691)) {
    throw new Error("Product 248173691 not found in productsToUpdate");
  }
  await tnWholesaleStore.updateProducts(productsToUpdate, {
    async onError(error) {
      console.error(error);
    },
    async onFinished(updatedProducts) {
      await writeFile(
        "./tmp-fix/sync_tags.json",
        JSON.stringify(updatedProducts, null, 2)
      );
      console.log("Updated products", updatedProducts.length);
    },
  });
};
