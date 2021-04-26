import { SerializedStyles, css } from "@emotion/core"

import React from "react"
import { Theme } from "."
import styled from "./styled"

export interface TextProps {
  readonly size: TextSize
  readonly breakpoint?: number
  readonly as?: TextType
  readonly isInverted?: boolean
  readonly weight?: 300 | 500 | 700
}

type TextSize = "s" | "m" | "l"
export type TextType = "p" | "div"

const createBreakpointStyles = (
  breakpointIdx: number,
  size: TextSize,
  theme: Theme,
): SerializedStyles => {
  return theme.text[size].growSize
    ? css`
        @media (min-width: ${theme.breakpoints[breakpointIdx]}) {
          line-height: 1.4;
          font-size: ${theme.text[size].growSize}px;
        }
      `
    : css``
}

const StyledText = styled.p<TextProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-kerning: normal;
  font-size: ${({ size, theme }) => `${theme.text[size].fontSize}px`};
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 0.2px;
  color: ${({ isInverted, theme }) =>
    !!isInverted ? theme.text.modes.color : theme.text.color};
  font-weight: ${({ weight }) => weight ?? 300};
  -webkit-font-smoothing: antialiased;

  ${({ breakpoint, size, theme }) =>
    breakpoint ? createBreakpointStyles(breakpoint, size, theme) : ""}
`

StyledText.displayName = "StyledText"

export const Text: React.FC<TextProps> = props => (
  <StyledText
    as={props.as || "p"}
    breakpoint={props.breakpoint}
    isInverted={props.isInverted}
    size={props.size}
    weight={props.weight}>
    {props.children}
  </StyledText>
)
