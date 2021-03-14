import { filter, find, includes, map, toLower } from "ramda"

import { ShopifyNode } from "../../gatsby"

export interface NodeByLang {
  readonly en: ShopifyNode[]
  readonly de: ShopifyNode[]
}

interface PageIdMap {
  readonly name: string
  readonly lang?: string
}

const findByTitle = <T extends ShopifyNode>(idsMap: PageIdMap[], node: T) => {
  return find(idMap => includes(idMap.name, toLower(node.title)), idsMap)
}

export const _hasNodeTitle = <T extends ShopifyNode>(idsMap: PageIdMap[]) => (
  node: T,
) => {
  return !!findByTitle(idsMap, node)
}

export const _filterPageByTitle = <T extends ShopifyNode>(
  idsMap: PageIdMap[],
) => {
  // The filter operator is a curried function
  // It accepts an implicity second argument which accepts
  // an extended ShopifyNode array
  return filter<T>(_hasNodeTitle(idsMap))
}

export const reduceToLanguage = <T extends ShopifyNode>(
  idsMap: PageIdMap[],
  nodes: T[],
) =>
  nodes.reduce(
    (acc: NodeByLang, node: T) => {
      const idMap = findByTitle(idsMap, node)
      if (!idMap) return { ...acc }

      return idMap.lang === "en"
        ? { ...acc, en: [...acc.en, node] }
        : { ...acc, de: [...acc.de, node] }
    },
    { en: [], de: [] },
  )

export const _addPathToSlug = <T extends ShopifyNode>(pathname: string) => (
  node: T,
) => ({ ...node, slug: `/${pathname}/${node.handle}`.replace(/\/\/+/g, "/") })

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const _addShortTitle = <T extends ShopifyNode>(node: T) => {
  const title = node.handle.split("-")
  const capitalizedTitle = map(capitalize, title).join(" ")

  return { ...node, shortTitle: capitalizedTitle }
}

export const _addPropsToNode = <T extends ShopifyNode>(
  callback: (node: T) => ShopifyNode,
  nodes: T[],
) => map(callback, nodes)

export const sortByTitle = <T extends ShopifyNode>(a: T, b: T) => {
  const titleA = a.title.toLowerCase()
  const titleB = b.title.toLowerCase()
  if (titleA < titleB) return -1
  if (titleA > titleB) return 1

  return 0
}
