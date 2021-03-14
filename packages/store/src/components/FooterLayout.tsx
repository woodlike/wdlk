import React from "react"
import styled from "./styled"

export interface FooterLayoutProps {
  readonly header: JSX.Element
  readonly small: JSX.Element
}

const StyledFooterLayout = styled.footer`
  position: relative;
  max-width: ${props => props.theme.breakpoints[5]};
  padding: ${props =>
    `${props.theme.space[9]}px ${props.theme.space[8]}px ${props.theme.space[7]}px`};
  margin: auto;
  background-color: inherit;
`
StyledFooterLayout.displayName = "StyledFooterLayout"

const StyledHeaderSlot = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: ${props => props.theme.space[3]}px 0;
  border-color: ${props => props.theme.colors.border};
  border-width: 1px 0;
  border-style: solid;
`
StyledHeaderSlot.displayName = "StyledHeaderSlot"

const StyledSmallSlot = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  padding-top: ${props => props.theme.space[4]}px;
`

StyledSmallSlot.displayName = "StyledSmallSlot"

const StyledMenuSlot = styled.div`
  text-align: center;
  padding: ${props => props.theme.space[7]}px 0;
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    column-gap: ${props => props.theme.space[3]}px;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.breakpoints[4]}) {
    column-gap: ${props => props.theme.space[4]}px;
  }
`
StyledMenuSlot.displayName = "StyledMenuSlot"

export const FooterLayout: React.FC<FooterLayoutProps> = props => (
  <StyledFooterLayout>
    <StyledHeaderSlot>{props.header}</StyledHeaderSlot>
    <StyledMenuSlot>{props.children}</StyledMenuSlot>
    <StyledSmallSlot>{props.small}</StyledSmallSlot>
  </StyledFooterLayout>
)
