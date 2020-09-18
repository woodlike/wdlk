import React from 'react';
import styled from './styled';

export interface NavigationLayoutProps {
  readonly isExpanded: boolean;
}

const StyledNavigationLayout = styled.div<NavigationLayoutProps>`
  position: fixed;
  top: ${props => props.theme.header.height}px;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.header.height}px);
  padding: ${props =>
    `${props.theme.space[8]}px ${props.theme.space[3]}px ${props.theme.space[5]}px`};
  background-color: ${props => props.theme.colors.primary};
  ${props => {
    const {
      theme: { transition },
    } = props;

    return props.isExpanded
      ? `
      transform: 'none';
      transition: transform ${transition.timing[0]} ${transition.duration[1]}s;`
      : `
      transform: translate3d(-100%, 0, 0);
      transition: transform ${transition.timing[4]} ${transition.duration[1]}s;`;
  }}
`;

StyledNavigationLayout.displayName = 'StyledNavigationLayout';

export const NavigationLayout: React.FC<NavigationLayoutProps> = props => (
  <StyledNavigationLayout isExpanded={props.isExpanded}>
    {props.children}
  </StyledNavigationLayout>
);
