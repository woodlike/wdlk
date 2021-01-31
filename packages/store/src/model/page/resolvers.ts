import * as Legal from './legal';

import { ResolverArgs, ShopifyPage } from '.';

import { GatsbyCtx } from '../../gatsby';

export function createResolver() {
  return {
    ShopifyPage: {
      slug: {
        resolve(source: ShopifyPage) {
          console.log()
          return `/legal/${source.handle}`.replace(/\/\/+/g, '/');
        },
      },
      legal: {
         async resolve(source: ShopifyPage, _: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
           return await Legal.createLegalResolver(source, _, ctx)
        } 
      },
    },
  };
}
