/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { calcSize } from './utils';
import { Theme } from '..';

export interface SelectFrameProps {
  readonly ariaLabel: string;
  readonly ariaActivedescendant: string;
  readonly fontSize: number;
}

const stylesFrame: SxStyleProp = {
  display: 'grid',
  padding: 0,
  margin: 0,
};

const createStylesFrame = (fontSize: number): SxStyleProp =>
  ({
    ...stylesFrame,
    gridTemplateColumns: ({ fontSizes }: Theme) =>
      `repeat(auto-fit, ${calcSize(fontSize, fontSizes)}px)`,
    gridColumnGap: ({ fontSizes }: Theme) =>
      `${calcSize(fontSize, fontSizes) / 2.5}px`,
  } as SxStyleProp);

export const Frame: React.FC<SelectFrameProps> = props => (
  <ul
    aria-label={props.ariaLabel}
    aria-activedescendant={props.ariaActivedescendant}
    role="listbox"
    sx={createStylesFrame(props.fontSize)}
    tabIndex={0}>
    {props.children}
  </ul>
);

Frame.displayName = 'Select.Frame';
