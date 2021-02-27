import { ResolverArgs, ShopifyPage, legalIds } from "."
import { addPathToSlug, addSlugs, filterPageByTitle } from "./utils"

import { GatsbyCtx } from "../../gatsby"

const filterLegalPages = filterPageByTitle(legalIds)
const addSlugToLegalPage = addPathToSlug("legal")

export function legal() {
  return {
    allLegalPages: {
      type: ["ShopifyPage"],
      resolve(_source: {}, _args: ResolverArgs, ctx: GatsbyCtx<ShopifyPage>) {
        const pages = ctx.nodeModel.getAllNodes({ type: "ShopifyPage" })
        const legalPages = filterLegalPages(pages)

        return addSlugs(addSlugToLegalPage, legalPages)
      },
    },
  }
}

export function shopify() {
  return {
    ShopifyPage: {
      slug: {
        resolve(source: ShopifyPage) {
          console.log()
          return `/legal/${source.handle}`.replace(/\/\/+/g, "/")
        },
      },
    },
  }
}
