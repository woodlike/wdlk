/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '..';

export interface SmallProps {
  readonly scale: number;
  readonly family: string;
  readonly color?: string;
  readonly className?: string;
}

const createSmallStyle = (
  props: SmallProps,
): SxStyleProp & { ['-webkit-font-smoothing']: string } => ({
  color: props.color ?? 'primary',
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
  <small sx={createSmallStyle(props)} className={props.className}>
    {props.children}
  </small>
);

Small.displayName = 'Small';
