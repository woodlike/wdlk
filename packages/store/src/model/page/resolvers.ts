import { ResolverArgs, ShopifyPage } from "."
import {
  _addPathToSlug,
  _addPropsToNode,
  _filterPageByTitle,
  reduceToLanguage,
} from "./utils"

import { GatsbyCtx } from "../../gatsby"
import { legalIdMap } from "./constants"

const filterLegalPages = _filterPageByTitle(legalIdMap)
const addSlugToLegalPage = _addPathToSlug("legal")

export function legal() {
  return {
    allLegalPageEn: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        //TODO: remove repetition setup from legal page reducer
        const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })
        const pagesWithSlug = _addPropsToNode(
          addSlugToLegalPage,
          filterLegalPages(pages),
        )
        const legalPages = reduceToLanguage(legalIdMap, pagesWithSlug)
        return legalPages.en
      },
    },
    allLegalPageDe: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })
        const pagesWithSlug = _addPropsToNode(
          addSlugToLegalPage,
          filterLegalPages(pages),
        )
        const legalPages = reduceToLanguage(legalIdMap, pagesWithSlug)
        return legalPages.de
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
