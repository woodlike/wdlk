/** @jsx jsx */
import { Scale, ScaleArea } from "."
import { SerializedStyles, css, jsx } from "@emotion/react"

import React from "react"
import { getVariant } from "./theme"
import styled from "@emotion/styled"

export interface ButtonProps {
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>
  readonly inverted?: boolean
  readonly padding?: ScaleArea
  readonly variant?: ButtonVariant
}

interface StyledButtonProps {
  readonly inverted?: boolean
  readonly padding?: ScaleArea
  readonly variant?: ButtonVariant
}

type ButtonVariant = "primary" | "secondary"

const stylesPseudoElements = css`
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const createStylesVariant = (
  inverted: boolean,
  color: string,
  bg: string,
): SerializedStyles =>
  inverted
    ? css`
        color: ${bg};
        border: 2px solid ${bg};
      `
    : css`
        color: ${color};
        ::before {
          ${stylesPseudoElements}
          background-color: ${bg};
        }

        ::after {
          ${stylesPseudoElements}
          background-color: ${bg};
          filter: contrast(0.7);
          pointer-events: none;
          transform: translate3d(0, 100%, 0);
          transition: transform 100ms linear;
        }

        :hover {
          &::after {
            transform: translate3d(0, 0, 0);
            pointer-events: auto;
          }
        }
      `

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  width: 100%;
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding || 1, theme.space))};
  border: none;
  letter-spacing: 2px;
  line-height: 1;
  font-size: ${({ theme }) => `${theme.fontSizes[3]}px`};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  background: transparent;
  ${({ inverted, variant, theme }) => {
    const result = getVariant(theme, "buttons", variant || "primary")

    return result
      ? createStylesVariant(inverted || false, result.color, result.bg)
      : ``
  }};
`

StyledButton.displayName = "StyledButton"

export const Button: React.FC<ButtonProps> = props => (
  <StyledButton
    onClick={props.onClick}
    inverted={props.inverted}
    padding={props.padding}
    variant={props.variant}>
    {props.children}
  </StyledButton>
)
