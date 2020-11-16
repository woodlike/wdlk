import React from 'react';
import styled from './styled';

const StyledLayerFooter = styled.footer`
  position: sticky;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  padding: ${props => `${props.theme.space[6]}px ${props.theme.space[8]}px`};
  background-color: ${props => props.theme.colors.background};
`;

StyledLayerFooter.displayName = 'StyledLayerFooter';

export const LayerFooter: React.FC = props => (
  <StyledLayerFooter>{props.children}</StyledLayerFooter>
);
