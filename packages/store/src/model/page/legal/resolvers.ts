import { ResolverArgs, ShopifyPage, legalIds } from '..';

import { GatsbyCtx } from '../../../gatsby';
import { curry } from 'ramda';
import { hasNodeTitle } from '../utils';

interface FilterTitle {
  readonly query: {
    readonly filter: {
      readonly title: { eq: string | null };
    };
  };
  readonly type: 'ShopifyPage';
  readonly firstOnly: boolean;
}

const curriedHasNodeTitle = curry(hasNodeTitle);
const filterPageByTitle = curriedHasNodeTitle(legalIds);

export async function createLegalResolver(
  source: ShopifyPage,
  _: ResolverArgs,
  ctx: GatsbyCtx<ShopifyPage>,
) {
  return await ctx.nodeModel.runQuery<FilterTitle>({
    query: {
      filter: {
        title: { eq: filterPageByTitle(source) ? source.title : null },
      },
    },
    type: 'ShopifyPage',
    firstOnly: false,
  });
}
