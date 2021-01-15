import React from 'react';
import styled from '../styled';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${props => props.theme.space[3]}px;
  row-gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[4]}px;
  list-style: none;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${props => props.theme.space[4]}px;
    row-gap: ${props => props.theme.space[5]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[5]}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

StyledList.displayName = 'CollectionStyledList';

export const Frame: React.FC = props => (
  <StyledList>{props.children}</StyledList>
);
