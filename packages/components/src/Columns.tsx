import { css } from '@emotion/core';
import React from 'react';
import styled from './styled';
import { Scale, ScaleArea } from '.';

export interface ColumnsProps {
  readonly as?: HTMLRowsType;
  readonly align?: CSSAlign;
  readonly collapseBelow?: number;
  readonly justifyContent?: CSSJustify;
  readonly padding?: ScaleArea;
}

export type HTMLRowsType =
  | 'div'
  | 'section'
  | 'main'
  | 'article'
  | 'nav'
  | 'footer'
  | 'header';

export type CSSJustify =
  | 'center'
  | 'end'
  | 'start'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type CSSAlign =
  | 'center'
  | 'baseline'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start';

const StyledColumns = styled.div<ColumnsProps>`
  display: flex;
  flex-direction: row;
  ${props => {
    const { justifyContent } = props;
    return !!justifyContent ? `justify-content: ${justifyContent};` : '';
  }}

  ${props => {
    const { align } = props;
    return !!align ? `align-items: ${align};` : '';
  }}
  padding: ${props =>
    !!props.padding &&
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};
  ${props => {
    const { collapseBelow, theme } = props;
    return !!collapseBelow
      ? css`
          @media screen and (min-width: ${theme.breakpoints[collapseBelow]}) {
            flex-direction: column;
          }
        `
      : '';
  }};
`;

StyledColumns.displayName = 'StyledColumns';

export const Columns: React.FC<ColumnsProps> = props => (
  <StyledColumns
    as={props.as || 'div'}
    align={props.align}
    collapseBelow={props.collapseBelow}
    justifyContent={props.justifyContent}
    padding={props.padding}>
    {props.children}
  </StyledColumns>
);
