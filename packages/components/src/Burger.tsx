import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export interface BurgerProps {
  readonly isActive: boolean;
  readonly onClick: React.MouseEventHandler<HTMLDivElement>;
}

export interface StyledBurgerProps {
  readonly isActive: boolean;
}

const HEIGHT = 28;
const WIDTH = 35;

const StyledBurger = styled.div`
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  cursor: pointer;
`;

StyledBurger.displayName = 'StyledBurger';

const stylesLine = css`
  position: absolute;
  top: 50%;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: black;
  transform-origin: center;
  transition: transform 250ms ease-in-out;
`;

const StyledTopLine = styled.span<StyledBurgerProps>`
  ${stylesLine}
  transform: ${({ isActive }) =>
    isActive
      ? css`translate3d(0, -50%, 0) rotate(45deg)`
      : css`translate3d(0, ${Math.round(
          (HEIGHT / 3) * -1,
        )}px, 0) rotate(0deg)`};
`;

StyledTopLine.displayName = 'StyledTopLine';

const StyledMidLine = styled.span<StyledBurgerProps>`
  ${stylesLine}
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
`;

StyledMidLine.displayName = 'StyledMidLine';

const StyledBottomLine = styled.span<StyledBurgerProps>`
  ${stylesLine}
  transform: ${({ isActive }) =>
    isActive
      ? css`translate3d(0, -50%, 0) rotate(-45deg)`
      : css`translate3d(0, ${Math.round(HEIGHT / 3)}px, 0) rotate(0deg)`};
`;

StyledBottomLine.displayName = 'StyledBottomLine';

export const Burger: React.FC<BurgerProps> = props => (
  <StyledBurger onClick={props.onClick}>
    <StyledTopLine isActive={props.isActive} />
    <StyledMidLine isActive={props.isActive} />
    <StyledBottomLine isActive={props.isActive} />
  </StyledBurger>
);
