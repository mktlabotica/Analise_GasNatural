import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";

export const fixTnWholesaleStore = async () => {
  const categories = await tnWholesaleStore.getAllCategories();
  const normalCategories = await tnNormalStore.getAllCategories();

  for (const category of categories) {
    const normalCategory = normalCategories.find(
      (c) => c.handle.es === category.handle.es
    );

    if (normalCategory) continue;

    await tnWholesaleStore.deleteCategory(category.id);
  }

  console.log("Categories fixed");
};
