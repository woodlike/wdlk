import React from 'react';
import styled from '../styled';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(60vh, 1fr));
  column-gap: ${props => props.theme.space[3]}px;
  row-gap: ${props => props.theme.space[4]}px;
  padding: 0;
  list-style: none;

  @media (min-width ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${props => props.theme.space[4]}px;
    row-gap: ${props => props.theme.space[5]}px;
  }

  @media (min-width ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

StyledList.displayName = 'CollectionStyledList';

export const Frame: React.FC = props => (
  <StyledList>{props.children}</StyledList>
);
