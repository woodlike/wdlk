import { ShopifyProductNode } from '../../gatsby';

export interface ShopifyCollection {
  readonly handle: string;
  readonly products: ShopifyProductNode[];
  readonly slug?: string;
}
