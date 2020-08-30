export interface ShopifyProductNode {
  readonly descriptions: string;
  readonly handle: string;
  readonly id: string;
  readonly images: ProductImage[];
  readonly fields: ProductFields;
  readonly title: string;
  readonly variants: Variant[];
}

export interface Variant {
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