import { filter, find, includes, map, toLower } from "ramda"

import { ShopifyNode } from "../../gatsby"

export const hasNodeTitle = <T extends ShopifyNode>(ids: string[], node: T) =>
  !!find(id => includes(id, toLower(node.title)), ids)

export const filterPageByTitle = <T extends ShopifyNode>(ids: string[]) =>
  filter<T>(node => hasNodeTitle(ids, node))

export const addPathToSlug = <T extends ShopifyNode>(pathname: string) => (
  node: T,
) => ({ ...node, slug: `/${pathname}/${node.handle}`.replace(/\/\/+/g, "/") })

export const addSlugs = <T extends ShopifyNode>(
  callback: (node: T) => ShopifyNode,
  nodes: T[],
) => map(callback, nodes)
