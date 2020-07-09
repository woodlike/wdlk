/**@jsx jsx */
import { Fragment } from 'react';
import { jsx, SxStyleProp } from 'theme-ui';

export interface CarouselFrameProps {
  readonly iconRight: JSX.Element;
  readonly iconLeft: JSX.Element;
}

const stylesProp: SxStyleProp = {
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  overflow: 'hidden',
};

export const Frame: React.FC<CarouselFrameProps> = props => (
  <Fragment>
    <div sx={stylesProp}>{props.children}</div>
    {props.iconRight}
    {props.iconLeft}
  </Fragment>
);

Frame.displayName = 'CarouselFrame';
