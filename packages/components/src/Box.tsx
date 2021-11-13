import { Color, Scale, ScaleArea } from "."

import React from "react"
import styled from "@emotion/styled"

export interface BoxProps {
  readonly padding: ScaleArea
  readonly breakpoint?: number
  readonly maxPadding?: ScaleArea
  readonly as?: BoxHTMLElement
  readonly borderWidths?: ScaleArea
  readonly borderStyles?: ScaleArea
  readonly borderColors?: BorderColorProps
  readonly backgroundColor?: string | BorderColorScale
  readonly className?: string
}

interface StyledBoxProps {
  readonly padding: ScaleArea
  readonly breakpoint: number
  readonly maxPadding?: ScaleArea
  readonly borderWidths?: ScaleArea
  readonly borderStyles?: ScaleArea
  readonly borderColors?: BorderColorProps
  readonly backgroundColor?: string | BorderColorScale
}

export interface BorderColorScale {
  readonly color: string
  readonly idx: number
}

export type BoxHTMLElement =
  | "div"
  | "span"
  | "section"
  | "article"
  | "main"
  | "header"
  | "footer"
  | "figure"
  | "nav"
  | "ul"
  | "li"
  | "aside"

export type BorderColorProps =
  | (string | BorderColorScale)
  | (string | BorderColorScale)[]

const StyledBox = styled.div<StyledBoxProps>`
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding, theme.space))};
  border-width: ${props =>
    props.borderWidths &&
    Scale.toCSSPixel(
      Scale.create(props.borderWidths as ScaleArea, props.theme.borderWidths),
    )};
  border-style: ${({ borderStyles, theme }) =>
    borderStyles &&
    Scale.toCSSString(
      Scale.create(borderStyles as ScaleArea, theme.borderStyles),
    )};
  border-color: ${props => {
    const { borderColors, theme } = props
    if (Array.isArray(borderColors)) {
      const colors = borderColors.map(color => {
        return typeof color === "object"
          ? Color.query(color.color, theme.colors, color.idx)
          : Color.query(color, theme.colors)
      }) as string[]

      return Scale.createBox(colors).join(" ")
    }

    return typeof borderColors === "object"
      ? Color.query(borderColors.color, theme.colors, borderColors.idx)
      : Color.query(borderColors as string, theme.colors)
  }};
  background-color: ${({ backgroundColor, theme }) =>
    typeof backgroundColor === "object"
      ? Color.query(backgroundColor.color, theme.colors, backgroundColor.idx)
      : Color.query(backgroundColor as string, theme.colors)};
  margin: 0;
  list-style: ${props => props.as === "ul" && "none"};

  @media (min-width: ${props => props.theme.breakpoints[props.breakpoint]}) {
    padding: ${props => {
      const { maxPadding, padding, theme } = props
      if (!maxPadding) {
        return Scale.toCSSPixel(Scale.create(padding, theme.space))
      }

      return Scale.toCSSPixel(Scale.create(maxPadding, theme.space))
    }};
  }
`

StyledBox.displayName = "StyledBox"

export const Box: React.FC<BoxProps> = props => (
  <StyledBox
    as={props.as || "div"}
    backgroundColor={props.backgroundColor}
    borderColors={props.borderColors}
    borderStyles={props.borderStyles}
    borderWidths={props.borderWidths}
    breakpoint={props.breakpoint ?? 2}
    maxPadding={props.maxPadding}
    padding={props.padding}>
    {props.children}
  </StyledBox>
)
