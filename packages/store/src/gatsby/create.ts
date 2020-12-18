import { Actions, Reporter } from 'gatsby';

import * as Page from './page';
import * as Query from './query';

export interface CreatePagesArgs {
  readonly actions: Actions;
  readonly reporter: Reporter;
  graphql: (query: string) => Promise<Query.CreatePageQuery>;
}

export async function createPages({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> {
  try {
    const data = await Query.create(graphql);

    const { edges } = data.allShopifyProduct;
    const { nodes } = data.allShopifyCollection;

    Page.createCollection(nodes, actions);
    Page.createProduct(edges, actions);
  } catch (error) {
    if (error) {
      reporter.panicOnBuild(`🚨  ERROR: creating custom pages: ${error}`);
      return Promise.reject(new Error(error));
    }
  }
}
