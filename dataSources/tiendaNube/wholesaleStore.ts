import { createProduct, getAllCategories, tiendaNube } from "./index.js";
import {
  CreateCategoryInput,
  CreateProductInput,
  DeleteProductPicsInput,
  PatchStockPriceInput,
  UpdateProductsCustomFieldsInput,
  UpdateProductsInput,
  UploadProductsPicsInput,
} from "./types.js";

const BASE_URL = process.env.TIENDANUBE_MAY_URL; // URL base de la API de TiendaNube
const TOKEN1 = process.env.TIENDANUBE_MAY_TOKEN1; // Token de acceso a la API de TiendaNube
const TOKEN2 = process.env.TIENDANUBE_MAY_TOKEN2; // Token 2 de acceso a la API de TiendaNube
const TOKEN3 = process.env.TIENDANUBE_MAY_TOKEN3; // Token 3 de acceso a la API de TiendaNube
const TOKEN4 = process.env.TIENDANUBE_MAY_TOKEN4; // Token 4 de acceso a la API de TiendaNube
const TOKEN5 = process.env.TIENDANUBE_MAY_TOKEN5; // Token 5 de acceso a la API de TiendaNube

if (!TOKEN1 || !BASE_URL || !TOKEN2 || !TOKEN3 || !TOKEN4 || !TOKEN5) {
  throw new Error("No se encontró el token de TiendaNube");
}

const TOKENS = [TOKEN1, TOKEN2, TOKEN3, TOKEN4, TOKEN5];

const userAgent = "prueba (gustavo@digitalmix.ar)";

const defaultOpts = {
  tokens: TOKENS,
  baseUrl: BASE_URL,
  userAgent,
};

export const tnWholesaleStore = {
  getAllProducts: async (
    opts: {
      withImages?: boolean;
      published?: boolean;
      created_at_min?: string;
      requiresShipping?: boolean;
    } = {}
  ) => {
    return tiendaNube.getAllProducts({
      ...defaultOpts,
      ...opts,
    });
  },
  patchStockPrice: async (products: PatchStockPriceInput) => {
    return tiendaNube.patchStockPrice(products, defaultOpts);
  },
  updateProducts: async (
    data: UpdateProductsInput,
    opts: {
      onError?: (
        updatedProducts: UpdateProductsInput,
        failedProduct: UpdateProductsInput[number]
      ) => Promise<void>;
      onSuccess?: (
        updatedProduct: UpdateProductsInput[number]
      ) => Promise<void>;
      onFinished?: (updatedProducts: UpdateProductsInput) => Promise<void>;
    } = {}
  ) => {
    return tiendaNube.updateProducts(data, {
      ...defaultOpts,
      ...opts,
    });
  },
  updateProductsBrands: async (
    data: { productId: number; brand: string }[]
  ) => {
    return tiendaNube.updateProductsBrands(data, defaultOpts);
  },
  uploadProductPics: async (
    data: UploadProductsPicsInput,
    opts: {
      onSuccess?: (item: UploadProductsPicsInput[number]) => void;
      onError?: (item: UploadProductsPicsInput[number], error: Error) => void;
    } = {}
  ) => {
    return tiendaNube.uploadProductPics(data, {
      ...defaultOpts,
      ...opts,
    });
  },
  deleteProductPics: async (
    imgs: DeleteProductPicsInput,
    opts: {
      onSuccess?: (item: DeleteProductPicsInput[number]) => void;
      onError?: (item: DeleteProductPicsInput[number], error: Error) => void;
    } = {}
  ) => {
    return tiendaNube.deleteProductPics(imgs, {
      ...defaultOpts,
      ...opts,
    });
  },
  getNewOrders: async (
    opts: {
      sinceId?: number;
    } = {}
  ) => {
    return tiendaNube.getNewOrders({
      ...defaultOpts,
      ...opts,
    });
  },
  deleteProduct: async (id: number) => {
    return tiendaNube.deleteProduct(id, defaultOpts);
  },
  updateProductsCustomFields: async (
    input: UpdateProductsCustomFieldsInput
  ) => {
    return tiendaNube.updateProductsCustomFields(input, defaultOpts);
  },
  getAllCategories: async () => {
    return getAllCategories(defaultOpts);
  },
  createProduct: async (input: CreateProductInput) => {
    return createProduct(input, defaultOpts);
  },
  createCategory: async (
    input: CreateCategoryInput,
    opts: { token?: string } = {}
  ) => {
    return tiendaNube.createCategory(input, {
      ...defaultOpts,
      ...opts,
    });
  },
};
