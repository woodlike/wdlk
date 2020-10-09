import { Actions } from 'gatsby';

const schema = `
  type ShopifyProduct implements Node  {
    id: String!
    description: String!
    images: [ShopifyProductImages!]!
    title: String!
    slug: String!
    variants: [ShopifyProductVariant!]!
    features: ProductFeatures
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

  type ProductFeatures @dontInfer {
    productTitle: String!
    modelTitle: String!
    modelDescription: String!
    fitAndCoverageTitle: String!
    fitAndCoverageDescription: String!
    fabricFeature: FabricFeature!
  }

  type FabricFeature @dontInfer {
    title: String!
    fabricFeaturesDescription: String!
    compositionTitle: String!
    compositionDescription: String!
    productMarineProtection: ProductMarineProtection!
  }

  type ProductMarineProtection @dontInfer {
    title: String!
    description: String!
  }
`;

export function createCustomSchema(actions: Actions): void {
  actions.createTypes(schema);
}
