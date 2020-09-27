import React from 'react';
import { IconSize, IconColor, StyledSVGIcon } from '.';

export const Close: React.FC<{
  readonly size: IconSize;
  readonly color: IconColor;
  readonly onClick?: React.MouseEventHandler<SVGElement>;
}> = props => (
  <StyledSVGIcon
    size={props.size}
    color={props.color}
    onClick={props.onClick}
    type="utility"
    form="square"
    viewBox="0 0 24 24"
    id="close-icon">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </StyledSVGIcon>
);
