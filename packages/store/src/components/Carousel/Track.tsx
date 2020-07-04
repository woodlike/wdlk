/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface CarouselTrackProps {
  readonly length: number;
  readonly coordinate: number;
}

const stylesTrack: SxStyleProp = {
  display: 'flex',
  flexWrap: 'nowrap',
};

const createStylesTrack = (
  length: number,
  coordinate: number,
): SxStyleProp => ({
  ...stylesTrack,
  width: `${length * 100}%`,
  transform: `translate3d(${coordinate}%, 0, 0)`,
  // transition: ({ transition }: Theme) =>
  //   `transform ${transition.duration[1]}s linear`,
});

export const Track: React.FC<CarouselTrackProps> = props => (
  <div sx={createStylesTrack(props.length, props.coordinate)}>
    {props.children}
  </div>
);

Track.displayName = 'CarouselTrack';
