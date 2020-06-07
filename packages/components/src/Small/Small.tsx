/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '..';

export interface SmallProps {
  scale: number;
  family: string;
}

const createSmallStyle = (
  props: SmallProps,
): SxStyleProp & { ['-webkit-font-smoothing']: string } => ({
  color: (theme: Theme) => theme.colors.link,
  fontFamily: props.family,
  fontKerning: 'normal',
  letterSpacing: 1,
  fontSize: (theme: Theme) => {
    const { scale } = props;
    return Array.isArray(theme.fontSizes) && theme.fontSizes[scale]
      ? scale
      : '12px';
  },
  '-webkit-font-smoothing': 'antialiased',
});

export const Small: React.FC<SmallProps> = props => (
  <small sx={createSmallStyle(props)}>{props.children}</small>
);

Small.displayName = 'Small';
