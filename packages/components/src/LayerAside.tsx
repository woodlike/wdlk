import React from 'react';
import { css, SerializedStyles } from '@emotion/core';
import styled from './styled';
import { ScaleArea, Scale } from '.';

export interface LayerAsideProps {
  readonly isOpen: boolean;
  readonly padding: ScaleArea;
  readonly position?: 'left' | 'right';
}

const getLayerPosition = (
  position: 'left' | 'right' = 'right',
): SerializedStyles => css`
  ${position}: 0;
`;

const getX = (
  isOpen: boolean,
  position: 'left' | 'right' = 'right',
): string => {
  if (isOpen) {
    return '0';
  }
  return position === 'right' ? '100%' : '-100%';
};

const StyledLayerAside = styled.aside<LayerAsideProps>`
  ${props => getLayerPosition(props.position)};
  position: fixed;
  top: ${props => props.theme.layerAside.top}px;
  z-index: 3;
  box-sizing: border-box;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.layerAside.top}px);
  padding: ${props =>
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background};
  transform: translate3d(${props => getX(props.isOpen, props.position)}, 0, 0);
  transition: ${props =>
    `transform ${props.theme.transition.duration[0]}s  ${props.theme.transition.timing[0]}, opacity ${props.theme.transition.duration[0]}s linear`};

  @media (min-width: ${props => props.theme.layerAside.breakpoint}) {
    top: 0;
    width: 40vw;
    height: 100vh;
    max-width: ${props => props.theme.layerAside.maxWidth};
  }
`;

StyledLayerAside.displayName = 'StyledLayerAside';

export const LayerAside: React.FC<LayerAsideProps> = props => (
  <StyledLayerAside
    position={props.position}
    isOpen={props.isOpen}
    padding={props.padding}>
    {props.children}
  </StyledLayerAside>
);
