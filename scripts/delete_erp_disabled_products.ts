import { readFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";

type ErpDisabledProduct = {
  code: string;
  id: number;
};

export const deleteErpDisabledProducts = async () => {
  const erpDisabledProducts = await readFile(
    "./scripts/data/missingErpProducts.json",
    "utf-8"
  );

  const products = JSON.parse(erpDisabledProducts) as ErpDisabledProduct[];

  // console.log(
  //   JSON.stringify(
  //     products.map((p) => p.code),
  //     null,
  //     2
  //   )
  // );
  // console.log(products.length);

  for (const product of products) {
    await tnNormalStore.deleteProduct(product.id);
  }
};
