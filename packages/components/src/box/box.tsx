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
import { HTMLSectionType } from '../layout';

export interface BoxProps {
  readonly as: HTMLSectionType;
  readonly p?: SpaceBox | number;
  readonly px?: SpaceTuple | number;
  readonly py?: SpaceTuple | number;
  readonly m?: SpaceBox | number;
  readonly mx?: SpaceTuple | number;
  readonly my?: SpaceTuple | number;
  readonly bg?: string;
}

const isEmpty = (space: SpacePadding & SpaceMargin): boolean => {
  for (const prop in space) {
    if (space.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

const createStylesBg = (color: string): SxStyleProp => ({ backgroundColor: color });

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
    ...(props.bg && createStylesBg(props.bg)),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const { theme } = useThemeUI();
  return <props.as sx={createStyles(props, theme)}>{props.children}</props.as>;
};

Box.displayName = 'Box';
