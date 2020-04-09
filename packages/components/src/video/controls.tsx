/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Volume2, VolumeX } from 'react-feather';
import { qt } from '../theme/query';

export interface ControlProps {
  muted: boolean;
  onClick: React.MouseEventHandler<SVGElement>;
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

const stylesMuted: SxStyleProp = {
  cursor: 'pointer',
  animation: `${heartbeat} 1.8s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955)`,
  transition: `color ${qt('duration')(0)}s linear`,
  ':hover': {
    color: qt('corals')(0),
    animationPlayState: 'paused',
  },
};

const stylesLoud: SxStyleProp = {
  cursor: 'pointer',
  transition: `color ${qt('duration')(0)}s linear`,
  ':hover': {
    color: qt('corals')(0),
  },
};

export const Controls: React.FC<ControlProps> = (props): JSX.Element =>
  props.muted ? (
    <VolumeX sx={stylesMuted} onClick={props.onClick} color="currentColor" size={`${qt('spaces')(5)}`} />
  ) : (
    <Volume2 sx={stylesLoud} onClick={props.onClick} color="currentColor" size={`${qt('spaces')(5)}`} />
  );

Controls.displayName = 'VideoControls';
