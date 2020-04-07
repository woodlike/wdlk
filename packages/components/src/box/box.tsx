/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ScaleDefinition } from '.';
import * as Scale from './scale';

export interface BoxProps {
  readonly padding: ScaleDefinition;
  readonly borderWidths?: ScaleDefinition;
  readonly borderStyles?: ScaleDefinition;
  readonly bg?: string;
  readonly border?: BorderProps;
}

export interface BorderProps {
  readonly width: number | [number, number, number, number];
  readonly color: string;
}

const createStylesBorderWidth = (widths: ScaleDefinition): SxStyleProp => ({
  borderWidth: theme => Scale.toCSSPixel(Scale.create(widths, theme.borderWidths)),
});

const createStylesBorderStyle = (styles: ScaleDefinition): SxStyleProp => ({
  borderStyle: theme => Scale.toCSSPixel(Scale.create(styles, theme.borderStyles)),
});

const createStyles = (props: BoxProps): SxStyleProp => {
  const { borderStyles, borderWidths, padding } = props;
  return {
    ...(borderWidths && createStylesBorderWidth(borderWidths)),
    ...(borderStyles && createStylesBorderStyle(borderStyles)),
    ...(Boolean(props.bg) && { backgroundColor: props.bg }),
    padding: ({ space }) => Scale.toCSSPixel(Scale.create(padding, space)),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => <div sx={createStyles(props)}>{props.children}</div>;

Box.displayName = 'Box';
