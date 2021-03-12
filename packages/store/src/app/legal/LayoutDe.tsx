import { Box, Text } from "@wdlk/components"
import { GatsbyLink, PageContentLayout } from "../.."
import { LegalPage, ShopifyPage } from "../../model/page"

import { Layout } from ".."
import React from "react"
import { graphql } from "gatsby"

interface LegalLayoutQuery {
  readonly allLegalPageDe: LegalPage[]
  readonly shopifyPage: ShopifyPage
}

interface LegalLayoutProps {
  readonly data: LegalLayoutQuery
}
const LegalLayout: React.FC<LegalLayoutProps> = ({ data }) => {
  return (
    <Layout>
      <PageContentLayout
        headline={data.shopifyPage.title}
        menu={
          <Box as="ul" padding={[0, 0, 8, 0]}>
            {data.allLegalPageDe.map(page => (
              <Box as="li" key={page.id} padding={[0, 0, 3, 0]}>
                <Text size="m">
                  <GatsbyLink size="s" to={page.slug}>
                    {page.shortTitle}
                  </GatsbyLink>
                </Text>
              </Box>
            ))}
          </Box>
        }
        dangerouslySetChildren={data.shopifyPage.body}
      />
    </Layout>
  )
}

export default LegalLayout

export const query = graphql`
  query LegalQueryDe($id: String!) {
    shopifyPage(id: { eq: $id }) {
      id
      title
      body
      shopifyId
    }
    allLegalPageDe {
      title
      shortTitle
      slug
    }
  }
`
