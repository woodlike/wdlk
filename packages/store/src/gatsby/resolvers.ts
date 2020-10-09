import { Reporter } from 'gatsby';
import fetch from 'node-fetch';

import {
  ProductImage,
  ProductImageSize,
  Variant,
  ShopifyProductNode,
  ProductFeatures,
} from '.';
import { priceFormatter } from '../utils';

const LOCALE = 'en-GB';

const allGraphCmsProduct = `
  {
    products {
      productTitle
      modelTitle
      modelDescription
      fitAndCoverageTitle
      fitAndCoverageDescription
      fabricFeature {
        title
        fabricFeaturesDescription
        compositionTitle
        compositionDescription
      }
      productMarineProtection {
        title
        description
      }
    }
  }
`;

export function shopifyProductResolver() {
  return {
    ShopifyProduct: {
      slug: {
        type: 'String!',
        resolve(source: ShopifyProductNode) {
          return `/products/${source.handle}`.replace(/\/\/+/g, '/');
        },
      },
      features: {
        async resolve(source: ShopifyProductNode) {
          const res = await fetch(process.env.GRAPHCMS_ENDPOINT as string, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
            },
            body: JSON.stringify({ query: allGraphCmsProduct }),
          });

          const {
            data: { products },
          } = await res.json();

          const productMatch = products.find(
            ({ productTitle }: ProductFeatures) => {
              const regex = new RegExp(`(^\s*${productTitle})`, 'gi');
              return regex.test(source.title);
            },
          );

          if (productMatch) {
            return productMatch;
          }

          return null;
        },
      },
    },
  };
}

export function shopifyProductImagesField() {
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

export function productVariantPriceFields(reporter: Reporter) {
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
    ...shopifyProductResolver(),
    ...shopifyProductImagesField(),
    ...productVariantPriceFields(reporter),
  });
}
