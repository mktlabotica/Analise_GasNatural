import { writeFile } from "fs/promises";
import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import {
  CreateCategoryInput,
  CreateProductInput,
  Product,
  UpdateProductsInput,
} from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";
import { erp } from "../dataSources/erp/index.js";
import { GetOneProductResponse } from "../dataSources/erp/types.js";
import { writeStdOut } from "../utils/writeStdOut.js";

export const loadWholesaleMissingProducts = async () => {
  // CATEGORIES
  const normalCategories = await tnNormalStore.getAllCategories();
  const wholesaleCategories = await tnWholesaleStore.getAllCategories();
  const normalIdToWholesaleIdMap = new Map<number, number>();
  const categoriesToCreate: CreateCategoryInput[] = [];

  for (const category of normalCategories) {
    let wholesaleCategory = wholesaleCategories.find(
      (c) => c.handle.es === category.handle.es
    );
    if (wholesaleCategory) {
      normalIdToWholesaleIdMap.set(category.id, wholesaleCategory.id);
    } else {
      console.log(
        `Category ${category.name.es} not found in wholesale store, creating...`
      );
      categoriesToCreate.push({
        name: category.name.es,
        parent: category.parent || null,
        description: category.description.es,
        handle: category.handle.es,
      });
    }
  }

  if (categoriesToCreate.length) {
    console.log(`Creating ${categoriesToCreate.length} categories...`);
    for (const category of categoriesToCreate) {
      const normalParentId = category.parent;
      const wholesaleParentId = normalParentId
        ? normalIdToWholesaleIdMap.get(normalParentId)
        : null;
      if (wholesaleParentId === undefined) {
        console.log(
          `Parent category ${normalParentId} not found in wholesale store`
        );
        continue;
      }
      category.parent = wholesaleParentId;

      const createdCategory = await tnWholesaleStore.createCategory(category);
      if (normalParentId)
        normalIdToWholesaleIdMap.set(normalParentId, createdCategory.id);
    }
  }

  const wholesaleProducts = await tnWholesaleStore.getAllProducts();
  const normalProducts = await tnNormalStore.getAllProducts({
    withImages: true,
  });

  const wholesaleProductsMap = new Map<string, Product>();
  const wholesaleProductsMapByHandle = new Map<string, Product>();
  const wholesaleProductsCodes = new Set<string>();
  const wholesaleProductsHandles = new Set<string>();
  const normalProductsCodes = new Set<string>();
  const normalProductsHandles = new Set<string>();
  const missingProducts: CreateProductInput[] = [];
  const productsToUpdate: UpdateProductsInput = [];

  for (const product of wholesaleProducts) {
    const code = product.variants[0].sku;
    if (!code) {
      console.log(product);
      throw new Error("Product without code");
    }
    wholesaleProductsCodes.add(code);
    wholesaleProductsMap.set(code, product);
    wholesaleProductsHandles.add(product.handle.es);
    wholesaleProductsMapByHandle.set(product.handle.es, product);
  }

  for (const product of normalProducts) {
    const code = product.variants[0].sku;
    if (!code) throw new Error("Product without code");
    normalProductsCodes.add(code);
    normalProductsHandles.add(product.handle.es);
    if (
      !wholesaleProductsCodes.has(code) &&
      !wholesaleProductsHandles.has(product.handle.es)
    ) {
      const variant = product.variants[0];
      if (!variant) throw new Error("Product without variant");

      missingProducts.push({
        name: product.name.es,
        brand: null,
        brandFieldId: "278d15da-9ddd-4687-a6cd-e5753286c7d3",
        proveedor: null,
        proveedorFieldId: "2a0e20a3-ff7d-4da3-897b-8d296c5cbd3f",
        depth: variant.depth,
        height: variant.height,
        width: variant.width,
        weight: variant.weight,
        price: variant.price,
        promotional_price: variant.promotional_price,
        requires_shipping: product.requires_shipping,
        sku: code,
        images:
          product.images?.map((i) => ({
            src: i.src,
            position: i.position,
          })) || [],
        categories: product.categories.map((c) => {
          const wholesaleId = normalIdToWholesaleIdMap.get(c.id);
          if (!wholesaleId) throw new Error("Category without wholesale id");
          return wholesaleId;
        }),
        description: product.description.es,
        barcode: variant.barcode,
        stock: 0,
      });
    } else {
      const wholesaleProduct =
        wholesaleProductsMap.get(code) ||
        wholesaleProductsMapByHandle.get(product.handle.es);
      if (!wholesaleProduct) throw new Error("Product not found in wholesale");
      productsToUpdate.push({
        productId: wholesaleProduct.id,
        variantId: 0,
        categories: product.categories.map((c) => {
          const wholesaleId = normalIdToWholesaleIdMap.get(c.id);
          if (!wholesaleId) throw new Error("Category without wholesale id");
          return wholesaleId;
        }),
        sku: code,
      });
    }
  }
  console.log("Getting products from erp");
  const batchedMissingProducts = missingProducts.reduce<
    (typeof missingProducts)[]
  >(
    (acc, product) => {
      if (acc[acc.length - 1].length < 30) {
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
  for (const batch of batchedMissingProducts) {
    writeStdOut(`Fetching batch ${i++} of ${batchedMissingProducts.length}`);
    const batchedErpProducts = await Promise.all(
      batch.map((product) =>
        erp.getOneProduct(product.sku).catch(() => {
          console.log(`Error fetching product ${product.sku} from ERP`);
          return undefined;
        })
      )
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

  const productsNotFoundInErp: {
    sku: string;
    name: string;
  }[] = [];

  missingProducts.forEach((product) => {
    const erpProduct = erpProductsMap.get(product.sku.toUpperCase());
    if (!erpProduct) {
      console.error("Product not found in ERP");
      productsNotFoundInErp.push({
        sku: product.sku,
        name: product.name,
      });
      return;
    }
    product.stock = erpProduct.prd_stock || 0;
    product.brand = erpProduct.prd_marca_nom || null;
    product.proveedor = erpProduct.prd_proveedor || null;
  });

  console.log("writing files");
  await writeFile(
    "products_not_found_in_erp.json",
    JSON.stringify(productsNotFoundInErp, null, 2)
  );

  await writeFile(
    "missing_wholesale_products.json",
    JSON.stringify(missingProducts, null, 2)
  );

  await writeFile(
    "wholesale_products_to_update.json",
    JSON.stringify(productsToUpdate, null, 2)
  );

  console.log("updating products");
  await tnWholesaleStore.updateProducts(productsToUpdate, {
    onError: async (updatedProducts, failedProduct) => {
      writeFile(
        "updated_wholesale_products.json",
        JSON.stringify(updatedProducts, null, 2)
      );
      console.error(
        `Error updating product ${failedProduct.sku} with id ${failedProduct.productId}`
      );
    },
  });

  console.log("creating products");
  await Promise.all(
    missingProducts.map((product) =>
      tnWholesaleStore
        .createProduct(product)
        .then((createdProduct) => {
          console.log(`Product ${createdProduct.name.es} created!`);
        })
        .catch((error) => {
          console.error(
            `Error creating product ${product.sku}: ${error.message}`
          );
        })
    )
  );
};
