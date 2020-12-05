import { Reporter } from 'gatsby';
import { currency } from '..';
import {
  GatsbyCtx,
  ProductFeatures,
  ProductImage,
  ProductImageSize,
  ShopifyProductNode,
  Variant,
} from '../../gatsby';

export function getNodeModelByRemoteId(
  type: string,
  id: string,
  ctx: GatsbyCtx<ProductFeatures>,
) {
  return (
    ctx.nodeModel.getAllNodes({ type }).find(node => node.remoteId === id) ??
    null
  );
}

export function productFeaturesResolver(
  source: ShopifyProductNode,
  _: object,
  ctx: GatsbyCtx<ProductFeatures>,
) {
  const product = ctx.nodeModel
    .getAllNodes({ type: 'GraphCMS_Product' })
    .find(product => {
      const regex = new RegExp(`(^\s*${product.title})`, 'gi');

      return regex.test(source.title);
    });

  if (!product) {
    return null;
  }

  const fabricFeature = getNodeModelByRemoteId(
    'GraphCMS_FabricFeature',
    product.fabricFeature.remoteId,
    ctx,
  );

  const productMarineProtection = getNodeModelByRemoteId(
    'GraphCMS_ProductMarineProtection',
    product.productMarineProtection.remoteId,
    ctx,
  );

  return {
    ...product,
    fabricFeature,
    productMarineProtection,
  };
}

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
        resolve(
          source: ShopifyProductNode,
          args: Record<string, unknown>,
          ctx: GatsbyCtx<ProductFeatures>,
        ) {
          return productFeaturesResolver(source, args, ctx);
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
              amount: currency(amount),
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
              amount: currency(amount),
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
