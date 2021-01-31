import { filter, find, includes, toLower } from 'ramda';

import { ShopifyNode } from '../../gatsby';
import { ShopifyPage } from '.';

export const hasNodeTitle = <T extends ShopifyNode>(ids: string[], node: T) =>
  !!find(id => includes(id, toLower(node.title)), ids);

export const filterPageByTitle = (ids: string[]) => filter<ShopifyPage>(node => hasNodeTitle(ids, node));

