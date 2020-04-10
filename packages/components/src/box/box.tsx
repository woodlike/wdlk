/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { ScaleArea, Theme } from '..';
import { Color, Scale } from '../theme';

export interface BoxProps {
  readonly padding: ScaleArea;
  readonly borderWidths?: ScaleArea;
  readonly borderStyles?: ScaleArea;
  readonly borderColors?: string | string[] | { color: string; idx: number };
}

export type BorderColorArea = string | string[] | BorderColorScale;
export type BorderColorScale = { color: string; idx: number };

const createStylesBorderWidth = (widths: ScaleArea): SxStyleProp => ({
  borderWidth: (theme: Theme) => Scale.toCSSPixel(Scale.create(widths, theme.borderWidths)),
});

const createStylesBorderStyle = (styles: ScaleArea): SxStyleProp => ({
  borderStyle: (theme: Theme) => Scale.toCSSPixel(Scale.create(styles, theme.borderStyles)),
});

const createStylesBorderColor = (borderColors: string | string[] | { color: string; idx: number }): SxStyleProp => {
  return {
    borderColor: (theme: Theme) => {
      if (Array.isArray(borderColors)) {
        const colors = borderColors.map(color => Color.query(color, theme.colors)) as string | string[];
        return Scale.createBox(colors).join(' ');
      }
      if (typeof borderColors === 'object') {
        const border = borderColors as BorderColorScale;
        return Color.query(border.color, theme.colors, border.idx);
      }
      return Color.query(borderColors, theme.colors);
    },
  };
};

const createStyles = (props: BoxProps): SxStyleProp => {
  const { borderColors, borderStyles, borderWidths, padding } = props;
  return {
    ...(borderWidths && createStylesBorderWidth(borderWidths)),
    ...(borderStyles && createStylesBorderStyle(borderStyles)),
    ...(borderColors && createStylesBorderColor(borderColors)),
    padding: ({ space }) => Scale.toCSSPixel(Scale.create(padding, space)),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => <div sx={createStyles(props)}>{props.children}</div>;

Box.displayName = 'Box';
