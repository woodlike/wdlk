/** @jsx jsx */
import { SerializedStyles, css, jsx } from "@emotion/react"

import React from "react"
import { Theme } from "@emotion/react"
import styled from "@emotion/styled"

export interface HeadingProps {
  readonly size: HeadlineSize
  readonly type: HeadingFamily
  readonly breakpoint?: number

  readonly as?: HeadingLevel
  readonly isInverted?: boolean
  readonly weight?: number
}

export type HeadingFamily = "primary" | "secondary" | "campaign"
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong"
export type HeadlineSize = "xs" | "s" | "m" | "l" | "xl" | "xxl"

const createBreakpointStyles = (
  breakpointIdx: number,
  size: HeadlineSize,
  theme: Theme,
): SerializedStyles => {
  return theme.heading[size].growSize
    ? css`
        @media (min-width: ${theme.breakpoints[breakpointIdx]}) {
          line-height: 1.5;
          font-size: ${theme.heading[size].growSize}px;
        }
      `
    : css``
}

const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  font-kerning: normal;
  font-family: ${props => {
    const { type, theme } = props
    return !!theme.heading.fonts[type] ? theme.heading.fonts[type] : ""
  }};

  font-size: ${props => {
    const { size, theme } = props
    return !!theme.heading[size] ? `${theme.heading[size].fontSize}px` : ""
  }};

  font-weight: ${props =>
    props.weight ? props.weight : props.theme.heading.fontWeight};
  color: ${props => {
    const { isInverted, theme } = props
    return isInverted ? theme.heading.modes.color : theme.heading.color
  }};

  line-height: 1.3;
  -webkit-font-smoothing: antialiased;

  ${({ breakpoint, size, theme }) =>
    breakpoint ? createBreakpointStyles(breakpoint, size, theme) : ""}
`

StyledHeading.displayName = "StyledHeading"

export const Heading = (props: React.PropsWithChildren<HeadingProps>): JSX.Element => (
  <StyledHeading
    as={props.as || "h1"}
    breakpoint={props.breakpoint}
    isInverted={!!props.isInverted}
    size={props.size}
    type={props.type}
    weight={props.weight}>
    {props.children}
  </StyledHeading>
)
