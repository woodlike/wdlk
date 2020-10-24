import React from 'react';
import styled from './styled';

export interface ListProps {
  readonly space: number;
  readonly indent?: number;
}

export interface StyledListProps {
  readonly space: number;
  readonly indent: number;
}

const StyledList = styled.ul<StyledListProps>`
  grid-row-gap: ${props => {
    const { space, theme } = props;
    return `${
      theme.space[space] && theme.space[space] > 0
        ? theme.space[space]
        : theme.space[1]
    }px`;
  }};
  margin: 0;
  padding-left: ${props => {
    const {
      indent,
      theme: { space },
    } = props;
    const scale = indent <= space.length ? space[indent] : 0;
    return `${scale}px`;
  }};
`;

export const List: React.FC<ListProps> = props => (
  <StyledList indent={props.indent || 0} space={props.space}>
    {props.children}
  </StyledList>
);
