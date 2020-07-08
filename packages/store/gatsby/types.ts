export interface ShopifyProductNode {
  readonly descriptions: string;
  readonly handle: string;
  readonly id: string;
  readonly images: ProductImage;
  readonly fields: ProductFields;
  readonly title: string;
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
