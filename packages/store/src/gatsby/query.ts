import { Collection } from "../model"
// import { NodeByLang } from "../model/page/utils"
import { ProductNode } from "."
import { ShopifyPage } from "../model/page"
// import { ShopifyPage } from "../model/page"

export interface CreatePageQuery {
  readonly data: {
    readonly allShopifyProduct: { readonly edges: ProductNode[] }
    readonly allShopifyCollection: { readonly nodes: Collection[] }
    readonly allLegalPageDe: ShopifyPage[]
    readonly allLegalPageEn: ShopifyPage[]
  }
  readonly errors: boolean
}

export async function create(
  graphql: (query: string) => Promise<CreatePageQuery>,
) {
  const { data }: CreatePageQuery = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            slug
          }
        }
      }
      allShopifyCollection {
        nodes {
          id
          slug
        }
      }
      allLegalPageEn {
        title
        slug
        shopifyId
        id
        handle
        body
      }
      allLegalPageDe {
        title
        slug
        shopifyId
        id
        handle
        body
      }
    }
  `)
  return data
}
