import { Actions, Node } from 'gatsby';

export interface ShopifyProductNode {
  readonly handle: string;
}

export interface CreateSlugProps {
  readonly actions: Actions;
  readonly node: Node;
}

export function createSlugs({ node, actions }: CreateSlugProps): void {
  const { createNodeField } = actions;
  if (node.internal.type === 'ShopifyProduct') {
    createNodeField({
      node,
      name: 'slug',
      value: `/products/${node.handle}`.replace(/\/\/+/g, '/'),
    });
  }
}
