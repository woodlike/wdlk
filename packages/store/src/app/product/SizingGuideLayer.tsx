import { Box, Columns, Heading, Layer, LayerShim, Text } from "@wdlk/components"
import { Icon, IconSize } from "../.."
import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import { ShopifyPageNode } from "../../gatsby"
import { SizingTable } from "."

export interface SizingGuideLayerProps {
  readonly isOpen: boolean
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  readonly sizingPage: ShopifyPageNode
}

export const SizingGuideLayer: React.FC<SizingGuideLayerProps> = props => {
  const {
    graphCmsSizing: { description },
  } = useStaticQuery(graphql`
    query SizingQUery {
      graphCmsSizing {
        description
      }
    }
  `)
  return (
    <>
      <Layer isOpen={props.isOpen} padding={[6, 8]}>
        <Columns
          align="center"
          justifyContent="space-between"
          padding={[0, 0, 8, 0]}>
          <Heading type="secondary" size="xs">
            {props.sizingPage.title}
          </Heading>
          <Icon
            onClick={() => props.setIsOpen(!props.isOpen)}
            name="close"
            size={IconSize.xs}
            color="secondary"
          />
        </Columns>
        <Box padding={[0, 0, 4, 0]}>
          <Text size="s">{description}</Text>
        </Box>
        <SizingTable />
      </Layer>
      <LayerShim
        isOpen={props.isOpen}
        onClick={() => props.setIsOpen(!props.isOpen)}
      />
    </>
  )
}
