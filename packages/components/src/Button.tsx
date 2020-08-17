import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { Theme, Scale, ScaleArea } from '.';
import { getVariant } from './theme';

export interface ButtonProps {
  readonly padding?: ScaleArea;
  readonly variant?: ButtonVariant;
}

interface StyledButtonProps {
  readonly theme: Theme;
  readonly padding?: ScaleArea;
  readonly variant?: ButtonVariant;
}

type ButtonVariant = 'primary' | 'secondary';

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding || 1, theme.space))};
  text-align: center;
  text-transform: uppercase;

  ${({ variant, theme }) => {
    const result = getVariant(theme, 'buttons', variant || 'primary');
    return result
      ? css`
          color: ${result.color};
          background-color: ${result.bg};
        `
      : css``;
  }}
`;

StyledButton.displayName = 'StyledButton';

export const Button: React.FC<ButtonProps> = props => (
  <StyledButton padding={props.padding} variant={props.variant}>
    {props.children}
  </StyledButton>
);
