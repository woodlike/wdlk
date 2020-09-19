import { css } from '@emotion/core';
import React from 'react';
import styled from './styled';

export interface CarouselLayoutProps {
  readonly iconRight: JSX.Element;
  readonly iconLeft: JSX.Element;
  readonly thumbnails: JSX.Element;
}

export interface CarouselIconProps {
  readonly color?: string;
  readonly onClick?: React.MouseEventHandler<SVGElement>;
}

const StyledCarouselLayout = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  max-width: 100%;
  margin: 0;
  overflow: hidden;
`;
StyledCarouselLayout.displayName = 'StyledCarouselLayout';

const StyledThumbnailsSlot = styled.div`
  position: absolute;
  bottom: ${props => props.theme.space[1]}px;
  left: ${props => props.theme.space[1]}px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    left: ${props => props.theme.space[2]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    bottom: ${props => props.theme.space[2]}px;
    left: ${props => props.theme.space[3]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    display: grid;
    bottom: ${props => props.theme.space[4]}px;
    left: ${props => props.theme.space[4]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[4]}) {
    grid-row-gap: ${props => props.theme.space[1]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[5]}) {
    grid-row-gap: ${props => props.theme.space[4]}px;
  }
`;

StyledThumbnailsSlot.displayName = 'StyledThumbnailsSlot';

const baseIconStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  margin: auto;
  cursor: pointer;
  transform: translateY(50%);
`;

const StyledIconLeftSlot = styled.div`
  ${baseIconStyles};
  left: ${props => props.theme.space[1]}px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    left: ${props => props.theme.space[2]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    left: ${props => props.theme.space[3]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    left: ${props => props.theme.space[4]}px;
  }
`;
StyledIconLeftSlot.displayName = 'StyledIconLeftSlot';

const StyledIconRightSlot = styled.div`
  ${baseIconStyles};
  right: ${props => props.theme.space[1]}px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    right: ${props => props.theme.space[2]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    right: ${props => props.theme.space[3]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    right: ${props => props.theme.space[4]}px;
  }
`;

StyledIconRightSlot.displayName = 'StyledIconRightSlot';

export const CarouselLayout: React.FC<CarouselLayoutProps> = props => (
  <>
    <StyledCarouselLayout>{props.children}</StyledCarouselLayout>
    <StyledThumbnailsSlot>{props.thumbnails}</StyledThumbnailsSlot>
    <StyledIconRightSlot>{props.iconRight}</StyledIconRightSlot>
    <StyledIconLeftSlot>{props.iconLeft}</StyledIconLeftSlot>
  </>
);
