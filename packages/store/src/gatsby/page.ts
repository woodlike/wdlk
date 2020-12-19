import { resolve } from 'path';
import { Actions } from 'gatsby';

import { ShopifyProductNode, ProductNode } from '.';
import { Collection } from '../model';

export interface ProductQueryData {
  readonly allShopifyProduct: {
    readonly edges: ProductNode[];
  };
}

export interface CollectionQuery {
  readonly allShopifyCollection: {
    readonly nodes: Collection[];
  };
}

export function createProduct(edges: ProductNode[], actions: Actions) {
  const layerId = 'Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzEyNTg5NzAyOA==';
  const { createPage } = actions;
  edges.forEach((edge: { readonly node: ShopifyProductNode }) => {
    createPage({
      path: edge.node.slug,
      component: resolve('./src/app/product/Layout.tsx'),
      context: {
        id: edge.node.id,
        layerId,
      },
    });
  });
}

export function createCollection(nodes: Collection[], actions: Actions) {
  const { createPage } = actions;
  nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: resolve('./src/app/collection/Layout.tsx'),
      context: {
        id: node.id,
      },
    });
  });
}
