import React, { forwardRef, PropsWithChildren } from 'react';
import styled from './styled';

export interface TrackProps {
  readonly length: number;
  readonly coordinate: number;
}

const StyledTrack = styled.div<TrackProps>`
  display: flex;
  flex-wrap: nowrap;
  height: inherit;
  width: ${props => props.length * 100}%;
  transform: translate3d(${props => props.coordinate}%, 0, 0);
  transition-duration: 0.2s;
  transition-property: transform;
  transition-timing-function: linear;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    transition-timing-function: ${props => props.theme.transition.timing[0]};
  }

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    transition-duration: ${props => props.theme.transition.duration[1]}s;
  }
`;
StyledTrack.displayName = 'StyledTrack';

export const Track = forwardRef<HTMLDivElement, PropsWithChildren<TrackProps>>(
  (props, ref) => (
    <StyledTrack coordinate={props.coordinate} length={props.length} ref={ref}>
      {props.children}
    </StyledTrack>
  ),
);

Track.displayName = 'CarouselTrack';
