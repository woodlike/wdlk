import * as React from 'react';
import { Volume2, VolumeX } from 'react-feather';
import { qt } from '../..';

import { ControlProps } from './';

export const Controls: React.FC<ControlProps> = (props): JSX.Element =>
  props.muted ? (
    <VolumeX onClick={props.onClick} color="currentColor" size={`${qt('spaces')(5)}`} />
  ) : (
    <Volume2 onClick={props.onClick} color="currentColor" size={`${qt('spaces')(5)}`} />
  );

  Controls.displayName = 'Control';
