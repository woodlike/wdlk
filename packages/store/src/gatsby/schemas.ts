import { Actions } from 'gatsby';

const schema = `
  type ShopifyProduct implements Node  {
    id: String!
    description: String!
    images: [ShopifyProductImages!]!
    title: String!
    slug: String!
    variants: [ShopifyProductVariant!]!
    features: GraphCMS_Product
  }

  type ShopifyProductVariant implements Node @dontInfer {
    id: String!
    compareAtLocalePrice: ShopifyProductVariantPriceV2
    priceLocale: ShopifyProductVariantPriceV2!
    shopifyId: String!
    title: String!
  }

  type ShopifyProductVariantPriceV2 @dontInfer {
    amount: String!
    currencyCode: String!
  }

  type ShopifyProductImages @dontInfer {
    id: ID!
    altText: String
    originalSrc: String!
    srcSet: [String!]!
  }
`;

export function createCustomSchema(actions: Actions): void {
  actions.createTypes(schema);
}
