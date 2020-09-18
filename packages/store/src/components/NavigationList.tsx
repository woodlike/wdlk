import React from 'react';
import styled from './styled';

export interface NavBarProps {
  readonly itemCount: number;
}

const StyledNavigationList = styled.ul<NavBarProps>`
  display: grid;
  grid-template-rows: repeat(${props => props.itemCount}, 1fr [nav-item]);
  grid-row-gap: ${props => props.theme.space[3]}px;
  padding-left: 0;
  margin: 0;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(${props => props.itemCount}, 1fr [nav-item]);
    grid-template-rows: none;
    grid-column-gap: ${props => props.theme.space[5]}px;
    grid-row-gap: unset;
  }
`;

StyledNavigationList.displayName = 'StyledNavigationList';

export const NavigationList: React.FC<NavBarProps> = props => (
  <StyledNavigationList itemCount={props.itemCount}>
    {props.children}
  </StyledNavigationList>
);
