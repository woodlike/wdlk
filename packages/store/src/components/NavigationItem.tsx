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
  <StyledNavigationItem context={props.context}>
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.children}
    </div>
  </StyledNavigationItem>
);
