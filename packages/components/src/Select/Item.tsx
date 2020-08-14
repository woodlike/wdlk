/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { calcSize } from './utils';
import { Theme } from '..';

export interface SelectTileProps {
  readonly id: string;
  readonly fontSize: number;
  readonly isActive: boolean;
  readonly onClick: React.MouseEventHandler<HTMLLIElement>;
  readonly borderWidth?: number;
}

const stylesTile: SxStyleProp = {
  listStyle: 'none',
  cursor: 'pointer',
  textAlign: 'center',
  fontFamily: 'body',
};

const createStylesBorder = (
  isActive: boolean,
  borderWidth: number,
): SxStyleProp => ({
  borderStyle: 'solid',
  borderColor: ({ colors }: Theme) =>
    isActive ? colors.borderActive : colors.border,
  borderWidth: ({ borderWidths }: Theme) =>
    borderWidth < borderWidths.length
      ? `${borderWidths[borderWidth]}px`
      : `${borderWidths[0]}px`,
});

const createStylesSize = (fontSize: number): SxStyleProp => ({
  width: ({ fontSizes }: Theme) => calcSize(fontSize, fontSizes),
  height: ({ fontSizes }: Theme) => calcSize(fontSize, fontSizes),
  fontSize: ({ fontSizes }: Theme) =>
    fontSize < fontSizes.length ? fontSizes[fontSize] : fontSizes[0],
  lineHeight: ({ fontSizes }: Theme) => `${calcSize(fontSize, fontSizes)}px`,
});

const createStylesTile = (
  isActive: boolean,
  fontSize: number,
  borderWidth = 0,
): SxStyleProp => ({
  ...stylesTile,
  ...createStylesBorder(isActive, borderWidth),
  ...createStylesSize(fontSize),
});

export const Item: React.FC<SelectTileProps> = props => (
  <li
    id={props.id}
    role="option"
    aria-selected={props.isActive}
    onClick={props.onClick}
    sx={createStylesTile(props.isActive, props.fontSize, props.borderWidth)}>
    {props.children}
  </li>
);

Item.displayName = 'Select.Item';
