import { readFile, writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { UpdateProductsInput } from "../dataSources/tiendaNube/types.js";
import { Prisma } from "@prisma/client";
import { writeStdOut } from "../utils/writeStdOut.js";
import { saveLogs } from "../log/index.js";

type NewSize = {
  id: number;
  heightCM: string;
  widthCM: string;
  depthCM: string;
};

export const updateSizes = async () => {
  const products = await tnNormalStore.getAllProducts();
  const updatedProducts = await readFile(
    "./scripts/data/updated_products_new_sizes.json",
    "utf-8"
  ).then((data) => JSON.parse(data) as UpdateProductsInput);
  const newSizes = await readFile(
    "./scripts/data/products_new_sizes.json",
    "utf-8"
  )
    .then((data) => JSON.parse(data) as NewSize[])
    .then((data) =>
      data.filter((s) => !updatedProducts.some((p) => p.productId === s.id))
    );

  const productsNewSizes = newSizes.map((ns) => {
    const product = products.find((p) => ns.id === p.id);
    if (!product)
      throw new Error(`Product ${ns.id} not found in products array`);

    const variant = product.variants[0];
    if (!variant) throw new Error(`Product ${product.id} has no variants`);

    return {
      id: product.id,
      variantId: variant.id,
      heightCM: ns.heightCM,
      widthCM: ns.widthCM,
      depthCM: ns.depthCM,
    };
  });

  const productsToUpdate: UpdateProductsInput = productsNewSizes.map((p) => ({
    productId: p.id,
    variantId: p.variantId,
    height: p.heightCM,
    width: p.widthCM,
    depth: p.depthCM,
  }));

  console.log(`Products to update: ${productsToUpdate.length}`);

  const logs: Prisma.LogCreateManyInput[] = [];

  await tnNormalStore
    .updateProducts(productsToUpdate, {
      onError: async (updatedProducts) => {
        const allUpdatedProducts = await readFile(
          "./scripts/data/updated_products_new_sizes.json",
          "utf-8"
        ).then((data) => JSON.parse(data) as UpdateProductsInput);
        await writeFile(
          "./scripts/data/updated_products_new_sizes.json",
          JSON.stringify(allUpdatedProducts.concat(updatedProducts), null, 2)
        );
      },
    })
    .catch((err) => {
      void writeStdOut(`Error updating products in Tienda Nube: ${err}`);
      void saveLogs([
        {
          message: "Error updating products in Tienda Nube",
          type: "error",
          data: {
            error: err,
          },
        },
      ]);
    });

  await saveLogs(logs);
};
