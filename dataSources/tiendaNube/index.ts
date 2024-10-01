import {
  Category,
  CreateCategoryInput,
  CreateProductInput,
  DeleteProductPicsInput,
  GetProductsResponse,
  Order,
  PatchStockPriceInput,
  Product,
  UpdateProductsCustomFieldsInput,
  UpdateProductsInput,
  UploadProductsPicsInput,
} from "./types.js";
import { writeStdOut } from "../../utils/writeStdOut.js";
import { writeFile } from "fs/promises";

export type ClientOpts = {
  tokens: string[];
  baseUrl: string;
  userAgent: string;
};

const getAllProducts = async (
  opts: {
    withImages?: boolean;
    published?: boolean;
    created_at_min?: string;
    requiresShipping?: boolean;
  } & ClientOpts
) => {
  const output: { page: number; data: GetProductsResponse }[] = [];
  const products: GetProductsResponse = [];
  let page = 1;
  let token = opts.tokens[0];

  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const { data, totalPages } = await getOneProductsPage(page, {
    token,
    baseUrl: opts.baseUrl,
    userAgent: opts.userAgent,
    withImages: opts.withImages,
    published: opts.published,
    created_at_min: opts.created_at_min,
  });

  data.forEach((product) => {
    products.push(product);
  });

  page++;
  while (page <= totalPages + opts.tokens.length) {
    await Promise.all(
      opts.tokens.map(async (token, i) => {
        if (page + i <= totalPages) {
          const { data } = await getOneProductsPage(page + i, {
            token,
            baseUrl: opts.baseUrl,
            userAgent: opts.userAgent,
            withImages: opts.withImages,
            published: opts.published,
            created_at_min: opts.created_at_min,
          });
          output.push({ page: page + i, data });
          data.forEach((product) => {
            products.push(product);
          });
        }
      })
    ).then(() => (page += opts.tokens.length));
  }

  console.log(`Fetched ${products.length} products...`);

  await writeFile("getAllProducts.json", JSON.stringify(output, null, 2));

  return products;
};

const getOneProductsPage = async (
  page: number,
  opts: {
    withImages?: boolean;
    published?: boolean;
    created_at_min?: string;
    token: string;
    baseUrl: string;
    userAgent: string;
  }
) => {
  const urlParams = new URLSearchParams({
    per_page: "200",
    fields:
      "id,variants,published,name,categories,created_at,requires_shipping,description,handle" +
      (opts.withImages ? ",images" : ""),
    sort_by: "created-at-ascending",
  });
  if (opts.published !== undefined) {
    urlParams.set("published", opts.published ? "true" : "false");
  }
  if (opts.created_at_min) {
    urlParams.set("created_at_min", opts.created_at_min);
  }
  urlParams.set("page", page.toString());
  const response = await fetch(
    `${opts.baseUrl}/products?${urlParams.toString()}`,
    {
      headers: {
        "User-Agent": opts.userAgent,
        Authentication: `bearer ${opts.token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Error al obtener los productos de TiendaNube: ${response.statusText}`
    );
  }

  await waitRequestLimit(response);

  const totalCount = response.headers.get("X-Total-Count");

  if (!totalCount) throw new Error("No se encontró el header X-Total-Count");

  let totalPages = Math.ceil(parseInt(totalCount) / 200);

  const data = (await response.json().catch((err) => {
    console.error(response.text());
    throw new Error(`Error al parsear la respuesta de TiendaNube: ${err}`);
  })) as GetProductsResponse;

  console.log(`Fetched page ${page} of ${totalPages}...`);
  if (page === totalPages) {
    console.log(`Fetched all pages...`);
  }

  return { data, totalPages };
};

const patchStockPrice = async (
  products: PatchStockPriceInput,
  opts: ClientOpts
) => {
  const currentBatch = products.slice(0, 50);
  const rest = products.slice(50);
  const patchedProducts: PatchStockPriceInput = [];
  const token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const response = await fetch(`${opts.baseUrl}/products/stock-price`, {
    method: "PATCH",
    headers: {
      "user-agent": opts.userAgent,
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
    body: JSON.stringify(currentBatch),
  });

  if (!response.ok) {
    throw new Error(
      `Error al actualizar el stock y precio de los productos: ${response.statusText}`
    );
  }

  patchedProducts.push(...currentBatch);

  if (rest.length) {
    writeStdOut(
      `Patched ${currentBatch.length} products. ${rest.length} remaining...`
    );
    await waitRequestLimit(response);
    const restPatchedProducts = await patchStockPrice(rest, {
      baseUrl: opts.baseUrl,
      tokens: opts.tokens,
      userAgent: opts.userAgent,
    });
    patchedProducts.push(...restPatchedProducts);
  } else {
    writeStdOut(`Patched ${currentBatch.length} products.`, true);
  }

  return patchedProducts;
};

const updateProducts = async (
  data: UpdateProductsInput,
  opts: {
    onError?: (
      updatedProducts: UpdateProductsInput,
      failedProduct: UpdateProductsInput[number]
    ) => Promise<void>;
    onSuccess?: (updatedProduct: UpdateProductsInput[number]) => void;
    onFinished?: (updatedProducts: UpdateProductsInput) => void;
  } & ClientOpts
) => {
  let updatedProducts: UpdateProductsInput = [];

  let i = 0;
  for (const product of data) {
    let token = opts.tokens[i % opts.tokens.length];
    if (!token) throw new Error("No se encontró el token de TiendaNube");

    if (product.categories)
      await fetch(`${opts.baseUrl}/products/${product.productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authentication: `bearer ${token}`,
          "user-agent": opts.userAgent,
        },
        body: JSON.stringify({
          categories: product.categories,
        }),
      }).then((response) => waitRequestLimit(response));

    if (
      !product.weight ||
      !product.height ||
      !product.width ||
      !product.depth ||
      !product.sku
    ) {
      writeStdOut(
        `Updated product ${i + 1} of ${data.length}...`,
        i === data.length - 1
      );
      updatedProducts.push(product);
      i++;
      continue;
    }

    const response = await fetch(
      `${opts.baseUrl}/products/${product.productId}/variants/${product.variantId}`,
      {
        method: "PUT",
        headers: {
          "user-agent": opts.userAgent,
          "Content-Type": "application/json",
          Authentication: `bearer ${token}`,
        },
        body: JSON.stringify({
          weight: product.weight,
          height: product.height,
          width: product.width,
          depth: product.depth,
          sku: product.sku,
        }),
      }
    );

    await waitRequestLimit(response);

    if (!response.ok) {
      if (opts.onError) await opts.onError(updatedProducts, product);
      console.error(
        `Error al actualizar el producto ${product.productId} de TiendaNube: ${response.statusText}`
      );
    }

    writeStdOut(
      `Updated product ${i + 1} of ${data.length}...`,
      i === data.length - 1
    );

    updatedProducts.push(product);
    opts.onSuccess?.(product);

    i++;
  }
  opts.onFinished?.(updatedProducts);
};

const updateProductsBrands = async (
  data: { productId: number; brand: string }[],
  opts: ClientOpts
) => {
  let i = 0;
  let token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  for (const item of data) {
    const response = await fetch(`${opts.baseUrl}/products/${item.productId}`, {
      method: "PUT",
      headers: {
        "user-agent": opts.userAgent,
        "Content-Type": "application/json",
        Authentication: `bearer ${token}`,
      },
      body: JSON.stringify({
        brand: item.brand,
      }),
    });

    await waitRequestLimit(response);

    if (!response.ok) {
      throw new Error(
        `Error al actualizar el campo personalizado de la marca del producto ${item.productId} de TiendaNube: ${response.statusText}`
      );
    }

    writeStdOut(
      `Updated brand ${i + 1} of ${data.length}...`,
      i === data.length - 1
    );
    i++;
  }
};

const uploadProductPics = async (
  data: UploadProductsPicsInput,
  opts: {
    onSuccess?: (item: UploadProductsPicsInput[number]) => void;
    onError?: (item: UploadProductsPicsInput[number], error: Error) => void;
  } & ClientOpts
) => {
  let i = 0;
  let queue: Promise<void>[] = [];
  for (const productPic of data) {
    const tokenToUse = opts.tokens[i % opts.tokens.length];
    if (!tokenToUse) throw new Error("No se encontró el token de TiendaNube");
    queue.push(
      fetch(`${opts.baseUrl}/products/${productPic.productId}/images`, {
        method: "POST",
        headers: {
          "user-agent": opts.userAgent,
          "Content-Type": "application/json",
          Authentication: `bearer ${tokenToUse}`,
        },
        body: JSON.stringify({
          src: productPic.src,
        }),
      }).then(async (response) => {
        await waitRequestLimit(response);
        if (!response.ok) {
          opts.onError?.(
            productPic,
            new Error(
              `Error al subir la imagen ${productPic.src} al producto ${
                productPic.productId
              } de TiendaNube: ${await response.text()}`
            )
          );
        } else {
          opts.onSuccess?.(productPic);
        }
      })
    );

    if (queue.length >= 5) {
      await Promise.all(queue);
      queue = [];
    }

    writeStdOut(
      `Uploaded image ${i + 1} of ${data.length}...`,
      i === data.length - 1
    );
    i++;
  }

  await Promise.all(queue);
  writeStdOut(`Uploaded ${data.length} images...`, true);
};

const deleteProductPics = async (
  imgs: DeleteProductPicsInput,
  opts: {
    onSuccess?: (item: DeleteProductPicsInput[number]) => void;
    onError?: (item: DeleteProductPicsInput[number], error: Error) => void;
  } & ClientOpts
) => {
  let token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  let i = 0;
  for (const img of imgs) {
    const response = await fetch(
      `${opts.baseUrl}/products/${img.productId}/images/${img.imageId}`,
      {
        method: "DELETE",
        headers: {
          "user-agent": opts.userAgent,
          Authentication: `bearer ${token}`,
        },
      }
    );

    await waitRequestLimit(response);

    if (!response.ok) {
      opts.onError?.(
        img,
        new Error(
          `Error al borrar la imagen ${img.imageId} del producto ${
            img.productId
          } de TiendaNube: ${await response.text()}`
        )
      );
    } else {
      opts.onSuccess?.(img);
    }

    writeStdOut(
      `Deleted image ${i + 1} of ${imgs.length}...`,
      i === imgs.length - 1
    );
    i++;
  }
};

const dayInMs = 24 * 60 * 60 * 1000;

export const getNewOrders = async (
  opts: {
    sinceId?: number;
  } & ClientOpts
) => {
  const urlParams = new URLSearchParams({
    per_page: "200",
  });

  const token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  if (opts.sinceId) {
    urlParams.set("since_id", opts.sinceId.toString());
  } else {
    urlParams.set(
      "created_at_min",
      new Date(new Date().getTime() - dayInMs * 4).toISOString()
    );
  }

  const response = await fetch(
    `${opts.baseUrl}/orders?${urlParams.toString()}`,
    {
      headers: {
        "user-agent": opts.userAgent,
        Authentication: `bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error(
      `Error al obtener las órdenes de TiendaNube: ${response.statusText}`
    );
    return [];
  }

  const data = (await response.json().catch((err) => {
    console.error(response.text());
    throw new Error(`Error al parsear la respuesta de TiendaNube: ${err}`);
  })) as Order[];

  return data;
};

const deleteProduct = async (id: number, opts: ClientOpts) => {
  let token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const response = await fetch(`${opts.baseUrl}/products/${id}`, {
    method: "DELETE",
    headers: {
      "user-agent": opts.userAgent,
      Authentication: `bearer ${token}`,
    },
  });

  await waitRequestLimit(response);

  if (!response.ok) {
    console.error(
      `Error al borrar el producto ${id} de TiendaNube: ${response.statusText}`
    );
  }
  console.log(`Deleted product ${id}...`);
};

export const updateProductsCustomFields = async (
  input: UpdateProductsCustomFieldsInput,
  opts: ClientOpts
) => {
  console.log(`Updating ${input.length} custom fields...`);

  let token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");
  let i = 0;
  for (const item of input) {
    const response = await fetch(
      `${opts.baseUrl}/products/${item.productId}/custom-fields/values`,
      {
        method: "PUT",
        headers: {
          "user-agent": opts.userAgent,
          "Content-Type": "application/json",
          Authentication: `bearer ${token}`,
        },
        body: JSON.stringify([
          {
            id: item.proveedorFieldId,
            value: item.proveedorValue,
          },
          {
            id: item.marcaFieldId,
            value: item.marcaValue,
          },
        ]),
      }
    );

    await waitRequestLimit(response);

    if (!response.ok) {
      console.error(
        `Error al actualizar el campo personalizado ${item.proveedorFieldId} o ${item.marcaFieldId} del producto ${item.productId} de TiendaNube: ${response.statusText}. Marca: ${item.marcaValue}, Proveedor: ${item.proveedorValue}`
      );
    }

    writeStdOut(
      `Updated custom field ${i + 1} of ${input.length}...`,
      i === input.length - 1
    );
    i++;
  }
};

export const getAllCategories = async (opts: ClientOpts) => {
  const urlParams = new URLSearchParams({
    per_page: "200",
  });

  const token = opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const response = await fetch(
    `${opts.baseUrl}/categories?${urlParams.toString()}`,
    {
      headers: {
        "user-agent": opts.userAgent,
        Authentication: `bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error(
      `Error al obtener las categorías de TiendaNube: ${response.statusText}`
    );
    return [];
  }

  const data = (await response.json().catch((err) => {
    console.error(response.text());
    throw new Error(`Error al parsear la respuesta de TiendaNube: ${err}`);
  })) as Category[];

  return data;
};

export const createProduct = async (
  input: CreateProductInput,
  opts: ClientOpts & { token?: string }
) => {
  let token = opts.token || opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const response = await fetch(`${opts.baseUrl}/products`, {
    method: "POST",
    headers: {
      "user-agent": opts.userAgent,
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
    body: JSON.stringify({
      images: input.images,
      name: {
        es: input.name,
      },
      description: {
        es: input.description,
      },
      categories: input.categories,
      requires_shipping: input.requires_shipping,
      brand: input.brand,
      variants: [
        {
          price: input.price,
          promotional_price: input.promotional_price,
          stock: input.stock,
          sku: input.sku,
          barcode: input.barcode,
          weight: input.weight,
          width: input.width,
          height: input.height,
          depth: input.depth,
        },
      ],
    }),
  });

  console.log(`Created product ${input.name}...`);

  await waitRequestLimit(response);

  console.log(`Waited request limit...`);

  if (!response.ok) {
    console.error(
      `Error al crear el producto ${input.name} de TiendaNube: ${response.statusText}`
    );
  }

  const createdProductData = (await response.json().catch((err) => {
    console.error(response.text());
    throw new Error(`Error al parsear la respuesta de TiendaNube: ${err}`);
  })) as Product;

  if (input.brandFieldId && input.proveedorFieldId)
    await updateProductsCustomFields(
      [
        {
          productId: createdProductData.id,
          marcaFieldId: input.brandFieldId,
          marcaValue: input.brand || "No especificado",
          proveedorFieldId: input.proveedorFieldId,
          proveedorValue: input.proveedor || "No especificado",
        },
      ],
      {
        baseUrl: opts.baseUrl,
        tokens: opts.tokens,
        userAgent: opts.userAgent,
      }
    );

  console.log(`Updated custom fields...`);

  return createdProductData;
};

export const createCategory = async (
  input: CreateCategoryInput,
  opts: ClientOpts & { token?: string }
) => {
  let token = opts.token || opts.tokens[0];
  if (!token) throw new Error("No se encontró el token de TiendaNube");

  const response = await fetch(`${opts.baseUrl}/categories`, {
    method: "POST",
    headers: {
      "user-agent": opts.userAgent,
      "Content-Type": "application/json",
      Authentication: `bearer ${token}`,
    },
    body: JSON.stringify({
      name: {
        es: input.name,
      },
      description: {
        es: input.description,
      },
      parent: input.parent,
      handle: {
        es: input.handle,
      },
    }),
  });

  await waitRequestLimit(response);

  if (!response.ok) {
    console.error(
      `Error al crear la categoría ${input.name} de TiendaNube: ${response.statusText}`
    );
  }

  const createdCategoryData = (await response.json().catch((err) => {
    console.error(response.text());
    throw new Error(`Error al parsear la respuesta de TiendaNube: ${err}`);
  })) as Category;

  return createdCategoryData;
};

export const tiendaNube = {
  getAllProducts,
  patchStockPrice,
  updateProducts,
  uploadProductPics,
  deleteProductPics,
  getNewOrders,
  deleteProduct,
  updateProductsCustomFields,
  updateProductsBrands,
  createProduct,
  getAllCategories,
  createCategory,
};

const waitRequestLimit = async (response: Response) => {
  const remaining = parseInt(
    response.headers.get("X-Rate-Limit-Remaining") || "0"
  );
  const time = parseInt(response.headers.get("X-Rate-Limit-Reset") || "1000");
  if (remaining < 5 && response.ok) {
    writeStdOut(`Waiting for request limit reset... (ms: ${time})`);
    await new Promise((resolve) => setTimeout(resolve, time));
  }
};
