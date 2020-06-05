/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { ScaleArea, Theme } from '..';
import { Color, Scale } from '../theme';

export interface BoxProps {
  readonly padding: ScaleArea;
  readonly as?: BoxHTMLElement;
  readonly borderWidths?: ScaleArea;
  readonly borderStyles?: ScaleArea;
  readonly borderColors?: BorderColorProps;
  readonly backgroundColor?: string | BorderColorScale;
  readonly className?: string;
}
export interface BorderColorScale {
  color: string;
  idx: number;
}
export type BoxHTMLElement =
  | 'div'
  | 'span'
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'aside';
export type BorderColorProps =
  | (string | BorderColorScale)
  | (string | BorderColorScale)[];

const createStylesBorderWidth = (widths: ScaleArea): SxStyleProp => ({
  borderWidth: (theme: Theme) =>
    Scale.toCSSPixel(Scale.create(widths, theme.borderWidths)),
});

const createStylesBorderStyle = (styles: ScaleArea): SxStyleProp => ({
  borderStyle: (theme: Theme) =>
    Scale.toCSSPixel(Scale.create(styles, theme.borderStyles)),
});

const createStylesBorderColor = (
  borderColors: BorderColorProps,
): SxStyleProp => ({
  borderColor: (theme: Theme) => {
    if (Array.isArray(borderColors)) {
      const colors = borderColors.map(color => {
        return typeof color === 'object'
          ? Color.query(color.color, theme.colors, color.idx)
          : Color.query(color, theme.colors);
      }) as string[];

      return Scale.createBox(colors).join(' ');
    }

    return typeof borderColors === 'object'
      ? Color.query(borderColors.color, theme.colors, borderColors.idx)
      : Color.query(borderColors, theme.colors);
  },
});

const createStylesBgColor = (
  color: string | BorderColorScale,
): SxStyleProp => ({
  backgroundColor: (theme: Theme) =>
    typeof color === 'object'
      ? Color.query(color.color, theme.colors, color.idx)
      : Color.query(color, theme.colors),
});

const createStyles = (props: BoxProps): SxStyleProp => {
  const {
    backgroundColor,
    borderColors,
    borderStyles,
    borderWidths,
    padding,
  } = props;
  return {
    ...(borderWidths && createStylesBorderWidth(borderWidths)),
    ...(borderStyles && createStylesBorderStyle(borderStyles)),
    ...(borderColors && createStylesBorderColor(borderColors)),
    ...(backgroundColor && createStylesBgColor(backgroundColor)),
    padding: ({ space }) => Scale.toCSSPixel(Scale.create(padding, space)),
  };
};

export const Box: React.FC<BoxProps> = props => {
  const Component = props.as || 'div';

  return (
    <Component sx={createStyles(props)} className={props.className}>
      {props.children}
    </Component>
  );
};

Box.displayName = 'Box';
