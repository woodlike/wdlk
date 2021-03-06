import React from 'react';
import { css } from '@emotion/core';

import styled from '../styled';

export interface VideoStageProps {
  readonly muted: boolean;
  readonly video: JSX.Element;
  readonly controls?: JSX.Element;
  handleClick(): void;
}

const StyledStageContainer = styled.figure`
  position: relative;
  margin: 0;
`;

StyledStageContainer.displayName = 'Video.StyledStageContainer';

const StyledStageCaption = styled.figcaption`
  position: absolute;
  right: 50%;
  bottom: 0;
  z-index: 1;
  transform: translate(50%, -10%);
  color: ${props => props.theme.video.color};

  ${props => {
    const {
      theme: { breakpoints, space },
    } = props;

    return css`
      @media (min-width: ${breakpoints[1]}) {
        right: unset;
        bottom: ${space[8]}px;
        left: ${space[7]}px;
        transform: none;
      }
    `;
  }};
`;

StyledStageCaption.displayName = 'Video.StyledStageCaption';

export const Stage: React.FC<VideoStageProps> = props => (
  <StyledStageContainer>
    {props.video}
    <StyledStageCaption>
      {props.controls}
      {props.children}
    </StyledStageCaption>
  </StyledStageContainer>
);
