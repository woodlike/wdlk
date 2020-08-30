import { resolve } from 'path';
import { Actions, Reporter } from 'gatsby';
import { ShopifyProductNode } from '.';

export interface CreatePagesArgs {
  readonly actions: Actions;
  readonly reporter: Reporter;
  graphql: (query: string) => Promise<ProductQuery>;
}

interface ProductQuery {
  readonly data: ProductQueryData;
  readonly errors: boolean;
}

export interface ProductQueryData {
  readonly allShopifyProduct: {
    readonly edges: {
      readonly node: ShopifyProductNode;
    }[];
  };
}

export async function createPages({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> {
  const { createPage } = actions;
  const result: ProductQuery = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `🚨  ERROR: creating Product pages: ${result.errors}`,
    );
  }

  result.data.allShopifyProduct.edges.forEach(
    (edge: { readonly node: ShopifyProductNode }) => {
      createPage({
        path: edge.node.slug,
        component: resolve('./src/app/Product/Layout.tsx'),
        context: {
          id: edge.node.id,
        },
      });
    },
  );
}
