import React, { ElementType } from "react"

import { PrismStyleProp } from "."
import styled from "@emotion/styled"

export interface CSSConverterProps {
  readonly cssObject: PrismStyleProp | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly as?: (ElementType<any> & string) | undefined
}

function toCSSString(cssObject: PrismStyleProp | undefined): string {
  return !!cssObject
    ? Object.entries(cssObject)
        .reduce(
          (acc: string[], [key, val]) => [
            ...acc,
            `${key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}: ${val};`,
          ],
          [],
        )
        .join("")
    : ""
}

const StyledCSSContainer = styled.span<CSSConverterProps>`
  ${props => toCSSString(props.cssObject)};
`

StyledCSSContainer.displayName = "StyledCSSContainer"

export const CSSConverter: React.FC<CSSConverterProps> = props => (
  <StyledCSSContainer as={props.as ?? "span"} cssObject={props.cssObject}>
    {props.children}
  </StyledCSSContainer>
)
