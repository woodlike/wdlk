/**@jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface CarouselFrameProps {
  readonly iconRight: JSX.Element;
  readonly iconLeft: JSX.Element;
  readonly thumbnails: JSX.Element;
}

const stylesProp: SxStyleProp = {
  position: 'relative',
  width: '100%',
  height: 'inherit',
  maxWidth: '100%',
  margin: 0,
  overflow: 'hidden',
};

const stylesThumbnails: SxStyleProp = {
  position: 'absolute',
  display: 'grid',
  gridRowGap: ({ space }: Theme) => [0, 0, 0, 0, space[4], space[5]],
  bottom: ({ space }: Theme) => [0, 0, 0, 0, space[4], space[5]],
  left: ({ space }: Theme) => [0, 0, 0, 0, space[4], space[5]],
};

export const Frame: React.FC<CarouselFrameProps> = props => (
  <Fragment>
    <div sx={stylesProp}>{props.children}</div>
    {props.iconRight}
    {props.iconLeft}
    <div sx={stylesThumbnails}>{props.thumbnails}</div>
  </Fragment>
);

Frame.displayName = 'CarouselFrame';
