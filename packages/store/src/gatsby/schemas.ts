import { Actions } from 'gatsby';

const schema = `
  type ShopifyCollection implements Node  {
    description: String!
    descriptionHtml: String!
    handle: String!
    id: String!
    image: Image
    shopifyId: String!
    slug: String!
    title: String!
    updatedAt: String
  }
  
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

  type Image @dontInfer {
    id: String!
    src: String!
  }
`;

export function createCustomSchema(actions: Actions): void {
  actions.createTypes(schema);
}
