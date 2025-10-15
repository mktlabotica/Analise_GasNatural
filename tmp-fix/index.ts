import { disableTnProducts } from "../scripts/disable_tn_products.js";

await disableTnProducts();

console.log("Done");
console.log("Waiting forever...");
await new Promise((resolve) => {
  setInterval(() => {
    console.log("Still waiting...");
  }, 100000000);
});
