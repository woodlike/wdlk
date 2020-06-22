/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Facebook, Instagram, OnePercent } from '.';

export interface IconProps {
  readonly size: IconSize;
  readonly color: IconColor;
  readonly name: IconName;
}

export interface IconSizeStyle {
  readonly width: string;
  readonly height: string;
}

export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type IconName = 'facebook' | 'instagram' | 'onepercent';

export type IconColor = 'primary' | 'secondary';

export const getRectIconSize = (size: IconSize): number => {
  switch (size) {
    case IconSize.s:
      return 70;
    case IconSize.m:
      return 90;
    case IconSize.l:
      return 120;
  }
};

export const getSquaredIconSize = (size: IconSize): number => {
  switch (size) {
    case IconSize.s:
      return 20;
    case IconSize.m:
      return 35;
    case IconSize.l:
      return 50;
  }
};

export const createIconSizeStyles = (
  size: IconSize,
  form = 'squared',
): SxStyleProp => {
  return form === 'squared'
    ? {
        width: getSquaredIconSize(size),
        height: getSquaredIconSize(size),
      }
    : {
        width: getRectIconSize(size),
        height: getRectIconSize(size) / 2,
      };
};

export const createStyles = (
  color: IconColor,
  size: SxStyleProp,
): SxStyleProp => ({
  ...size,
  fill: color,
  transition: 'fill 500ms ease',
  ':hover': {
    fill: 'secondary',
  },
});

export const Icon: React.FC<IconProps> = props => {
  switch (props.name) {
    case 'facebook':
      return <Facebook size={props.size} color={props.color} />;
    case 'instagram':
      return <Instagram size={props.size} color={props.color} />;
    case 'onepercent':
      return <OnePercent size={props.size} color={props.color} />;
  }
};
