import React from "react"
import styled from "@emotion/styled"

export interface LegendProps {
  readonly size: LegendSize
  readonly as?: LegendTypes
  readonly type?: "primary" | "secondary"
}

type LegendTypes = "figcaption" | "legend" | "strong" | "small" | "span" | "div"

type LegendSize = "xs" | "s" | "m" | "l"

const StyledLegend = styled.div<LegendProps>`
  color: ${({ theme }) => theme.legend.color};
  font-family: ${({ theme }) => theme.legend.fontFamily};
  font-size: ${({ size, theme }) => `${theme.legend[size].fontSize}px`};
  font-kerning: normal;
  font-weight: normal;
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 2px;
  text-transform: ${({ type }) =>
    type === "primary" ? "uppercase" : "capitalize"};
  -webkit-font-smoothing: antialiased;
`

StyledLegend.displayName = "StyledLegend"

export const Legend = (props: React.PropsWithChildren<LegendProps>): JSX.Element => (
  <StyledLegend
    as={props.as || "div"}
    size={props.size}
    type={props.type || "primary"}>
    {props.children}
  </StyledLegend>
)
