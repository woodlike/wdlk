/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { forwardRef, PropsWithChildren } from 'react';

export interface CarouselTrackProps {
  readonly length: number;
  readonly coordinate: number;
}

const stylesTrack: SxStyleProp = {
  display: 'flex',
  flexWrap: 'nowrap',
  height: 'inherit',
};

const createStylesTrack = (
  length: number,
  coordinate: number,
): SxStyleProp => ({
  ...stylesTrack,
  width: `${length * 100}%`,
  transform: `translate3d(${coordinate}%, 0, 0)`,
  transition: 'transform 300ms linear',
});

export const Track = forwardRef<
  HTMLDivElement,
  PropsWithChildren<CarouselTrackProps>
>((props, ref) => (
  <div sx={createStylesTrack(props.length, props.coordinate)} ref={ref}>
    {props.children}
  </div>
));

Track.displayName = 'CarouselTrack';
