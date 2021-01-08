import React from 'react';
import { Theme } from '@wdlk/components';
import { css } from '@emotion/core';
import styled from './styled';

export interface PriceProps {
  readonly size: 's' | 'm' | 'l';
  readonly isStrikethrough: boolean;
}

const defaultPrice = (theme: Theme) => css`
  color: ${theme.text.color};
  text-decoration: unset;
`;

const strikethroughPrice = (theme: Theme) => css`
  color: ${theme.colors.grays[1]};
  text-decoration: line-through;
`;

const StyledPrice = styled.span<PriceProps>`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => `${props.theme.text[props.size].fontSize}px`};
  font-weight: 300;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  ${props => props.isStrikethrough ? defaultPrice(props.theme) : strikethroughPrice(props.theme)};
`;

StyledPrice.displayName = 'StyledPrice';

export const Price: React.FC<PriceProps> = props => (
  <StyledPrice isStrikethrough={props.isStrikethrough} size={props.size}>
    {props.children}
  </StyledPrice>
);
