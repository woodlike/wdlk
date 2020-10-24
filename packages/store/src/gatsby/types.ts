import { NodeInput } from 'gatsby';
import { GraphQLOutputType } from 'graphql';

export interface ShopifyNode {
  readonly id: string;
  readonly title: string;
}

export interface ShopifyProductNode extends ShopifyNode {
  readonly description: string;
  readonly handle: string;
  readonly id: string;
  readonly images: ProductImage[];
  readonly fields: ProductFields;
  readonly features: ProductFeatures;
  readonly tags: string[];
  readonly title: string;
  readonly slug: string;
  readonly shopifyId: string;
  readonly variants: Variant[];
}

export interface ProductFeatures {
  readonly remoteId: string;
  readonly name: string;
  readonly title: string;
  readonly modelTitle: string;
  readonly features: string[];
  readonly fitAndCoverageTitle: string;
  readonly fitAndCoverageFeatureList: string[];
  readonly fabricFeature: FabricFeature;
  readonly productMarineProtection: ProductMarineProtection;
}

export interface FabricFeature {
  readonly remoteId: string;
  readonly title: string;
  readonly materialTitle: string;
  readonly description: string;
  readonly features: string[];
  readonly compositionTitle: string;
  readonly compositionFeatureList: string[];
}

export interface ProductMarineProtection {
  readonly remoteId: string;
  readonly title: string;
  readonly features: string[];
}

export interface ShopifyPageNode extends ShopifyNode {
  readonly body: string;
  readonly bodySummary: string;
}

export interface Variant {
  readonly available?: boolean;
  readonly compareAtPriceV2: Price | null;
  readonly compareAtLocalePrice: Price | null;
  readonly priceLocale: Price;
  readonly priceV2: Price;
  readonly shopifyId: string;
  readonly sku: string;
  readonly title: string;
  readonly weight: number;
  readonly weightUnit: string;
}

export interface Price {
  readonly amount: string;
  readonly currencyCode: string;
}

export interface ProductFields {
  readonly slug: string;
}

export interface ProductImage {
  readonly altText: string;
  readonly id: string;
  readonly originalSrc: string;
  readonly srcSet: SourceSetProps[];
  readonly localFile: {
    readonly name: string;
  };
}

export interface SourceSetProps {
  readonly src: string;
  readonly id?: string;
}

export interface GatsbyCtx<T> {
  readonly nodeModel: {
    getNodeById(args: {
      readonly id: string;
      readonly type?: string | GraphQLOutputType;
    }): (NodeInput & T[]) | null;
    getNodesByIds(args: {
      readonly ids: string[];
      readonly type?: string | GraphQLOutputType;
    }): (NodeInput & T[]) | null;
    getAllNodes(args: {
      readonly type: string | GraphQLOutputType;
    }): NodeInput & T[];
    getTypes(): NodeInput & T[];
  };
}

/**
 * The ProductImageSize are required for Shopify's url filter services that returns
 * optimized image sizes.
 */
export enum ProductImageSize {
  small = '500x500',
  medium = '800x800',
  large = '1024x1024',
}

export enum ProductImageWidth {
  small = 500,
  medium = 800,
  large = 1024,
}
