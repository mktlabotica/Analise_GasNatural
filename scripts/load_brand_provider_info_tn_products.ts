import { writeFile } from "fs/promises";
import { erp } from "../dataSources/erp/index.js";
import { GetOneProductResponse } from "../dataSources/erp/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";
import { UpdateProductsCustomFieldsInput } from "../dataSources/tiendaNube/types.js";
import { writeStdOut } from "../utils/writeStdOut.js";

export const loadBrandProviderInfoTnProducts = async () => {
  const tnProducts = await tnWholesaleStore.getAllProducts();

  const batchedTnProducts = tnProducts.reduce<(typeof tnProducts)[]>(
    (acc, product) => {
      if (acc[acc.length - 1].length < 30) {
        acc[acc.length - 1].push(product);
      } else {
        acc.push([product]);
      }
      return acc;
    },
    [[]]
  );

  const erpProducts: GetOneProductResponse[] = [];
  let i = 0;
  for (const batch of batchedTnProducts) {
    writeStdOut(`Fetching batch ${i++} of ${batchedTnProducts.length}`);
    const batchedErpProducts = await Promise.all(
      batch.map((product) => {
        const sku = product.variants[0].sku;
        if (!sku) return Promise.resolve(undefined);
        return erp.getOneProduct(sku).catch(() => {
          return undefined;
        });
      })
    );

    batchedErpProducts.forEach((erpProduct) => {
      if (erpProduct) erpProducts.push(erpProduct);
    });
  }
  writeStdOut("Finished fetching products", true);

  const erpProductsMap = new Map<string, GetOneProductResponse>();
  erpProducts.forEach((product) =>
    erpProductsMap.set(product.prd_alterna.toUpperCase(), product)
  );

  const productsToUpdateCustomFields: UpdateProductsCustomFieldsInput =
    tnProducts
      .filter((product) =>
        erpProductsMap.has(product.variants[0]?.sku?.toUpperCase() || "")
      )
      .map((product): UpdateProductsCustomFieldsInput[0] => {
        const erpProduct = erpProductsMap.get(
          product.variants[0]?.sku?.toUpperCase() || ""
        );
        if (!erpProduct) throw new Error("Product not found in ERP");
        return {
          productId: product.id,
          proveedorFieldId: "2a0e20a3-ff7d-4da3-897b-8d296c5cbd3f",
          proveedorValue: erpProduct.prd_proveedor || "No especificado",
          marcaFieldId: "278d15da-9ddd-4687-a6cd-e5753286c7d3",
          marcaValue: erpProduct.prd_marca_nom || "No especificado",
        };
      });

  const productsToUpdateBrand: { productId: number; brand: string }[] =
    tnProducts
      .filter((product) =>
        erpProductsMap.has(product.variants[0]?.sku?.toUpperCase() || "")
      )
      .map((product): { productId: number; brand: string } => {
        const erpProduct = erpProductsMap.get(
          product.variants[0]?.sku?.toUpperCase() || ""
        );
        if (!erpProduct) throw new Error("Product not found in ERP");
        return {
          productId: product.id,
          brand: erpProduct.prd_marca_nom || "",
        };
      });

  await tnWholesaleStore.updateProductsCustomFields(
    productsToUpdateCustomFields
  );
  await tnWholesaleStore.updateProductsBrands(productsToUpdateBrand);

  writeStdOut("Finished updating products", true);

  await writeFile(
    "logs/loadBrandProviderInfoTnProducts.json",
    JSON.stringify(productsToUpdateCustomFields, null, 2)
  );
};
