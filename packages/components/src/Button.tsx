import { ButtonVariant, Scale, ScaleArea } from "."
import { SerializedStyles, css } from "@emotion/react"

import React from "react"
import styled from "@emotion/styled"

export const BUTTON_LOADING_Y_KEY = "--wdlk-button-animation-y"

export interface ButtonProps {
  variant: ButtonVariantType
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  isLoading?: boolean
  padding?: ScaleArea
  loadingCounter?: number
}

type ButtonVariantType = "primary" | "secondary"

const stylesPseudoElements = css`
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const getHoverStyles = (disabled: boolean): SerializedStyles => {
  if (disabled) return css``
  return css`
    :hover {
      &::before {
        opacity: 0.8;
        transition: opacity 200ms ease-in-out;
      }
    }
  `
}

interface StylesVariantOptions {
  variant: ButtonVariant
  disabled?: boolean
  isLoading?: boolean
}

const getVariantStyles = ({
  variant,
  disabled = false,
  isLoading = false,
}: StylesVariantOptions): SerializedStyles => {
  const bgColor = disabled ? variant.disabled : variant.bg
  const borderColor = disabled ? variant.disabled : variant.color

  return css`
    color: ${variant.color};
    border-color: ${borderColor};

    ::before {
      ${stylesPseudoElements}
      background-color: ${isLoading ? variant.disabled : bgColor};
    }

    ::after {
      ${stylesPseudoElements}
      background-color: ${variant.bg};
      pointer-events: none;
      transform: translate3d(0, calc(var(${BUTTON_LOADING_Y_KEY}, 100) * 1%), 0);
      transition: transform 500ms ease-out;
    }

    ${!isLoading ? getHoverStyles(disabled) : ""}
  `
}

interface StyledButtonProps {
  variant: ButtonVariantType
  disabled?: boolean
  isLoading?: boolean
  padding?: ScaleArea
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  width: 100%;
  padding: ${({ padding, theme }) => {
    return Scale.toCSSPixel(Scale.create(padding ?? 1, theme.space))
  }};

  border-width: 2px;
  border-style: solid;
  letter-spacing: 2px;
  line-height: 1;
  font-size: ${({ theme }) => `${theme.fontSizes[3]}px`};
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  background: transparent;
  cursor: ${({ disabled, isLoading }) => {
    if (!!disabled) return "not-allowed"
    if (!!isLoading) return "wait"
    return "pointer"
  }};

  ${({ disabled, isLoading, theme, variant }) => {
    const buttons = theme.buttons
    const button = buttons[variant]

    return getVariantStyles({ disabled, isLoading, variant: button })
  }};
`

StyledButton.displayName = "StyledButton"

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  isLoading,
  loadingCounter,
  onClick,
  padding,
  variant,
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!buttonRef.current) return
    const style = buttonRef.current.style

    if (loadingCounter === undefined) {
      style.setProperty(BUTTON_LOADING_Y_KEY, "100")
      return
    }

    style.setProperty(BUTTON_LOADING_Y_KEY, `${loadingCounter}`)
  }, [isLoading, loadingCounter])

  return (
    <StyledButton
      disabled={disabled}
      isLoading={isLoading}
      onClick={onClick}
      padding={padding}
      ref={buttonRef}
      variant={variant}>
      {children}
    </StyledButton>
  )
}
