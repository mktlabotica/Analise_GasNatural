import { findErpDisabledProducts } from "../scripts/find_erp_disabled_products.js";

await findErpDisabledProducts();

console.log("Done");
console.log("Waiting forever...");
await new Promise((resolve) => {
  setInterval(() => {
    console.log("Still waiting...");
  }, 100000000);
});
