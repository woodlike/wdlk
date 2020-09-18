import React from 'react';
import { css } from '@emotion/core';
import { Theme } from '@wdlk/components';
import styled from './styled';

export interface ProductLayoutProps {
  readonly image: JSX.Element;
  readonly content: JSX.Element;
}

const StyledStage = styled.section`
  display: block;
  ${props => {
    const {
      theme: { breakpoints },
    } = props;
    return `@media (min-width: ${breakpoints[3]}) {
      display: flex;
    }`;
  }};
`;

StyledStage.displayName = 'StyledStage';

const createBaseStylesSlot = (theme: Theme) => css`
  box-sizing: border-box;
  width: 100%;
  min-height: ${theme.header.height}px;
  @media (min-width: ${theme.breakpoints[3]}) {
    width: 50%;
  }
`;

const StyledSlot = styled.div`
  ${props => createBaseStylesSlot(props.theme)};
`;
StyledSlot.displayName = 'StyledSlot';

const StyledImageSlot = styled.div`
  position: relative;
  top: 0;
  ${props => createBaseStylesSlot(props.theme)};
  height: calc(100vh - ${props => props.theme.header.height}px);

  ${props => {
    const {
      theme: { breakpoints, header },
    } = props;
    return `@media (min-width: ${breakpoints[3]}) {
    position: sticky;
    top: ${header.height}px;
  }`;
  }};
`;

export const ProductLayout: React.FC<ProductLayoutProps> = props => {
  return (
    <StyledStage>
      <StyledImageSlot>{props.image}</StyledImageSlot>
      <StyledSlot>{props.content}</StyledSlot>
    </StyledStage>
  );
};
