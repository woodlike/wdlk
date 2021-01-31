import { ProductNode, ShopifyProductNode } from '.';

import { Actions } from 'gatsby';
import { Collection, } from '../model';
import { PageProps } from '../model/page'
import { resolve } from 'path';

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

export interface PageQuery {
  readonly allShopifyPage: {
    readonly nodes: PageProps[];
  };
}

const basePath = './src/app';

export function createProduct(edges: ProductNode[], actions: Actions) {
  const layerId = 'Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzEyNTg5NzAyOA==';
  const { createPage } = actions;
  edges.forEach((edge: { readonly node: ShopifyProductNode }) => {
    createPage({
      path: edge.node.slug,
      component: resolve(`${basePath}/product/Layout.tsx`),
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
      component: resolve(`${basePath}/collection/Layout.tsx`),
      context: {
        id: node.id,
      },
    });
  });
}

export function createLegal(nodes: PageProps[], actions: Actions) {
  const { createPage } = actions;
  nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: resolve(`${basePath}/legal/Layout.tsx`),
      context: {
        id: node.id,
      },
    });
  });
}