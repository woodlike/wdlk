import { BoxHTMLElement } from "."
import React from "react"
import styled from "@emotion/styled"

export interface StackProps {
  readonly as: BoxHTMLElement
  readonly space: number
}

const StyledStack = styled.div<StackProps>`
  display: grid;
  grid-row-gap: ${({ space, theme }) =>
    `${
      theme.space[space] && theme.space[space] > 0
        ? theme.space[space]
        : theme.space[1]
    }px`};
  padding: 0;
  margin: 0;
`
StyledStack.displayName = "StyledStack"

export const Stack = (props: React.PropsWithChildren<StackProps>): JSX.Element => (
  <StyledStack as={props.as} space={props.space}>
    {props.children}
  </StyledStack>
)
