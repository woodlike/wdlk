import { SxStyleProp } from 'theme-ui';

export interface IconProps {
  size: IconSize;
}

export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
}

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

export const createSVGIconStyle = (size: IconSize): SxStyleProp => ({
  height: `${getSquaredIconSize(size)}px`,
  width: `${getSquaredIconSize(size)}px`,
});

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

export const createSVGRectIconStyle = (size: IconSize): SxStyleProp => ({
  height: `${getRectIconSize(size) / 2}px`,
  width: `${getRectIconSize(size)}px`,
});
