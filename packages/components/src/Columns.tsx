import { css } from '@emotion/core';
import React from 'react';
import styled from './styled';

export interface RowsProps {
  as?: HTMLRowsType;
  collapseBelow?: number;
  justifyContent?: CSSJustify;
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

const StyledColumns = styled.div<RowsProps>`
  display: flex;
  flex-direction: row;
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
  ${props => {
    const { justifyContent } = props;
    return !!justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : '';
  }}
`;

StyledColumns.displayName = 'StyledColumns';

export const Columns: React.FC<RowsProps> = props => (
  <StyledColumns
    as={props.as || 'div'}
    collapseBelow={props.collapseBelow}
    justifyContent={props.justifyContent}>
    {props.children}
  </StyledColumns>
);
