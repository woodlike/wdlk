import React from "react"
import styled from "./styled"

interface Input {
  readonly type: "email" | "date" | "password" | "number" | "text"
  readonly placeholder?: string
}

const formElementHeight = 50

const StyledInput = styled.input`
  flex: 1;
  box-sizing: border-box;
  height: ${formElementHeight}px;
  padding: ${props => props.theme.space[3]}px;
  border: 1px solid ${props => props.theme.colors.blacks[2]};
  color: ${props => props.theme.colors.blacks[2]};
  ::placeholder {
    color: ${props => props.theme.colors.muted};
    font-size: ${props => props.theme.fontSizes[0]};
    font-weight: 100;
    letter-spacing: 1px;
  }

  :focus {
    border-color: ${props => props.theme.colors.active};
    outline: 0;
  }
`
StyledInput.displayName = "StyledInput"

export const Input: React.FC<Input> = props => (
  <StyledInput placeholder={props.placeholder} type={props.type} />
)
