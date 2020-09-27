import React from 'react';
import { Scale, ScaleArea } from '.';
import styled from './styled';

export interface LayerProps {
  readonly isOpen: boolean;
  readonly padding: ScaleArea;
  readonly onClickShim?: React.MouseEventHandler<HTMLDivElement>;
}

export interface ShimProps {
  readonly isOpen: boolean;
  readonly onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const StyledLayerShim = styled.div<ShimProps>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  margin: auto;
  opacity: ${props => (props.isOpen ? 0.8 : 0)};
  background-color: ${props => props.theme.layer.shimColor};
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  cursor: ${props => !!props.onClick && 'pointer'};
  transition: ${props =>
    `opacity ${props.theme.transition.duration[0]}s linear`};
`;
StyledLayerShim.displayName = 'StyledLayerShim';

const StyledLayer = styled.section<LayerProps>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;

  padding: ${props =>
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};
  margin: auto;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  overflow: scroll;
  background-color: ${props => props.theme.colors.background};
  transform: ${props =>
    props.isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)'};
  transition: ${props =>
    `transform ${props.theme.transition.duration[0]}s  ${props.theme.transition.timing[0]}, opacity ${props.theme.transition.duration[0]}s linear`};

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    top: ${props => props.theme.layer.top}px;
    width: 80vw;
    height: calc(100vh - ${props => props.theme.layer.top}px);
    max-width: ${props => props.theme.layer.maxWidth};
  }
`;
StyledLayer.displayName = 'StyledLayer';

export const Layer: React.FC<LayerProps> = props => (
  <>
    <StyledLayer isOpen={props.isOpen} padding={props.padding}>
      {props.children}
    </StyledLayer>
    <StyledLayerShim onClick={props.onClickShim} isOpen={props.isOpen} />
  </>
);
