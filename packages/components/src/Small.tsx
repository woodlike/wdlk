import React from "react"
import styled from "@emotion/styled"

export interface SmallProps {
  readonly size: "s" | "m" | "l"
  readonly color?:
    | "primary"
    | "secondary"
    | "text"
    | "muted"
    | "background"
    | "mutedHover"
}

const StyledSmall = styled.small<SmallProps>`
  color: ${props => {
    const { color, theme } = props
    return !!color && theme.colors[color]
      ? theme.colors[color]
      : theme.colors.primary
  }};
  font-family: ${props => props.theme.small.fontFamily};
  font-size: ${props => {
    const { size, theme } = props
    return !!theme.small[size] ? `${theme.small[size].fontSize}px` : ""
  }};
  font-kerning: normal;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
`
StyledSmall.displayName = "StyledSmall"

export const Small: React.FC<SmallProps> = props => (
  <StyledSmall color={props.color} size={props.size}>
    {props.children}
  </StyledSmall>
)
