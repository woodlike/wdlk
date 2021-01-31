import * as GatsbyPage from './page';
import * as Query from './query';

import { Actions, Reporter } from 'gatsby';

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
    const page = data.allShopifyPage;

    GatsbyPage.createCollection(nodes, actions);
    GatsbyPage.createLegal(page.nodes, actions);
    GatsbyPage.createProduct(edges, actions);
  } catch (error) {
    if (error) {
      reporter.panicOnBuild(`🚨  ERROR: creating custom pages: ${error}`);
      return Promise.reject(new Error(error));
    }
  }
}
