import { CronJob } from "cron";
import { erp } from "../../../dataSources/erp/index.js";
import { GetOneProductResponse } from "../../../dataSources/erp/types.js";
import { writeFile } from "fs/promises";
import { writeStdOut } from "../../../utils/writeStdOut.js";
import { tnNormalStore } from "../../../dataSources/tiendaNube/normalStore.js";
import { PatchStockPriceInput } from "../../../dataSources/tiendaNube/types.js";
import { sendEmail } from "../../../mail/index.js";

const job = async () => {
  void sendEmail("Starting fullStockAndPrices job");
  try {
    const normalProducts = await tnNormalStore.getAllProducts({});

    const batchedTnProducts = normalProducts.reduce<(typeof normalProducts)[]>(
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
          return erp.getOneProduct(sku).catch(() => {
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

    const productsToPatch: PatchStockPriceInput = normalProducts
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
              price: erpProduct.prd_pvp_con_iva,
              inventory_levels: [
                {
                  stock: erpProduct.prd_stock,
                },
              ],
            },
          ],
        };
      });

    await writeFile(
      "./cron/jobs/fullStockAndPrices/productsToPatch.json",
      JSON.stringify(productsToPatch)
    );

    const patchedProducts = await tnNormalStore
      .patchStockPrice(productsToPatch)
      .catch((e) => {
        void sendEmail(`Error patching stock and prices: ${e.message}`);
        return [];
      });

    await writeFile(
      "./cron/jobs/fullStockAndPrices/patchedProducts.json",
      JSON.stringify(patchedProducts)
    );
  } catch (e) {
    void sendEmail(`Error in fullStockAndPrices job: ${e}`);
  }
};

export default {
  name: "full-stock-and-prices",
  cronJob: new CronJob("20 0,2,4,6 * * *", job),
  run: job,
};
