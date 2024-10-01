import { writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";

export const findTnShouldEnableProducts = async () => {
  const tnProducts = await tnNormalStore
    .getAllProducts({
      published: false,
    })
    .then((products) =>
      products.filter((product) => product.variants[0]?.weight !== "0.000")
    );

  writeFile(
    "tn_should_enable_products.json",
    JSON.stringify(tnProducts, null, 2)
  );
};
