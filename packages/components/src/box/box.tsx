/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { SpaceDefinition } from '.';
import * as Space from './space';

export interface BoxProps {
  readonly padding: SpaceDefinition;
  readonly bg?: string;
  readonly border?: BorderProps;
}

export interface BorderProps {
  readonly width: number | [number, number, number, number];
  readonly color: string;
}

const createStylesBorder = (width: number | [number, number, number, number], color: string): SxStyleProp => ({
  borderWidth: Array.isArray(width) ? `${width[0]}px ${width[1]}px ${width[2]}px ${width[3]}px` : `${width}px`,
  borderColor: color,
  borderStyle: 'solid',
});

const createStylesSpace = (padding: SpaceDefinition): SxStyleProp => ({
  padding: theme => Space.toCSSPixel(Space.create(padding, theme.space)),
});

const createStyles = (props: BoxProps): SxStyleProp => {
  const { padding } = props;
  return {
    ...createStylesSpace(padding),
    ...(props.border && createStylesBorder(props.border.width, props.border.color)),
    ...(Boolean(props.bg) && { backgroundColor: props.bg }),
  };
};

export const Box: React.FC<BoxProps> = (props): JSX.Element => <div sx={createStyles(props)}>{props.children}</div>;

Box.displayName = 'Box';
