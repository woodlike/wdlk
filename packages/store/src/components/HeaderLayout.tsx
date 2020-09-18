import React from 'react';
import styled from './styled';

export interface HeaderLayout {
  readonly firstSlot: JSX.Element;
  readonly midSlot: JSX.Element;
  readonly lastSlot: JSX.Element;
}

const StyledHeaderLayout = styled.header`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-column-gap: ${props => props.theme.space[3]}px;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  max-width: 100vw;
  height: ${props => props.theme.header.height}px;
  padding: ${props => props.theme.space[4]}px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100%;
    border-bottom:  solid 1px ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background};
    opacity: 0.94;
  },
`;

StyledHeaderLayout.displayName = 'StyledHeaderLayout';

const StyledMidSlot = styled.div`
  justify-self: center;
`;

StyledMidSlot.displayName = 'StyledMidSlot';

const StyledLastSlot = styled.div`
  justify-self: center;
`;

StyledLastSlot.displayName = 'StyledLastSlot';

export const HeaderLayout: React.FC<HeaderLayout> = props => (
  <StyledHeaderLayout>
    {props.firstSlot}
    <StyledMidSlot>{props.midSlot}</StyledMidSlot>
    <StyledLastSlot>{props.lastSlot}</StyledLastSlot>
    {props.children}
  </StyledHeaderLayout>
);
