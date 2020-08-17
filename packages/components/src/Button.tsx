import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { Theme, Scale, ScaleArea } from '.';
import { getVariant } from './theme';

export interface ButtonProps {
  readonly onclick: React.MouseEventHandler<HTMLButtonElement>;
  readonly padding?: ScaleArea;
  readonly variant?: ButtonVariant;
}

interface StyledButtonProps {
  readonly theme: Theme;
  readonly padding?: ScaleArea;
  readonly variant?: ButtonVariant;
}

type ButtonVariant = 'primary' | 'secondary';

const pseudoElementStyles = css`
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  width: 100%;
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding || 1, theme.space))};
  border: none;
  letter-spacing: 1px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  background: transparent;
  ${({ variant, theme }) => {
    const result = getVariant(theme, 'buttons', variant || 'primary');
    return result
      ? css`
          color: ${result.color};
          ::before {
            background-color: ${result.bg};
          }
          ::after {
            background-color: ${result.bg};
          }
        `
      : css``;
  }};

  ::before {
    ${pseudoElementStyles}
  }

  ::after {
    ${pseudoElementStyles}
    filter: contrast(0.7);
    pointer-events: none;
    transform: translate3d(0, 100%, 0);
    transition: transform 100ms linear;
  }

  :hover {
    &::after {
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
    }
  }
`;

StyledButton.displayName = 'StyledButton';

export const Button: React.FC<ButtonProps> = props => (
  <StyledButton padding={props.padding} variant={props.variant}>
    {props.children}
  </StyledButton>
);
