/**@jsx jsx */
import { ChevronLeft, ChevronRight } from 'react-feather';
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface CarouselIconProps {
  readonly color?: string;
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
  right: ({ space }: Theme) => [space[1], space[2], space[3], space[4]],
};

const stylesIconLeft: SxStyleProp = {
  ...stylesIcons,
  left: ({ space }: Theme) => [space[1], space[2], space[3], space[4]],
};

export const IconRight: React.FC<CarouselIconProps> = props => (
  <ChevronRight
    sx={stylesIconRight}
    color={props.color}
    onClick={props.onClick}
    pointerEvents="visible"
    size={25}
  />
);
IconRight.displayName = 'CarouselIconRight';

export const IconLeft: React.FC<CarouselIconProps> = props => (
  <ChevronLeft
    sx={stylesIconLeft}
    color={props.color}
    onClick={props.onClick}
    pointerEvents="visible"
    size={25}
  />
);
IconLeft.displayName = 'CarouselIconLeft';
