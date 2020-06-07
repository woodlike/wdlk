import { SxStyleProp } from 'theme-ui';
import { ThemeColor } from '@wdlk/components';

export interface IconProps {
  size: IconSize;
  color: ThemeColor;
}

export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export interface IconSizeStyle {
  width: string;
  height: string;
}

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
  color: ThemeColor,
  size: SxStyleProp,
): SxStyleProp => ({
  ...size,
  fill: color,
  transition: 'fill 500ms ease',
  ':hover': {
    fill: 'secondary',
  },
});
