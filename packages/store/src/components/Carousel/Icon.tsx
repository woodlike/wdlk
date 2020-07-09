/**@jsx jsx */
import { ChevronLeft, ChevronRight } from 'react-feather';
import { jsx, SxStyleProp } from 'theme-ui';

export interface CarouselIconProps {
  readonly onClick?: React.MouseEventHandler<SVGElement>;
}

const stylesIcons: SxStyleProp = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto',
  cursor: 'pointer',
};

const stylesIconRight: SxStyleProp = {
  ...stylesIcons,
  right: 0,
};

const stylesIconLeft: SxStyleProp = {
  ...stylesIcons,
  left: 0,
};

export const IconRight: React.FC<CarouselIconProps> = props => (
  <ChevronRight
    sx={stylesIconRight}
    onClick={props.onClick}
    size={30}
    pointerEvents="visible"
  />
);
IconRight.displayName = 'CarouselIconRight';

export const IconLeft: React.FC<CarouselIconProps> = props => (
  <ChevronLeft
    sx={stylesIconLeft}
    onClick={props.onClick}
    size={30}
    pointerEvents="visible"
  />
);
IconLeft.displayName = 'CarouselIconLeft';
