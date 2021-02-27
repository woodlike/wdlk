import { filter, find, includes, map, toLower } from "ramda"

import { ShopifyNode } from "../../gatsby"

export const _hasNodeTitle = <T extends ShopifyNode>(ids: string[]) => (
  node: T,
) => {
  return !!find(id => includes(id, toLower(node.title)), ids)
}

export const _filterPageByTitle = <T extends ShopifyNode>(ids: string[]) => {
  // The filter operator is a curried function
  // It accepts an implicity second argument which accepts
  // an extended ShopifyNode array
  return filter<T>(_hasNodeTitle(ids))
}

export const _addPathToSlug = <T extends ShopifyNode>(pathname: string) => (
  node: T,
) => ({ ...node, slug: `/${pathname}/${node.handle}`.replace(/\/\/+/g, "/") })

export const _addSlugs = <T extends ShopifyNode>(
  callback: (node: T) => ShopifyNode,
  nodes: T[],
) => map(callback, nodes)
