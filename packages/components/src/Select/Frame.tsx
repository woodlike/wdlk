import React from "react"
import { calcSize } from "./utils"
import styled from "@emotion/styled"

export interface SelectFrameProps {
  readonly ariaLabel: string
  readonly ariaActivedescendant: string
  readonly fontSize: number
}

interface StyledFrameProps {
  readonly fontSize: number
}

const StyledFrame = styled.ul<StyledFrameProps>`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(auto-fit, ${calcSize(props.fontSize, props.theme.fontSizes)}px)`};
  grid-column-gap: ${props =>
    `${calcSize(props.fontSize, props.theme.fontSizes) / 2.5}px`};
  padding: 0;
  margin: 0;
  outline: none;
`

StyledFrame.displayName = "Select.StyledFrame"

export const Frame = (props: React.PropsWithChildren<SelectFrameProps>): JSX.Element => (
  <StyledFrame
    aria-label={props.ariaLabel}
    aria-activedescendant={props.ariaActivedescendant}
    fontSize={props.fontSize}
    role="listbox"
    tabIndex={0}>
    {props.children}
  </StyledFrame>
)

Frame.displayName = "Select.Frame"
