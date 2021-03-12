import { Box, Heading, Theme } from "@wdlk/components"

import React from "react"
import { css } from "@emotion/core"
import styled from "./styled"

interface PageLayout {
  readonly menu: JSX.Element
  readonly headline: string
  readonly dangerouslySetChildren?: string
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-column-gap: ${props => props.theme.space[8]}px;
  align-content: center;
  padding: ${props => props.theme.space[8]}px ${props => props.theme.space[5]}px;
`

StyledContainer.displayName = "StyledContainer"

const StyledSidebar = styled.aside`
  min-height: 100vh;
`

StyledSidebar.displayName = "StyledSidebar"

const StyledNavSlot = styled.nav`
  position: sticky;
  top: ${props => props.theme.header.height + props.theme.space[5]}px;
  max-width: 300px;
`

StyledNavSlot.displayName = "StyledNavSlot"

const contentStyles = (theme: Theme) => css`
  font-family: ${theme.fonts.body};
  font-weight: 300;
  font-size: ${theme.fontSizes[2]}px;
  line-height: 1.2;

  @media (min-width: ${theme.breakpoints[3]}) {
    max-width: 40vw;
  }
`

const StyledContent = styled.div`
  ${props => contentStyles(props.theme)}

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: 100%;
  }
`
StyledContent.displayName = "StyledContent"

const StyledDangerousContent = styled.div`
  ${props => contentStyles(props.theme)}

  strong {
    display: inline-block;
    font-weight: 500;
    padding-bottom: ${props => props.theme.space[4]}px;
  }
`

StyledDangerousContent.displayName = "StyledDangerousContent"

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
      {!!props.dangerouslySetChildren ? (
        <StyledDangerousContent
          dangerouslySetInnerHTML={{ __html: props.dangerouslySetChildren }}
        />
      ) : null}
      {!!props.children ? (
        <StyledContent>{props.children}</StyledContent>
      ) : null}
    </main>
  </StyledContainer>
)
