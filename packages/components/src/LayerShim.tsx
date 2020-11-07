import React from 'react';
import styled from './styled';

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
    `opacity ${props.theme.transition.duration[0]}s linear  `};
`;

StyledLayerShim.displayName = 'StyledLayerShim';

export const LayerShim: React.FC<ShimProps> = props => (
  <StyledLayerShim isOpen={props.isOpen} onClick={props.onClick} />
);
