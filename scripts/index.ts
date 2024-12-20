import "dotenv/config";
import prompts from "prompts";
import { setupProducts } from "./setup_products.js";
import { fixWeights } from "./fix_weights.js";
import { findErpDuplicates } from "./find_erp_duplicates.js";
import { fixImages } from "./fix_images.js";
import { findErpDisabledProducts } from "./find_erp_disabled_products.js";
import { findTnShouldEnableProducts } from "./find_tn_should_enable_products.js";
import { deleteErpDisabledProducts } from "./delete_erp_disabled_products.js";
import { updateProductInterdataCodes } from "./updateProductInterdataCodes.js";
import { refreshProducts } from "./refresh_products.js";
import { loadBrandProviderInfoTnProducts } from "./load_brand_provider_info_tn_products.js";
import { updateSizes } from "./update_sizes.js";
import { loadWholesaleMissingProducts } from "./load_wholesale_missing_products.js";
import { linkNormalAndWholesaleProducts } from "./link_normal_and_wholesale_products.js";
import { listErpMissingProducts } from "./list_erp_missing_products.js";
import { disableTnProducts } from "./disable_tn_products.js";
import { fixTnWholesaleStore } from "./fix_tnwholesalestore.js";
import { syncImages } from "./sync_images.js";

const script = await prompts({
  type: "select",
  name: "script",
  message: "Select a script to run",
  choices: [
    { title: "setup_products", value: setupProducts },
    { title: "fix_weights", value: fixWeights },
    { title: "find_erp_duplicates", value: findErpDuplicates },
    { title: "fix_images", value: fixImages },
    {
      title: "find_erp_disabled_products",
      value: findErpDisabledProducts,
    },
    {
      title: "find_tn_should_enable_products",
      value: findTnShouldEnableProducts,
    },
    {
      title: "delete_erp_disabled_products",
      value: deleteErpDisabledProducts,
    },
    {
      title: "update_product_interdata_codes",
      value: updateProductInterdataCodes,
    },
    { title: "refresh_products", value: refreshProducts },
    {
      title: "load_brand_provider_info_tn_products",
      value: loadBrandProviderInfoTnProducts,
    },
    {
      title: "update_sizes",
      value: updateSizes,
    },
    {
      title: "load_wholesale_missing_products",
      value: loadWholesaleMissingProducts,
    },
    {
      title: "link_normal_and_wholesale_products",
      value: linkNormalAndWholesaleProducts,
    },
    {
      title: "list_erp_missing_products",
      value: listErpMissingProducts,
    },
    {
      title: "disable_tn_products",
      value: disableTnProducts,
    },
    {
      title: "fix_tnwholesalestore",
      value: fixTnWholesaleStore,
    },
    {
      title: "sync_images",
      value: syncImages,
    },
  ],
}).then((res) => {
  if (typeof res.script === "function") {
    return res.script;
  } else {
    throw new Error("No script selected");
  }
});

console.log("Running script...");
await script();

console.log("Script complete!");
