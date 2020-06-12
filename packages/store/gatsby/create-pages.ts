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
    readonly nodes: ShopifyProductNode[];
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
        nodes {
          id
          fields {
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

  result.data.allShopifyProduct.nodes.forEach((product: ShopifyProductNode) => {
    const { id, fields } = product;
    createPage({
      path: fields.slug,
      component: resolve('./src/components/Product/Layout.tsx'),
      context: {
        id: id,
      },
    });
  });
}
