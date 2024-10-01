import fs from "fs/promises";

type BrandProviderInfo = {
  productId: number;
  proveedorFieldId: string;
  proveedorValue: string;
  marcaFieldId: string;
  marcaValue: string;
};

async function main() {
  const data = await fs
    .readFile("loadBrandProviderInfoTnProducts.json", "utf-8")
    .then((data) => JSON.parse(data) as BrandProviderInfo[]);

  const providersSet = new Set<string>();
  const brandsSet = new Set<string>();

  data.forEach((item) => {
    providersSet.add(item.proveedorValue);
    brandsSet.add(item.marcaValue);
  });

  await fs.writeFile("providers.csv", Array.from(providersSet).join("\n"));
  await fs.writeFile("brands.csv", Array.from(brandsSet).join("\n"));
}

main();
