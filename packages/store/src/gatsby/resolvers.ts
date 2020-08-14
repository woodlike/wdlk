import shortid from 'shortid';
import { priceFormatter } from '../utils';

import { ProductImage, ProductImageSize, Variant } from '.';

const LOCALE = 'en-GB';

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

export function createProductVariantPriceFields() {
  return {
    ShopifyProductVariant: {
      compareAtLocalePrice: {
        type: 'ShopifyProductVariantPriceV2',
        resolve(source: Variant) {
          const { compareAtPriceV2 } = source;
          if (!!!compareAtPriceV2) {
            return null;
          }
          const { amount, currencyCode } = compareAtPriceV2;
          return {
            amount: priceFormatter(amount, LOCALE, currencyCode),
            currencyCode: currencyCode,
          };
        },
      },
      priceLocale: {
        type: 'ShopifyProductVariantPriceV2!',
        resolve(source: Variant) {
          const {
            priceV2: { amount, currencyCode },
          } = source;

          return {
            amount: priceFormatter(amount, LOCALE, currencyCode),
            currencyCode: currencyCode,
          };
        },
      },
    },
  };
}

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
): void {
  createResolvers({
    ...createShopifyProductImagesField(),
    ...createProductVariantPriceFields(),
  });
}
