import { Reporter } from 'gatsby';
import { ProductImage, ProductImageSize, Variant } from '.';
import { priceFormatter } from '../utils';

const LOCALE = 'en-GB';

export function createShopifyProductImagesField() {
  return {
    ShopifyProductImages: {
      srcSet: {
        type: '[String!]!',
        resolve(source: ProductImage) {
          return Object.values(ProductImageSize).map(size =>
            source.originalSrc.replace(/(.jpg)+/gi, `_${size}.jpg`),
          );
        },
      },
    },
  };
}

export function createProductVariantPriceFields(reporter: Reporter) {
  return {
    ShopifyProductVariant: {
      compareAtLocalePrice: {
        type: 'ShopifyProductVariantPriceV2',
        resolve(source: Variant) {
          try {
            const { compareAtPriceV2 } = source;
            if (!!!compareAtPriceV2) {
              return null;
            }
            const { amount, currencyCode } = compareAtPriceV2;
            return {
              amount: priceFormatter(amount, LOCALE, currencyCode),
              currencyCode: currencyCode,
            };
          } catch (error) {
            reporter.panic(
              '🚨 Create Resolvers: Shopify product variant',
              error,
            );
          }
        },
      },
      priceLocale: {
        type: 'ShopifyProductVariantPriceV2!',
        resolve(source: Variant) {
          try {
            const {
              priceV2: { amount, currencyCode },
            } = source;

            return {
              amount: priceFormatter(amount, LOCALE, currencyCode),
              currencyCode: currencyCode,
            };
          } catch (error) {
            reporter.panic(
              '🚨 Create Resolvers: Shopify product variant',
              error,
            );
          }
        },
      },
    },
  };
}

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
  reporter: Reporter,
): void {
  createResolvers({
    ...createShopifyProductImagesField(),
    ...createProductVariantPriceFields(reporter),
  });
}
