import { CronJob } from "cron";
import { GetOneProductResponse } from "../../../dataSources/erp/types.js";
import { writeStdOut } from "../../../utils/writeStdOut.js";
import { erp } from "../../../dataSources/erp/index.js";
import { sendEmail } from "../../../mail/index.js";
import { PatchStockPriceInput } from "../../../dataSources/tiendaNube/types.js";
import { writeFile } from "fs/promises";
import { tnWholesaleStore } from "../../../dataSources/tiendaNube/wholesaleStore.js";

const job = async () => {
  void sendEmail("Starting wholesalePrices job");
  try {
    const wholesaleProducts = await tnWholesaleStore.getAllProducts();

    const batchedTnProducts = wholesaleProducts.reduce<
      (typeof wholesaleProducts)[]
    >(
      (acc, product) => {
        if (!product.variants[0].sku) {
          void sendEmail(`Product ${product.id} has no sku`);
          return acc;
        }
        if (acc[acc.length - 1].length < 50) {
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
          if (!sku) throw new Error("Product has no sku");
          return erp.getOneProduct(sku, { priceList: 3 }).catch(() => {
            void sendEmail(`Error fetching product ${sku} from ERP`);
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

    const productsToPatch: PatchStockPriceInput = wholesaleProducts
      .filter((product) =>
        erpProductsMap.has(product.variants[0].sku?.toUpperCase() || "")
      )
      .map((product): PatchStockPriceInput[0] => {
        const erpProduct = erpProductsMap.get(
          product.variants[0].sku?.toUpperCase() || ""
        );
        if (!erpProduct) throw new Error("Product not found in ERP");
        const variantId = product.variants[0].id;

        return {
          id: product.id,
          variants: [
            {
              id: variantId,
              price: erpProduct.prd_pvp_sin_iva,
            },
          ],
        };
      });

    await writeFile(
      "./cron/jobs/wholesalePrices/productsToPatch.json",
      JSON.stringify(productsToPatch)
    );

    const patchedProducts = await tnWholesaleStore
      .patchStockPrice(productsToPatch)
      .catch((e) => {
        void sendEmail(`Error patching stock and prices: ${e}`);
        return [];
      });

    await writeFile(
      "./cron/jobs/wholesalePrices/patchedProducts.json",
      JSON.stringify(patchedProducts)
    );
  } catch (e) {
    void sendEmail(`Error in wholesale prices cron job: ${e}`);
  }
};

export default {
  name: "whole-sale-prices",
  cronJob: new CronJob("20 1,3,5,7 * * *", job),
  run: job,
};
