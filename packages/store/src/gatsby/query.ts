import { Collection, Legal } from '../model';

import { ProductNode } from '.';

export interface CreatePageQuery {
  readonly data: {
    readonly allShopifyProduct: { readonly edges: ProductNode[] };
    readonly allShopifyCollection: { readonly nodes: Collection[] };
    readonly allShopifyPage: { readonly nodes: Legal[] };
  };
  readonly errors: boolean;
}

export async function create(
  graphql: (query: string) => Promise<CreatePageQuery>,
) {
  const { data }: CreatePageQuery = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            slug
          }
        }
      }
      allShopifyCollection {
        nodes {
          id
          slug
        }
      }
      allShopifyPage {
        nodes {
          id
          slug
        }
      }
    }
  `);
  return data;
}
