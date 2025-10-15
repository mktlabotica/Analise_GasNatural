import { readFile, writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { Product } from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";

export const compareStoresProducts = async () => {
  const fromFile = await readFile(
    "./compare_stores_products_cache.json",
    "utf-8"
  )
    .then(
      (file) =>
        JSON.parse(file) as {
          wholesaleProductsLength: number;
          normalProductsLength: number;
          productsBySku: Array<[string, [Product[], Product[]]]>;
        }
    )
    .catch(() => null);
  const wholesaleProducts = !fromFile
    ? await tnWholesaleStore.getAllProducts()
    : [];
  const normalProducts = !fromFile ? await tnNormalStore.getAllProducts() : [];

  const productsBySku = new Map<string, [Product[], Product[]]>(
    fromFile?.productsBySku || []
  );

  if (!fromFile) {
    for (const wholesaleProduct of wholesaleProducts) {
      const sku = wholesaleProduct.variants[0].sku;
      if (!sku) {
        console.log(`SKU not found for product ${wholesaleProduct.id}`);
        continue;
      }
      const pair = productsBySku.get(sku);
      if (pair) {
        pair[0].push(wholesaleProduct);
      } else {
        productsBySku.set(sku, [[wholesaleProduct], []]);
      }
    }

    for (const normalProduct of normalProducts) {
      const sku = normalProduct.variants[0].sku;
      if (!sku) {
        console.log(`SKU not found for product ${normalProduct.id}`);
        continue;
      }
      const pair = productsBySku.get(sku);
      if (pair) {
        pair[1].push(normalProduct);
      } else {
        productsBySku.set(sku, [[], [normalProduct]]);
      }
    }

    await writeFile(
      "./compare_stores_products_cache.json",
      JSON.stringify(
        {
          wholesaleProductsLength: wholesaleProducts.length,
          normalProductsLength: normalProducts.length,
          productsBySku: Array.from(productsBySku.entries()),
        },
        null,
        2
      )
    );
  }

  let inWholesaleNotInNormal = 0;
  let inNormalNotInWholesale = 0;
  let inBothStores = 0;
  let inWholesaleNotInNormalSkus: string[] = [];
  let inNormalNotInWholesaleSkus: string[] = [];
  let duplicatedCodesInWholesale: string[] = [];
  let duplicatedCodesInNormal: string[] = [];

  for (const [sku, [wholesaleProducts, normalProducts]] of productsBySku) {
    if (wholesaleProducts.length > normalProducts.length) {
      inWholesaleNotInNormal +=
        wholesaleProducts.length - normalProducts.length;
      inWholesaleNotInNormalSkus.push(sku);
    }

    if (normalProducts.length > wholesaleProducts.length) {
      inNormalNotInWholesale +=
        normalProducts.length - wholesaleProducts.length;
      inNormalNotInWholesaleSkus.push(sku);
    }

    if (wholesaleProducts.length > 1) {
      duplicatedCodesInWholesale.push(sku);
    }

    if (normalProducts.length > 1) {
      duplicatedCodesInNormal.push(sku);
    }

    if (wholesaleProducts.length === normalProducts.length) {
      inBothStores += wholesaleProducts.length;
      continue;
    }
  }

  writeFile(
    "./results.json",
    JSON.stringify(
      {
        inWholesale:
          wholesaleProducts.length || fromFile?.wholesaleProductsLength,
        inNormal: normalProducts.length || fromFile?.normalProductsLength,
        inWholesaleNotInNormal,
        inNormalNotInWholesale,
        inBothStores,
        totalSkus: productsBySku.size,
        totalProducts:
          inWholesaleNotInNormal + inNormalNotInWholesale + inBothStores,
        inWholesaleNotInNormalSkus,
        inNormalNotInWholesaleSkus,
        duplicatedCodesInWholesale,
        duplicatedCodesInNormal,
      },
      null,
      2
    )
  );
};
