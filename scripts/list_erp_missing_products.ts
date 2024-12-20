import { writeFile } from "fs/promises";
import { erp } from "../dataSources/erp/index.js";
import { Product as ErpProduct } from "../dataSources/erp/types.js";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { Product as TNProduct } from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";

export const listErpMissingProducts = async () => {
  const tnNormalProducts = await tnNormalStore.getAllProducts();
  const tnWholesaleProducts = await tnWholesaleStore.getAllProducts();
  const productsWithoutCode: {
    product: TNProduct;
    type: "normal" | "wholesale";
  }[] = [];
  const codesSet = new Set<string>();

  for (const product of tnNormalProducts) {
    if (!product.variants[0].sku) {
      productsWithoutCode.push({
        product,
        type: "normal",
      });
    } else {
      codesSet.add(product.variants[0].sku.toUpperCase());
    }
  }

  for (const product of tnWholesaleProducts) {
    if (!product.variants[0].sku) {
      productsWithoutCode.push({
        product,
        type: "wholesale",
      });
    } else {
      codesSet.add(product.variants[0].sku.toUpperCase());
    }
  }

  const erpProducts: ErpProduct[] = [];
  const codesMissingInErp: string[] = [];

  const batchedCodes = Array.from(codesSet).reduce<string[][]>(
    (acc, code, i) => {
      const batchIndex = Math.floor(i / 50);
      if (!acc[batchIndex]) {
        acc[batchIndex] = [];
      }
      acc[batchIndex].push(code);
      return acc;
    },
    []
  );

  let i = 0;
  for (const batch of batchedCodes) {
    console.log(`Fetching batch ${i++} of ${batchedCodes.length}`);
    const products = await erp.getProductsBatch(batch);
    erpProducts.push(...products);
  }

  for (const code of codesSet) {
    if (
      !erpProducts.find((product) => product.prd_alterna.toUpperCase() === code)
    ) {
      codesMissingInErp.push(code);
    }
  }

  await writeFile(
    "codes_missing_in_erp.json",
    JSON.stringify(codesMissingInErp, null, 2)
  );

  await writeFile(
    "products_without_code.json",
    JSON.stringify(productsWithoutCode, null, 2)
  );
};
