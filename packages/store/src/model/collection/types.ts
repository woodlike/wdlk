import { ProductImageProps } from '..';
import { ShopifyProductNode } from '../../gatsby';

export interface Collection {
  readonly handle: string;
  readonly id: string;
  readonly children: unknown;
  readonly products: ShopifyProductNode[];
  readonly title: string;
  readonly slug: string;
  readonly shopifyId: string;
  readonly updatedAt: string;
  readonly description?: string;
  readonly descriptionHtml?: string;
  readonly images: ProductImageProps[];
}
