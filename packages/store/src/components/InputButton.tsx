import React, { useState } from "react"

import styled from "./styled"

interface InputButtonProps {
  readonly isSingle: boolean
}

interface StyledInputArrorProps {
  readonly isFocused: boolean
  readonly isHovered: boolean
}

const formElementSize = 50

const StyledInputButton = styled.button<InputButtonProps>`
  width: ${formElementSize}px;
  height: ${formElementSize}px;
  border-width: 1px 1px 1px ${props => (props.isSingle ? "1px" : "0")};
  border-style: solid;
  border-color: ${props => props.theme.colors.blacks[2]};
  background-color: ${props => props.theme.colors.background};
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.colors.blacks[2]};
  }
  :focus {
    border-color: ${props => props.theme.colors.active};
    outline: 0;
  }
`

const StyledInputArrow = styled.polygon<StyledInputArrorProps>`
  fill: ${props => {
    if (props.isFocused) return props.theme.colors.active
    if (props.isHovered) return props.theme.colors.background

    return props.theme.colors.blacks[2]
  }};
  stroke-width: 1px;
  fill-rule: evenodd;

  :hover {
    fill: ${props => props.theme.colors.background};
  }
`

export const InputButton: React.FC<InputButtonProps> = props => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  return (
    <StyledInputButton
      isSingle={props.isSingle}
      value="submit"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <svg width="18px" height="10px" viewBox="0 0 18 10">
        <StyledInputArrow
          isFocused={isFocused}
          isHovered={isHovered}
          points="12.8305787 0.176776695 13.1841321 -0.176776695 18.2354321 4.87452334 13.1841321 9.92582338 12.8305787 9.57226999 17.278 5.124 -1.77635684e-15 5.12452334 -1.77635684e-15 4.62452334 17.278 4.624"
        />
      </svg>
    </StyledInputButton>
  )
}
