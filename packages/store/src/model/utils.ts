import { filter, find, includes, toLower } from 'ramda';

import { ShopifyNode } from '../gatsby';
import { ShopifyPage } from '.';

export const hasNodeTitle = <T extends ShopifyNode>(node: T, ids: string[]) =>
  !!find(id => includes(id, toLower(node.title)), ids);

export const filterPageByTitle = (ids: string[]) => filter<ShopifyPage>(node => hasNodeTitle(node, ids));

