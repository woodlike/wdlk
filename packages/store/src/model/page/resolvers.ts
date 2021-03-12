import { ResolverArgs, ShopifyPage } from "."
import {
  _addPathToSlug,
  _addPropsToNode,
  _addShortTitle,
  _filterPageByTitle,
  reduceToLanguage,
} from "./utils"

import { GatsbyCtx } from "../../gatsby"
import { compose } from "ramda"
import { legalIdMap } from "./constants"

const filterLegalPages = _filterPageByTitle(legalIdMap)
const addSlugToLegalPage = _addPathToSlug("legal")
const addProperties = compose(_addShortTitle, addSlugToLegalPage)

function createLegalResolvers(ctx: GatsbyCtx<ShopifyPage>, lang: "en" | "de") {
  const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })
  const pagesWithSlug = _addPropsToNode(addProperties, filterLegalPages(pages))
  const legalPages = reduceToLanguage(legalIdMap, pagesWithSlug)

  return lang === "en" ? legalPages.en : legalPages.de
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
      slug: {
        resolve(source: ShopifyPage) {
          return `/legal/${source.handle}`.replace(/\/\/+/g, "/")
        },
      },
    },
  }
}
