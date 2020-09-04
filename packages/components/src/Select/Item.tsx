import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import { Theme } from '..';
import styled from '../styled';
import { calcSize } from './utils';

export interface SelectTileProps {
  readonly id: string;
  readonly fontSize: number;
  readonly isActive: boolean;
  readonly onClick: React.MouseEventHandler<HTMLLIElement>;
  readonly borderWidth?: number;
}

interface StyledSelectItemProps {
  readonly borderWidth?: number;
  readonly isActive: boolean;
  readonly fontSize: number;
}

const createStylesSize = (
  theme: Theme,
  borderWidth: number,
  isActive: boolean,
  fontSize: number,
): SerializedStyles => css`
  width: ${calcSize(fontSize, theme.fontSizes)}px;
  height: ${calcSize(fontSize, theme.fontSizes)}px;
  border-color: ${isActive ? theme.colors.borderActive : theme.colors.border};
  border-width: ${borderWidth < theme.borderWidths.length
    ? `${theme.borderWidths[borderWidth]}px`
    : `${theme.borderWidths[0]}px`};
  border-style: solid;
  line-height: ${calcSize(fontSize, theme.fontSizes)}px;
`;

const StyledItem = styled.li<StyledSelectItemProps>`
  ${({ isActive, borderWidth = 0, fontSize, theme }) =>
    createStylesSize(theme, borderWidth, isActive, fontSize)}

  list-style: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ fontSize, theme }) =>
    fontSize < theme.fontSizes.length
      ? `${theme.fontSizes[fontSize]}px`
      : `${theme.fontSizes[0]}px`};
  text-align: center;
  cursor: pointer;
`;

StyledItem.displayName = 'Select.StyledItem';

export const Item: React.FC<SelectTileProps> = props => (
  <StyledItem
    id={props.id}
    isActive={props.isActive}
    fontSize={props.fontSize}
    borderWidth={props.borderWidth}
    role="option"
    aria-selected={props.isActive}
    onClick={props.onClick}>
    {props.children}
  </StyledItem>
);

Item.displayName = 'Select.Item';
