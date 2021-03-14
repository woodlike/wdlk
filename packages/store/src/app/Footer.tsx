import { Box, Column, Columns, Heading, Small } from "@wdlk/components"
import { FooterLayout, GatsbyLink, Icon, IconSize, NewsletterForm } from ".."
import {
  useLegalPages,
  useServicePages,
  useSiteData,
  useSocialLinks,
} from "../hooks"

import React from "react"

export const Footer: React.FC = () => {
  const channels = useSocialLinks()
  const { siteMetadata } = useSiteData()
  const { allLegalPageEn, allLegalPageDe } = useLegalPages()
  const allServicePage = useServicePages()

  const date = new Date()

  return (
    <FooterLayout
      header={
        <Columns align="center">
          {!!channels.length
            ? channels.map((channel, idx) => (
                <Column key={channel.id} padding={[0, 0, 0, 3]}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={channel.url}>
                    <Icon
                      name={channel.name}
                      size={idx === 0 ? IconSize.s : IconSize.xs}
                      color="secondary"
                    />
                  </a>
                </Column>
              ))
            : null}
        </Columns>
      }
      small={
        <Columns align="center">
          <Box padding={[0, 0, 1, 0]}>
            <Small size="s" color="mutedHover">
              © {siteMetadata.brand} {date.getFullYear()}
            </Small>
          </Box>
          {allLegalPageDe.map(legal => (
            <Box key={legal.id} padding={[0, 0, 0, 3]}>
              <GatsbyLink size="xs" color="secondary" to={legal.slug}>
                {legal.shortTitle}
              </GatsbyLink>
            </Box>
          ))}
        </Columns>
      }>
      <>
        <div>
          <Box padding={[0, 0, 3, 0]}>
            <Heading size="xs" type="secondary" weight={500}>
              Legal
            </Heading>
          </Box>
          <Box as="ul" padding={[0, 0, 8, 0]}>
            {allLegalPageEn.map(legal => (
              <Box as="li" key={legal.id} padding={[0, 0, 2, 0]}>
                <GatsbyLink size="s" to={legal.slug}>
                  {legal.shortTitle}
                </GatsbyLink>
              </Box>
            ))}
          </Box>
        </div>
        <div>
          <Box padding={[0, 0, 3, 0]}>
            <Heading size="xs" type="secondary" weight={500}>
              Service
            </Heading>
          </Box>
          <Box as="ul" padding={[0, 0, 8, 0]}>
            {allServicePage.map(service => (
              <Box as="li" key={service.id} padding={[0, 0, 2, 0]}>
                <GatsbyLink size="s" to={service.slug}>
                  {service.title}
                </GatsbyLink>
              </Box>
            ))}
          </Box>
        </div>
        <NewsletterForm />
      </>
    </FooterLayout>
  )
}
