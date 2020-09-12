import { css } from '@emotion/core';
import React from 'react';
import styled from './styled';

export interface RowProps {
  readonly as?: HTMLRowType;
  readonly basis?: RowFlexBasis;
}

export type RowFlexBasis =
  | 'fluid'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5';

export type HTMLRowType = 'div' | 'section' | 'aside' | 'article';

const calculateFlexBasis = (basis: RowFlexBasis): string =>
  basis
    .split('/')
    .reduce((prev: string, curr: string) => ((+prev * 100) / +curr).toString());

const StyledColumn = styled.div<RowProps>`
  box-sizing: border-box;
  ${props => {
    const { basis } = props;
    return !!basis && basis !== 'fluid'
      ? css`
          flex: 0 0 ${calculateFlexBasis(basis)}%;
        `
      : '';
  }}
`;

StyledColumn.displayName = 'StyledColumn';

export const Column: React.FC<RowProps> = props => (
  <StyledColumn as={props.as || 'div'} basis={props.basis}>
    {props.children}
  </StyledColumn>
);
