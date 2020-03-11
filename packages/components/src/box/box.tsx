/**@jsx jsx */
import { jsx, useThemeUI, SxStyleProp, Theme } from 'theme-ui';
import {
  getThemeScale,
  CSSSpaceProperty,
  SpaceBox,
  SpaceDeclaration,
  SpaceMargin,
  SpacePadding,
  SpaceTuple,
  StyleException,
} from '.';
import { createSpaceBox } from '.';

export interface BoxProps {
  readonly as: HTMLBoxType;
  readonly p?: SpaceBox | number;
  readonly px?: SpaceTuple | number;
  readonly py?: SpaceTuple | number;
  readonly m?: SpaceBox | number;
  readonly mx?: SpaceTuple | number;
  readonly my?: SpaceTuple | number;
  readonly bg?: string;
  readonly border?: BorderProps;
}

export interface BorderProps {
  readonly width: number | [number, number, number, number];
  readonly color: string;
}

export type HTMLBoxType = 'aside' | 'section' | 'article' | 'nav' | 'div' | 'ul' | 'li';

const createStylesBorder = (width: number | [number, number, number, number], color: string): SxStyleProp => ({
  borderWidth: Array.isArray(width) ? `${width[0]}px ${width[1]}px ${width[2]}px ${width[3]}px` : `${width}px`,
  borderColor: color,
  borderStyle: 'solid',
});

const isEmpty = (space: SpacePadding | SpaceMargin): boolean => {
  for (const prop in space) {
    if (space.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

const createStylesSpace = (
  space: SpaceDeclaration,
  name: CSSSpaceProperty,
  theme: Theme,
): SxStyleProp | StyleException => {
  if (isEmpty(space)) {
    return '';
  }

  const [top, right, bottom, left] = createSpaceBox(theme ? getThemeScale(space, theme) : space);
  return {
    [name]: `${top}px ${right}px ${bottom}px ${left}px`,
  };
};

const createStyles = (props: BoxProps, theme: Theme): SxStyleProp => {
  const padding = createStylesSpace(
    JSON.parse(
      JSON.stringify({
        p: props.p,
        px: props.px,
        py: props.py,
      }),
    ),
    'padding',
    theme,
  );
  const margin = createStylesSpace(
    JSON.parse(
      JSON.stringify({
        m: props.m,
        mx: props.mx,
        my: props.my,
      }),
    ),
    'margin',
    theme,
  );

  return {
    ...(typeof padding === 'object' && padding),
    ...(typeof margin === 'object' && margin),
    ...(props.border && createStylesBorder(props.border.width, props.border.color)),
    ...(Boolean(props.bg) && { backgroundColor: props.bg }),
    ...(props.as === 'ul' && { listStyle: 'none' }),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const { theme } = useThemeUI();
  return <props.as sx={createStyles(props, theme)}>{props.children}</props.as>;
};

Box.displayName = 'Box';
