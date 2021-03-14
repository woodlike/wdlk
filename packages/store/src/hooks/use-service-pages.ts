import { graphql, useStaticQuery } from "gatsby"

import { ShopifyPage } from "../model/page"

interface ServicePagesQuery {
  readonly allServicePage: ShopifyPage[]
}

export function useServicePages() {
  const { allServicePage } = useStaticQuery<ServicePagesQuery>(graphql`
    query ServicePages {
      allServicePage {
        slug
        title
        url
        shopifyId
        id
        handle
      }
    }
  `)

  return allServicePage
}
