import { Actions } from 'gatsby';

const schema = `
  type ShopifyProduct implements Node   {
    id: ID!
    description: String!
    fields: Fields
    images: [ShopifyProductImages!]!
    title: String!
    variants: [ShopifyProductVariant!]!
  }

  type ShopifyProductVariant implements Node {
    id: ID!
    compareAtLocalePrice: ShopifyProductVariantPriceV2
    priceLocale: ShopifyProductVariantPriceV2!
    shopifyId: String!
    title: String!
  }

  type ShopifyProductVariantPriceV2 {
    amount: String!
    currencyCode: String!
  }

  type ShopifyProductImages {
    id: ID!
    altText: String
    originalSrc: String!
    srcSet: [String!]!
  }

  type Fields {
    slug: String!
  }
`;

export function createCustomSchema(actions: Actions): void {
  actions.createTypes(schema);
}
