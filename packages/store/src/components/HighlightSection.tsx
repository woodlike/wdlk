import { css } from '@emotion/core';
import { RowFlexBasis, Scale, ScaleArea } from '@wdlk/components';
import React from 'react';
import styled from './styled';

export interface HighlightSectionProps {
  readonly direction: 'left' | 'right';
  readonly basis?: RowFlexBasis;
  readonly padding?: ScaleArea;
}

const pointerSize = 28;

const calculateFlexBasis = (basis: RowFlexBasis): string =>
  basis
    .split('/')
    .reduce((prev: string, curr: string) => ((+prev * 100) / +curr).toString());

const pointerStyles = css`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${pointerSize}px;
  height: ${pointerSize}px;
  margin: auto;
  transform: rotate(45deg);
`;

const StyledHighlightSection = styled.section<HighlightSectionProps>`
  position: relative;
  box-sizing: border-box;
  ${props => {
    const { basis } = props;
    return !!basis && basis !== 'fluid'
      ? css`
          flex: 0 0 ${calculateFlexBasis(basis)}%;
        `
      : '';
  }};
  padding: ${props =>
    !!props.padding &&
    Scale.toCSSPixel(Scale.create(props.padding, props.theme.space))};

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    ::before {
      ${pointerStyles};
      background-color: ${props => props.theme.colors.whites[0]};
      ${props => {
        return props.direction === 'left'
          ? css`
              left: -${pointerSize / 2}px;
            `
          : css`
              right: -${pointerSize / 2}px;
            `;
      }}
    }
  }
`;

StyledHighlightSection.displayName = 'StyledHighlightSection';

export const HighlightSection: React.FC<HighlightSectionProps> = props => (
  <StyledHighlightSection
    basis={props.basis}
    direction={props.direction}
    padding={props.padding}>
    {props.children}
  </StyledHighlightSection>
);
