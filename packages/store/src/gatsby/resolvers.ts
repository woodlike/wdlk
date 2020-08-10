import shortid from 'shortid';

import { ProductImage, ProductImageSize } from '.';

export function createShopifyProductImagesField() {
  return {
    ShopifyProductImages: {
      srcSet: {
        type: '[SrcSet]!',
        resolve(source: ProductImage) {
          return Object.values(ProductImageSize).map(size => ({
            id: shortid.generate(),
            src: source.originalSrc.replace(/(.jpg)+/gi, `_${size}.jpg`),
          }));
        },
      },
    },
  };
}

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
): void {
  createResolvers({ ...createShopifyProductImagesField() });
}
