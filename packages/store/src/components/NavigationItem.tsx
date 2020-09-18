import React from 'react';
import styled from './styled';

export interface NavigationItemProps {
  readonly current: boolean;
  readonly context: 'bar' | 'panel';
  readonly isActive?: boolean;
  readonly onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  readonly onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

interface StyledNavigationItemProps {
  readonly context: 'bar' | 'panel';
}
const StyledNavigationItem = styled.li<StyledNavigationItemProps>`
  position: relative;
  align-self: center;
  list-style: none;
  justify-self: left;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.theme.header.height}px;
  }
  ${props =>
    props.context === 'bar' ??
    `
    @media (min-width: ${props.theme.breakpoints[1]}) {
      justify-self: center
    }
  `}
`;

StyledNavigationItem.displayName = 'StyledNavigationItem';

export const NavigationItem: React.FC<NavigationItemProps> = props => (
  <StyledNavigationItem
    context={props.context}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}>
    {props.children}
  </StyledNavigationItem>
);
