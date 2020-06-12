// import { resolve } from 'path';
import { Actions, Reporter } from 'gatsby';

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
    readonly nodes: unknown;
  };
}
export async function createPages(): Promise<void> {
  console.log('so far this should be working!!!!!!!!!!!!!');
}
