import { Scale, ScaleArea } from '@wdlk/components';
import React from 'react';
import styled from './styled';

export interface StickyBoxProps {
  readonly breakpoint: number;
  readonly padding?: ScaleArea;
}

const StyledStickyBox = styled.div<StickyBoxProps>`
  position: relative;
  top: 0;
  box-sizing: border-box;
  height: calc(100vh - ${props => props.theme.header.height}px);
  padding: ${props =>
    !!props.padding &&
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};

  @media (min-width: ${props => props.theme.breakpoints[props.breakpoint]}) {
    position: sticky;
  }
`;

StyledStickyBox.displayName = 'StyledStickyBox';

export const StickyBox: React.FC<StickyBoxProps> = props => (
  <StyledStickyBox breakpoint={props.breakpoint} padding={props.padding}>
    {props.children}
  </StyledStickyBox>
);
