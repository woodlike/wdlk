import { Scale, ScaleArea } from "."

import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export interface ColumnProps {
  readonly as?: HTMLRowType
  readonly basis?: RowFlexBasis
  readonly order?: number
  readonly padding?: ScaleArea
}

export type RowFlexBasis =
  | "fluid"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5"

export type HTMLRowType = "div" | "section" | "aside" | "article"

const calculateFlexBasis = (basis: RowFlexBasis): string =>
  basis
    .split("/")
    .reduce((prev: string, curr: string) => ((+prev * 100) / +curr).toString())

const StyledColumn = styled.div<ColumnProps>`
  box-sizing: border-box;
  ${props => {
    const { basis } = props
    return !!basis && basis !== "fluid"
      ? css`
          flex: 0 0 ${calculateFlexBasis(basis)}%;
        `
      : ""
  }};
  padding: ${props =>
    !!props.padding &&
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};
  order: ${props => props.order ?? "initial"};
`

StyledColumn.displayName = "StyledColumn"

export const Column: React.FC<ColumnProps> = props => (
  <StyledColumn
    as={props.as ?? "div"}
    basis={props.basis}
    order={props.order}
    padding={props.padding}>
    {props.children}
  </StyledColumn>
)
