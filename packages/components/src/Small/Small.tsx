/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '..';

export interface SmallProps {
  scaleIdx: number;
}

const createSmallStyle = (props: SmallProps): SxStyleProp => ({
  fontFamily: 'inherit',
  color: (theme: Theme) => theme.colors.link,
  fontSize: (theme: Theme) => {
    const { scaleIdx } = props;
    return Array.isArray(theme.fontSizes) && theme.fontSizes[scaleIdx]
      ? theme.fontSizes[scaleIdx]
      : '12px';
  },
});

export const Small: React.FC<SmallProps> = props => (
  <small sx={createSmallStyle(props)}>{props.children}</small>
);

Small.displayName = 'Small';
