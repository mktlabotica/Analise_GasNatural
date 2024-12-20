import { tnNormalStore } from "../dataSources/tiendaNube/normalStore.js";
import { Product } from "../dataSources/tiendaNube/types.js";
import { tnWholesaleStore } from "../dataSources/tiendaNube/wholesaleStore.js";

export async function syncImages() {
  const normalProducts = await tnNormalStore.getAllProducts({
    withImages: true,
  });
  const wholesaleProducts = await tnWholesaleStore.getAllProducts({
    withImages: true,
  });

  const productsPairs = new Map<string, [Product, Product | null]>();

  for (const normalProduct of normalProducts) {
    const sku = normalProduct.variants[0].sku;
    if (sku) {
      productsPairs.set(sku, [normalProduct, null]);
    }
  }

  for (const wholesaleProduct of wholesaleProducts) {
    const sku = wholesaleProduct.variants[0].sku;
    if (sku) {
      const pair = productsPairs.get(sku);
      if (pair) {
        pair[1] = wholesaleProduct;
      }
    }
  }

  for (const [normalProduct, wholesaleProduct] of productsPairs.values()) {
    if (!wholesaleProduct) {
      console.log(
        `Product ${normalProduct.id} (${normalProduct.name}) has no wholesale version`
      );
      continue;
    }

    const normalImages = normalProduct.images;
    const wholesaleImages = wholesaleProduct.images;

    if (!normalImages || !wholesaleImages) {
      console.log(
        `Product ${normalProduct.id} (${normalProduct.name}) has no images`
      );
      continue;
    }

    if (normalImages.length === wholesaleImages.length) {
      console.log(
        `Product ${normalProduct.id} (${normalProduct.name}) has same number of images`
      );
      continue;
    }

    // delete images in wholesale for this product
    await tnWholesaleStore.deleteProductPics(
      wholesaleImages.map((image) => ({
        imageId: image.id,
        productId: wholesaleProduct.id,
      }))
    );

    const imagesToSync = normalImages.map((image) => {
      return {
        src: image.src,
        position: image.position,
      };
    });

    if (imagesToSync.length === 0) {
      console.log(
        `Product ${normalProduct.id} (${normalProduct.name}) has the same images`
      );
      continue;
    }

    console.log(
      `Product ${normalProduct.id} (${normalProduct.name}) has different images`
    );

    await tnWholesaleStore.uploadProductPics(
      imagesToSync.map((image) => ({
        imageName: "image",
        productId: wholesaleProduct.id,
        oldWebId: normalProduct.id,
        src: image.src,
        position: image.position,
      }))
    );

    console.log(
      `Product ${normalProduct.id} (${normalProduct.name}) images synced`
    );
  }
}
