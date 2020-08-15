/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import {
  Theme,
  Scale,
  ScaleArea,
  BorderColorScale,
  Color,
  ThemeColor,
  GenericThemeColor,
} from '.';

export interface ButtonProps {
  readonly color: string | BorderColorScale;
  readonly backgroundColor: string | BorderColorScale;
  readonly padding?: ScaleArea;
}

const stylesButton: SxStyleProp = {
  textAlign: 'center',
  textTransform: 'uppercase',
};

const createStylesPadding = (padding: ScaleArea = 1): SxStyleProp => ({
  padding: ({ space }: Theme) => Scale.toCSSPixel(Scale.create(padding, space)),
});

const createColor = (
  color: string | BorderColorScale,
  colors: ThemeColor & GenericThemeColor,
): string | string[] =>
  typeof color === 'object'
    ? Color.query(color.color, colors, color.idx)
    : Color.query(color, colors);

const createStylesButton = (props: ButtonProps): SxStyleProp => ({
  ...stylesButton,
  ...createStylesPadding(props.padding),
  color: ({ colors }: Theme) => createColor(props.color, colors),
  backgroundColor: ({ colors }: Theme) =>
    createColor(props.backgroundColor, colors),
});

export const Button: React.FC<ButtonProps> = props => (
  <button sx={createStylesButton(props)}>{props.children}</button>
);
