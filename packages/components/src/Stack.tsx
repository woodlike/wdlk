import React from 'react';

import { BoxHTMLElement } from '.';
import styled from './styled';

export interface StackProps {
  readonly as: BoxHTMLElement;
  readonly space: number;
}

const StyledStack = styled.div<StackProps>`
  display: grid;
  grid-row-gap: ${({ space, theme }) =>
    `${
      theme.space[space] && theme.space[space] > 0
        ? theme.space[space]
        : theme.space[1]
    }px`};
`;
StyledStack.displayName = 'StyledStack';

export const Stack: React.FC<StackProps> = props => (
  <StyledStack as={props.as} space={props.space}>
    {props.children}
  </StyledStack>
);
