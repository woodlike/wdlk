import { graphql, useStaticQuery } from "gatsby"

import { LegalPage } from "../model/page"

interface LegalPagesQuery {
  readonly allLegalPageDe: LegalPage[]
  readonly allLegalPageEn: LegalPage[]
}

export function useLegalPages() {
  const data = useStaticQuery<LegalPagesQuery>(graphql`
    query LegalPages {
      allLegalPageDe {
        slug
        title
        type
        url
        id
        handle
        body
        shopifyId
        shortTitle
      }
      allLegalPageEn {
        body
        handle
        id
        shopifyId
        shortTitle
        slug
        title
        url
      }
    }
  `)

  return data
}
