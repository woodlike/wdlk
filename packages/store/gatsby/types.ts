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
  readonly localFile: {
    readonly name: string;
  };
}
