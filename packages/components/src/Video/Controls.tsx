import React from 'react';
import { keyframes } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Volume2, VolumeX } from 'react-feather';

import { Theme } from '..';
import styled from '../styled';

export interface ControlProps {
  readonly size: number;
  readonly muted: boolean;
  readonly onClick: React.MouseEventHandler<SVGElement>;
}

const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.25);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledControlMuted = styled(VolumeX)`
  cursor: pointer;
  animation: ${heartbeat} 1.8s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: color ${props => props.theme.transition.duration[0]}s linear;
  :hover {
    color: ${props => props.theme.video.controls.color};
    animation-play-state: paused;
  }
`;

StyledControlMuted.displayName = 'Video.StyledControlMuted';

const StyledControlLoud = styled(Volume2)`
  cursor: pointer;
  transition: color ${props => props.theme.transition.duration[0]}s linear;
  :hover {
    color: ${props => props.theme.video.controls.color};
  }
`;

StyledControlLoud.displayName = 'Video.StyledControlLoud';

export const Controls: React.FC<ControlProps> = props => {
  const { space }: Theme = useTheme();
  const size = !!space[props.size] ? space[props.size] : 10;

  return props.muted ? (
    <StyledControlMuted onClick={props.onClick} size={size} />
  ) : (
    <StyledControlLoud onClick={props.onClick} size={size} />
  );
};
