import { Box, Heading } from "@wdlk/components"

import React from "react"
import styled from "./styled"

interface PageLayout {
  readonly menu: JSX.Element
  readonly headline: string
  readonly dangerouslySetChildren: string
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-column-gap: ${props => props.theme.space[8]}px;
  align-content: center;
  padding: ${props => props.theme.space[8]}px ${props => props.theme.space[5]}px;
`

const StyledSidebar = styled.aside`
  min-height: 100vh;
`

const StyledNavSlot = styled.nav`
  position: sticky;
  top: ${props => props.theme.header.height + props.theme.space[5]}px;
  max-width: 300px;
`

const StyledDangerousContent = styled.div`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.2;

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 40vw;
  }

  strong {
    display: inline-block;
    font-weight: 500;
    padding-bottom: ${props => props.theme.space[4]}px;
  }
`

export const PageContentLayout: React.FC<PageLayout> = props => (
  <StyledContainer>
    <StyledSidebar>
      <StyledNavSlot>{props.menu}</StyledNavSlot>
    </StyledSidebar>
    <main>
      <Box padding={[0, 0, 6]}>
        <Heading as="h1" size="l" type="primary">
          {props.headline}
        </Heading>
      </Box>
      <StyledDangerousContent
        dangerouslySetInnerHTML={{ __html: props.dangerouslySetChildren }}
      />
    </main>
  </StyledContainer>
)
