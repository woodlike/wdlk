/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { SpaceBox, SpaceTuple, SpaceMargin, SpacePadding, StyleException } from '.';
import { createSpaceBox } from '.';
import { HTMLSectionType } from '../layout';

export interface BoxProps {
  readonly tag: HTMLSectionType;
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

const createStylesPadding = (space: SpacePadding): SxStyleProp | StyleException => {
  if (isEmpty(space)) {
    return '';
  }
  const [top, right, bottom, left] = createSpaceBox(space);
  return {
    padding: `${top}px ${right}px ${bottom}px ${left}px`,
  };
};

const createStylesMargin = (space: SpaceMargin): SxStyleProp | StyleException => {
  if (isEmpty(space)) {
    return '';
  }
  const [top, right, bottom, left] = createSpaceBox(space);
  return {
    margin: `${top}px ${right}px ${bottom}px ${left}px`,
  };
};

const createStylesBg = (color: string): SxStyleProp => ({ backgroundColor: color });

const createStyles = (props: BoxProps): SxStyleProp => {
  const padding = createStylesPadding(
    JSON.parse(
      JSON.stringify({
        p: props.p,
        px: props.px,
        py: props.py,
      }),
    ),
  );
  const margin = createStylesMargin(
    JSON.parse(
      JSON.stringify({
        m: props.m,
        mx: props.mx,
        my: props.my,
      }),
    ),
  );

  return {
    ...(typeof padding === 'object' && padding),
    ...(typeof margin === 'object' && margin),
    ...(props.bg && createStylesBg(props.bg)),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const styles = createStyles(props);
  return <props.tag sx={styles}>{props.children}</props.tag>;
};

Box.displayName = 'Box';
