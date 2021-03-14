import { ResolverArgs, ShopifyPage } from "."
import { ServiceIdMap, legalIdMap } from "./constants"
import {
  _addPathToSlug,
  _addPropsToNode,
  _addShortTitle,
  _filterPageByTitle,
  reduceToLanguage,
  sortByTitle,
} from "./utils"
import { compose, map, sort } from "ramda"

import { GatsbyCtx } from "../../gatsby"

// Legal pages node operations
const filterLegalPages = _filterPageByTitle(legalIdMap)
const addSlugToLegalPage = _addPathToSlug("legal")
const addProperties = compose(_addShortTitle, addSlugToLegalPage)

function createLegalResolvers(ctx: GatsbyCtx<ShopifyPage>, lang: "en" | "de") {
  const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })
  const sanitizedPages = sort(sortByTitle, filterLegalPages(pages))

  const pagesWithSlug = _addPropsToNode(addProperties, sanitizedPages)
  const legalPages = reduceToLanguage(legalIdMap, pagesWithSlug)

  return lang === "en" ? legalPages.en : legalPages.de
}

export function service() {
  return {
    allServicePage: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })

        const filterServicePages = _filterPageByTitle(ServiceIdMap)
        const addSlug = _addPathToSlug("service")
        const sanitizedPages = sort(sortByTitle, filterServicePages(pages))

        return map(addSlug, sanitizedPages)
      },
    },
  }
}

export function legal() {
  return {
    allLegalPageEn: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        return createLegalResolvers(ctx, "en")
      },
    },
    allLegalPageDe: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        return createLegalResolvers(ctx, "de")
      },
    },
  }
}

export function shopify() {
  return {
    ShopifyPage: {
      type: {
        resolve(source: ShopifyPage) {
          const sizingType = "sizing"
          const isSizingGuide = source.title.toLowerCase().includes(sizingType)

          return isSizingGuide ? sizingType : null
        },
      },
    },
  }
}
