import React from 'react';
import { IconSize, IconColor, StyledSVGIcon } from '.';

export const Facebook: React.FC<{
  readonly color: IconColor;
  readonly size: IconSize;
}> = props => (
  <StyledSVGIcon
    color={props.color}
    size={props.size}
    type="highlight"
    form="square"
    viewBox="0 0 20 20"
    id="facebook">
    <title>Woodlike Facebook Icon</title>
    <path d="M6.74,10.88H9.8l0.46-3.56H6.74V5.05C6.74,4,7,3.32,8.5,3.32h1.88V0.14A25.2,25.2,0,0,0,7.64,0C4.93,0,3.07,1.66,3.07,4.7V7.32H0v3.56H3.07V20H6.74V10.88Z" />
  </StyledSVGIcon>
);
