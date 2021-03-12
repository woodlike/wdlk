import { Box, Text } from "@wdlk/components"
import { GatsbyLink, PageContentLayout } from "../.."

import { Layout } from "../Layout"
import React from "react"
import { ShopifyPage } from "../../model/page"
import { SizingTable } from "../SizingTable"
import { graphql } from "gatsby"

interface ServiceQuery {
  readonly allServicePage: ShopifyPage[]
  readonly shopifyPage: ShopifyPage
}

interface ServiceLayoutProps {
  readonly data: ServiceQuery
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ data }) => {
  const isSizingType = data.shopifyPage.type === "sizing"
  return (
    <Layout>
      <PageContentLayout
        headline={data.shopifyPage.title}
        menu={
          <Box as="ul" padding={[0, 0, 8, 0]}>
            {data.allServicePage.map(page => (
              <Box as="li" key={`service-${page.id}`} padding={[0, 0, 3, 0]}>
                <Text size="m">
                  <GatsbyLink size="s" to={page.slug}>
                    {page.title}
                  </GatsbyLink>
                </Text>
              </Box>
            ))}
          </Box>
        }
        dangerouslySetChildren={
          !isSizingType ? data.shopifyPage.body : undefined
        }>
        {isSizingType ? <SizingTable /> : null}
      </PageContentLayout>
    </Layout>
  )
}

export default ServiceLayout

export const query = graphql`
  query ServiceQuery($id: String!) {
    shopifyPage(id: { eq: $id }) {
      id
      title
      body
      shopifyId
      type
    }
    allServicePage {
      id
      title
      slug
    }
  }
`
