export type Product = {
  id: number;
  published: boolean;
  name: {
    es: string;
  };
  description: {
    es: string;
  };
  handle: {
    es: string;
  };
  interDataCode: number | null | undefined;
  created_at: string;
  requires_shipping: boolean;
  variants: [
    {
      id: number;
      image_id: number | null;
      product_id: number;
      position: number;
      price: string | null;
      compare_at_price: string | null;
      promotional_price: string | null;
      stock_management: boolean;
      stock: number;
      weight: string | null;
      width: string | null;
      height: string | null;
      depth: string | null;
      sku: string | null;
      values: [];
      barcode: string | null;
      updated_at: string;
      inventory_levels: [
        {
          id: number;
          variant_id: number;
          location_id: string;
          stock: number;
        }
      ];
    }
  ];
  categories: {
    id: number;
  }[];
  images?: {
    id: number;
    src: string;
    position: number;
  }[];
};

export type GetProductsResponse = Product[];

export type PatchStockPriceInput = {
  id: number;
  variants: {
    id: number;
    price?: number | undefined;
    inventory_levels?: {
      stock: number;
    }[];
  }[];
}[];

export type UpdateProductsInput = {
  productId: number;
  variantId: number;
  published?: boolean;
  brand?: string;
  weight?: string;
  height?: string;
  width?: string;
  depth?: string;
  categories?: number[];
  sku?: string;
}[];

export type UploadProductsPicsInput = {
  oldWebId: number;
  imageName: string;
  productId: number;
  src: string;
  position: number;
}[];

export type UpdateProductsCustomFieldsInput = {
  productId: number;
  proveedorFieldId: string;
  proveedorValue: string;
  marcaFieldId: string;
  marcaValue: string;
}[];

export type DeleteProductPicsInput = { productId: number; imageId: number }[];

export type Order = {
  id: number;
  created_at: string;
  contact_email: string;
  contact_name: string;
  contact_phone: string;
  contact_identification: string | null;
  billing_name: string;
  billing_phone: string;
  billing_address: string;
  billing_number: string;
  billing_floor: string | null;
  billing_locality: string | null;
  billing_zipcode: string;
  billing_city: string;
  billing_province: string;
  billing_country: string;
  customer: {
    id: number;
    email: string;
    name: string;
    phone: string;
    identification: string;
    billing_name: string;
    billing_phone: string;
    billing_address: string;
    billing_number: string;
    billing_floor: string | null;
    billing_locality: string | null;
    billing_zipcode: string;
    billing_city: string;
    billing_province: string;
    billing_country: string;
  };
  shipping_option: string | null;
  gateway_name: string | null;
  shipping_address: Address;
  shipping_cost_customer: string | null;
  number: number;
  products: {
    price: string;
    product_id: number;
    quantity: number;
    sku: string | null;
  }[];
  discount: string | null;
  coupon: {
    code: string;
  }[];
};

export type Address = {
  address: null | string;
  city: string;
  country: string;
  created_at: string;
  default: boolean;
  floor: null | string;
  id: number;
  locality: string;
  name: string;
  number: null | string;
  phone: string;
  province: string;
  updated_at: string;
  zipcode: string;
  customs?: null;
};

export type Category = {
  id: number;
  parent: number;
  subcategories: any[];
  google_shopping_category: string;
  created_at: Date;
  updated_at: Date;
  name: {
    es: string;
  };
  handle: {
    es: string;
  };
  description: {
    es: string;
  };
  seo_title: {
    es: string;
  };
  seo_description: {
    es: string;
  };
};

export type CreateProductInput = {
  name: string;
  price: string | null;
  promotional_price: string | null;
  sku: string;
  weight: string | null;
  width: string | null;
  height: string | null;
  depth: string | null;
  requires_shipping: boolean;
  categories: number[];
  images: { position: number; src: string }[];
  brand: string | null;
  brandFieldId: string | null;
  proveedor: string | null;
  proveedorFieldId: string | null;
  description: string | null;
  barcode: string | null;
  stock: number;
};

export type CreateCategoryInput = {
  name: string;
  parent: number | null;
  description: string;
  handle: string;
};
