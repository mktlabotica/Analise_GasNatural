import { CronJob } from "cron";
import { tnNormalStore } from "../../../dataSources/tiendaNube/normalStore.js";
import {
  BRAND_CF_ID,
  PROVIDER_CF_ID,
  tnWholesaleStore,
} from "../../../dataSources/tiendaNube/wholesaleStore.js";
import {
  Category,
  CreateProductInput,
  PatchStockPriceInput,
  Product,
} from "../../../dataSources/tiendaNube/types.js";
import { erp } from "../../../dataSources/erp/index.js";
import { Product as ERPProduct } from "../../../dataSources/erp/types.js";
import { saveLogs } from "../../../log/index.js";
import { sendEmail } from "../../../mail/index.js";
import prisma from "../../../db/index.js";
import { Prisma, TNProduct } from "@prisma/client";

const job = async () => {
  const categoriesIdsMap = await setupCategories();

  const [missingWholesaleProducts, missingDBProducts] = await compareProducts({
    categoriesIdsMap,
  });

  await createMissingProducts(missingWholesaleProducts, missingDBProducts);

  console.log("Finished");
};

const createMissingProducts = async (
  products: CreateProductInput[],
  dbProducts: Prisma.TNProductCreateInput[]
) => {
  console.log(`Creating ${products.length} products`);

  const createdProducts: Product[] = [];
  let i = 0;
  for (const product of products) {
    console.log(`Creating product ${i++} of ${products.length}`);
    createdProducts.push(await tnWholesaleStore.createProduct(product));
  }

  const productsToPatch: PatchStockPriceInput = dbProducts.map((p) => ({
    id: p.productId,
    variants: [{ id: p.variantId, inventory_levels: [{ stock: p.stock }] }],
  }));

  await tnNormalStore.patchStockPrice(productsToPatch).catch((e) => {
    void sendEmail(`Error patching stock and prices: ${e.message}`);
    void saveLogs([
      {
        message: `Error patching stock and prices: ${e.message}`,
        type: "error",
        data: JSON.stringify(productsToPatch),
      },
    ]);
  });

  const createdOrUpdatedDBProducts: Prisma.TNProductCreateInput[] = [];
  for (const product of dbProducts) {
    await prisma.tNProduct.upsert({
      where: { productId: product.productId },
      update: product,
      create: product,
    });

    createdOrUpdatedDBProducts.push(product);
  }

  await saveLogs([
    {
      message: `Created ${createdProducts.length} products`,
      type: "info",
      data: createdProducts.map((p) => p.id),
    },
  ]);

  if (createdProducts.length > 0)
    await sendEmail(
      `Se crearon ${
        createdProducts.length
      } productos en la tienda mayorista a las ${new Date().toLocaleString()}`
    );
  if (createdOrUpdatedDBProducts.length > 0)
    await sendEmail(
      `Se crearon o actualizaron ${
        createdOrUpdatedDBProducts.length
      } productos en la base de datos a las ${new Date().toLocaleString()}`
    );

  if (createdProducts.length === 0 && createdOrUpdatedDBProducts.length === 0)
    console.log("No products created or updated");
};

const compareProducts = async ({
  categoriesIdsMap,
}: {
  categoriesIdsMap: Map<number, number>;
}) => {
  const normalProducts = await tnNormalStore.getAllProducts({
    withImages: true,
  });
  const wholesaleProducts = await tnWholesaleStore.getAllProducts();
  const dbProducts = await prisma.tNProduct.findMany();
  const erpProductsMap = new Map<string, ERPProduct>();

  const skuMap = new Map<
    string,
    { normal: Product; wholesale?: Product; dbProduct?: TNProduct }
  >();
  for (const normalProduct of normalProducts) {
    const sku = normalProduct.variants[0].sku?.toUpperCase();
    if (!sku) {
      console.log(`Product without sku ${normalProduct.id}`);
      sendEmail(`Product without sku ${normalProduct.id}`);
      continue;
    }
    skuMap.set(sku, { normal: normalProduct });
  }
  for (const wholesaleProduct of wholesaleProducts) {
    const sku = wholesaleProduct.variants[0].sku?.toUpperCase();
    if (!sku)
      throw new Error(`Wholesale Product without sku ${wholesaleProduct.id}`);
    const normalProduct = skuMap.get(sku)?.normal;
    if (!normalProduct) continue;
    skuMap.set(sku, {
      normal: normalProduct,
      wholesale: wholesaleProduct,
    });
  }
  for (const dbProduct of dbProducts) {
    const sku = dbProduct.code.toUpperCase();
    if (!sku) throw new Error(`DB Product without sku ${dbProduct.id}`);
    const normalProduct = skuMap.get(sku)?.normal;
    if (!normalProduct) continue;
    skuMap.set(sku, {
      normal: normalProduct,
      wholesale: skuMap.get(sku)?.wholesale,
      dbProduct,
    });
  }

  const missingWholesaleProducts: CreateProductInput[] = [];
  for (const productsPair of skuMap.values()) {
    if (productsPair.wholesale) continue;
    const normal = productsPair.normal;
    const variant = normal.variants[0];
    const sku = variant.sku?.toUpperCase();
    if (!sku) throw new Error(`Product without sku ${productsPair.normal.id}`);
    const erpProduct = await erp.getOneProduct(sku, { priceList: 3 });
    if (!erpProduct) {
      console.log(`Product ${sku} not found in ERP. Skipping`);
      continue;
    }
    erpProductsMap.set(sku, erpProduct);
    if (normal.categories.some((c) => !categoriesIdsMap.has(c.id))) continue;

    missingWholesaleProducts.push({
      barcode: variant.barcode,
      brand: erpProduct.prd_marca_nom || null,
      brandFieldId: BRAND_CF_ID,
      proveedor: erpProduct.prd_proveedor || null,
      proveedorFieldId: PROVIDER_CF_ID,
      categories: productsPair.normal.categories.map((c) => {
        const wholesaleId = categoriesIdsMap.get(c.id);
        if (!wholesaleId) throw new Error("Category without wholesale id");
        return wholesaleId;
      }),
      description: productsPair.normal.description.es,
      images:
        productsPair.normal.images?.map((i) => ({
          src: i.src,
          position: i.position,
        })) || [],
      name: productsPair.normal.name.es,
      price: erpProduct.prd_pvp_sin_iva.toString(),
      sku: sku,
      promotional_price: "0",
      requires_shipping: productsPair.normal.requires_shipping,
      stock: 0,
      depth: variant.depth,
      height: variant.height,
      weight: variant.weight,
      width: variant.width,
      tags: productsPair.normal.tags,
    });
  }

  const missingDBProducts: Prisma.TNProductCreateInput[] = [];
  for (const productsPair of skuMap.values()) {
    if (productsPair.dbProduct && productsPair.dbProduct.interdataCode)
      continue;
    const sku = productsPair.normal.variants[0].sku?.toUpperCase();
    if (!sku) throw new Error(`Product without sku ${productsPair.normal.id}`);

    const erpProduct = erpProductsMap.get(sku);
    if (!erpProduct) continue;

    console.log(`Product ${sku} not found in DB. adding`);
    missingDBProducts.push({
      code: sku,
      productId: productsPair.normal.id,
      variantId: productsPair.normal.variants[0].id,
      wholesaleProductId: productsPair.wholesale?.id,
      wholesaleVariantId: productsPair.wholesale?.variants[0].id,
      interdataCode: erpProduct.prd_codigo,
      stock: erpProduct.prd_stock,
      active: true,
    });
  }

  console.log(
    `Missing products: ${missingWholesaleProducts.length} wholesale, ${missingDBProducts.length} db`
  );

  return [missingWholesaleProducts, missingDBProducts] as const;
};

const setupCategories = async () => {
  const normalCategories = await tnNormalStore.getAllCategories();
  const wholesaleCategories = await tnWholesaleStore.getAllCategories();

  const handlesMap = new Map<
    string,
    { normal: Category; wholesale?: Category }
  >();
  for (const category of normalCategories) {
    handlesMap.set(category.handle.es, { normal: category });
  }
  for (const category of wholesaleCategories) {
    const normalCategory = handlesMap.get(category.handle.es)?.normal;
    if (!normalCategory) continue;
    handlesMap.set(category.handle.es, {
      normal: normalCategory,
      wholesale: category,
    });
  }

  const normalIdToWholesaleIdMap = new Map<number, number>();
  for (const categoriesPair of handlesMap.values()) {
    if (!categoriesPair.wholesale) continue;
    normalIdToWholesaleIdMap.set(
      categoriesPair.normal.id,
      categoriesPair.wholesale.id
    );
  }

  for (const categoriesPair of handlesMap.values()) {
    if (categoriesPair.wholesale) continue;
    const wholesaleParentId = categoriesPair.normal.parent
      ? normalIdToWholesaleIdMap.get(categoriesPair.normal.parent)
      : 0;
    if (wholesaleParentId === undefined) continue;

    const createdCategory = await tnWholesaleStore.createCategory({
      description: categoriesPair.normal.description.es,
      handle: categoriesPair.normal.handle.es,
      name: categoriesPair.normal.name.es,
      parent: wholesaleParentId,
    });

    await sendEmail(
      `Se creó la categoría ${categoriesPair.normal.name.es} en la tienda mayorista`,
      `Nueva categoría ${categoriesPair.normal.name.es}`
    );

    normalIdToWholesaleIdMap.set(categoriesPair.normal.id, createdCategory.id);
  }

  return normalIdToWholesaleIdMap;
};

export default {
  name: "setup-products",
  cronJob: new CronJob("3,8,13,18,23,28,33,38,43,48,53,58 8-20 * * *", job),
  run: job,
};
