/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';

import { ScaleDefinition, SpaceDefinition, Theme } from '..';
import { useThemeQuery } from '../theme';
import * as Scale from '../theme/scale';

export interface BoxProps {
  readonly padding: ScaleDefinition;
  readonly borderWidths?: ScaleDefinition;
  readonly borderStyles?: ScaleDefinition;
  readonly borderColors?: SpaceDefinition;
}

const createStylesBorderWidth = (widths: ScaleDefinition): SxStyleProp => ({
  borderWidth: (theme: Theme) => Scale.toCSSPixel(Scale.create(widths, theme.borderWidths)),
});

const createStylesBorderStyle = (styles: ScaleDefinition): SxStyleProp => ({
  borderStyle: (theme: Theme) => Scale.toCSSPixel(Scale.create(styles, theme.borderStyles)),
});

const createStylesBorderColor = (colorNames: SpaceDefinition, qt: ThemeQuery): SxStyleProp => {
  const colors = Array.isArray(colorNames)
    ? ((colorNames.map(name => qt(`${name}`)) as unknown) as SpaceDefinition)
    : qt(`${colorNames}`);

  console.log(colors, '&&&&&&&&');
  return {
    borderColor: Scale.toCSSString(Scale.handleSpace(colors)),
  };
};

const createStyles = (props: BoxProps, qt: ThemeQuery): SxStyleProp => {
  const { borderColors, borderStyles, borderWidths, padding } = props;
  return {
    ...(borderWidths && createStylesBorderWidth(borderWidths)),
    ...(borderStyles && createStylesBorderStyle(borderStyles)),
    ...(borderColors && createStylesBorderColor(borderColors, qt)),
    padding: ({ space }) => Scale.toCSSPixel(Scale.create(padding, space)),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  return <div sx={createStyles(props, qt)}>{props.children}</div>;
};

Box.displayName = 'Box';
