import React from 'react';
import styled from '@emotion/styled';

import { Theme, Scale, ScaleArea } from '.';

export interface ButtonProps {
  readonly padding?: ScaleArea;
}

interface StyledButtonProps {
  readonly padding: ScaleArea;
  readonly theme: Theme;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding, theme.space))};
  text-align: center;
  text-transform: uppercase;
`;

export const Button: React.FC<ButtonProps> = props => {
  const paddingInit = props.padding || 1;
  return <StyledButton padding={paddingInit}>{props.children}</StyledButton>;
};
