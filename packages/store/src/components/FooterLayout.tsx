import React from 'react';
import styled from './styled';

export interface FooterLayoutProps {
  readonly menu: JSX.Element;
  readonly small: JSX.Element;
}

const StyledFooterLayout = styled.footer`
  position: relative;
  max-width: ${props => props.theme.breakpoints[2]};
  padding: ${props =>
    `${props.theme.space[9]}px ${props.theme.space[8]}px ${props.theme.space[7]}px`};
  margin: auto;
  background-color: inherit;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
    width: 100vw:
    heigh: 100%;
    border-top: 1px solid ${props => props.theme.colors.border};
    transform: translateX(-50%);
  }
`;
StyledFooterLayout.displayName = 'StyledFooterLayout';

const StyledSmallSlot = styled.div`
  padding-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
`;

StyledSmallSlot.displayName = 'StyledSmallSlot';

const StyledMenuSlot = styled.div`
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: ${props => props.theme.space[3]}px;
    text-align: left;
  }

  @media (min-width: ${props => props.theme.breakpoints[4]}) {
    column-gap: ${props => props.theme.space[4]}px;
  }
`;
StyledMenuSlot.displayName = 'StyledMenuSlot';

export const FooterLayout: React.FC<FooterLayoutProps> = props => (
  <StyledFooterLayout>
    <StyledMenuSlot>{props.menu}</StyledMenuSlot>
    {props.children}
    <StyledSmallSlot>{props.small}</StyledSmallSlot>
  </StyledFooterLayout>
);
