/** @jsx jsx */
import { SerializedStyles, css, jsx } from "@emotion/react"

import { Theme } from ".."
import { calcSize } from "./utils"
import styled from "@emotion/styled"

export interface SelectTileProps {
  readonly id: string
  readonly fontSize: number
  readonly isActive: boolean
  readonly isAvailable: boolean
  readonly onClick: React.MouseEventHandler<HTMLLIElement>
  readonly borderWidth?: number
}

interface StyledSelectItemProps {
  readonly borderWidth?: number
  readonly isActive: boolean
  readonly isAvailable: boolean
  readonly fontSize: number
}

const createStylesSize = (
  theme: Theme,
  borderWidth: number,
  fontSize: number,
): SerializedStyles => css`
  width: ${calcSize(fontSize, theme.fontSizes)}px;
  height: ${calcSize(fontSize, theme.fontSizes)}px;
  border-width: ${borderWidth < theme.borderWidths.length
    ? `${theme.borderWidths[borderWidth]}px`
    : `${theme.borderWidths[0]}px`};
  border-style: solid;
  line-height: ${calcSize(fontSize, theme.fontSizes)}px;
`

const createActiveStyles = (
  theme: Theme,
  isActive: boolean,
  isAvailable: boolean,
): SerializedStyles => css`
  color: ${isAvailable ? "currentColor" : theme.colors.borderDisabled};
  border-color: ${isAvailable
    ? isActive
      ? theme.colors.borderActive
      : theme.colors.border
    : theme.colors.borderDisabled};
  cursor: ${isAvailable ? "pointer" : "unset"};
  pointer-events: ${isAvailable ? "all" : "none"};
  text-decoration: ${isAvailable ? "none" : "line-through"};
`

const StyledItem = styled.li<StyledSelectItemProps>`
  ${({ borderWidth = 1, fontSize, theme }) =>
    createStylesSize(theme, borderWidth, fontSize)};
  ${({ theme, isActive, isAvailable }) =>
    createActiveStyles(theme, isActive, isAvailable)}

  list-style: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ fontSize, theme }) =>
    fontSize < theme.fontSizes.length
      ? `${theme.fontSizes[fontSize]}px`
      : `${theme.fontSizes[0]}px`};
  text-align: center;
`

StyledItem.displayName = "Select.StyledItem"

export const Item: React.FC<SelectTileProps> = props => (
  <StyledItem
    id={props.id}
    isActive={props.isActive}
    isAvailable={props.isAvailable}
    fontSize={props.fontSize}
    borderWidth={props.borderWidth}
    role="option"
    aria-selected={props.isActive}
    onClick={props.onClick}>
    {props.children}
  </StyledItem>
)

Item.displayName = "Select.Item"
