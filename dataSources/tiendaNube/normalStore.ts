import {
  createProduct,
  getAllCategories,
  tiendaNube as tiendaNubeClient,
} from "./index.js";
import {
  CreateProductInput,
  DeleteProductPicsInput,
  PatchStockPriceInput,
  UpdateProductsCustomFieldsInput,
  UpdateProductsInput,
  UploadProductsPicsInput,
} from "./types.js";

const BASE_URL = process.env.TIENDANUBE_URL; // URL base de la API de TiendaNube
const TOKEN = process.env.TIENDANUBE_TOKEN; // Token de acceso a la API de TiendaNube
const TOKEN2 = process.env.TIENDANUBE_TOKEN2; // Token 2 de acceso a la API de TiendaNube
const TOKEN3 = process.env.TIENDANUBE_TOKEN3; // Token 3 de acceso a la API de TiendaNube
const TOKEN4 = process.env.TIENDANUBE_TOKEN4; // Token 4 de acceso a la API de TiendaNube
const TOKEN5 = process.env.TIENDANUBE_TOKEN5; // Token 5 de acceso a la API de TiendaNube

if (!TOKEN || !BASE_URL || !TOKEN2 || !TOKEN3 || !TOKEN4 || !TOKEN5) {
  throw new Error("No se encontró el token de TiendaNube");
}

const TOKENS = [TOKEN, TOKEN2, TOKEN3, TOKEN4, TOKEN5];

const userAgent = "prueba (gustavo@digitalmix.ar)";

const defaultOpts = {
  tokens: TOKENS,
  baseUrl: BASE_URL,
  userAgent,
};

export const tnNormalStore = {
  getAllProducts: async (
    opts: {
      withImages?: boolean;
      published?: boolean;
      created_at_min?: string;
      requiresShipping?: boolean;
    } = {}
  ) => {
    return tiendaNubeClient.getAllProducts({
      ...defaultOpts,
      ...opts,
    });
  },
  patchStockPrice: async (products: PatchStockPriceInput) => {
    return tiendaNubeClient.patchStockPrice(products, defaultOpts);
  },
  updateProducts: async (
    data: UpdateProductsInput,
    opts: {
      onError?: (updatedProducts: UpdateProductsInput) => Promise<void>;
    } = {}
  ) => {
    return tiendaNubeClient.updateProducts(data, {
      ...defaultOpts,
      ...opts,
    });
  },
  updateProductsBrands: async (
    data: { productId: number; brand: string }[]
  ) => {
    return tiendaNubeClient.updateProductsBrands(data, defaultOpts);
  },
  uploadProductPics: async (
    data: UploadProductsPicsInput,
    opts: {
      onSuccess?: (item: UploadProductsPicsInput[number]) => void;
      onError?: (item: UploadProductsPicsInput[number], error: Error) => void;
    } = {}
  ) => {
    return tiendaNubeClient.uploadProductPics(data, {
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
    return tiendaNubeClient.deleteProductPics(imgs, {
      ...defaultOpts,
      ...opts,
    });
  },
  getNewOrders: async (
    opts: {
      sinceId?: number;
    } = {}
  ) => {
    return tiendaNubeClient.getNewOrders({
      ...defaultOpts,
      ...opts,
    });
  },
  deleteProduct: async (id: number) => {
    return tiendaNubeClient.deleteProduct(id, defaultOpts);
  },
  updateProductsCustomFields: async (
    input: UpdateProductsCustomFieldsInput
  ) => {
    return tiendaNubeClient.updateProductsCustomFields(input, defaultOpts);
  },
  getAllCategories: async () => {
    return getAllCategories(defaultOpts);
  },
  createProduct: async (input: CreateProductInput) => {
    return createProduct(input, defaultOpts);
  },
};
