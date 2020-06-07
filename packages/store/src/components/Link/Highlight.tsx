/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ChevronRight, ChevronLeft } from 'react-feather';

import { LinkProps } from '.';

export interface LinkHighlightProps extends LinkProps {
  readonly color?: 'primary' | 'muted';
}

export interface LinkIconProps {
  readonly size: number;
}

const createStylesIcon: SxStyleProp = {
  color: 'primary',
  fill: 'currentcolor',
  transition: 'fill 333ms linear',
  cursor: 'pointer',
  ':hover': {
    color: 'secondary',
    fill: 'currentcolor',
  },
};

const createStyles = (
  size: number,
  color = 'primary',
): SxStyleProp & { ['-webkit-font-smoothing']: string } => ({
  color,
  fontFamily: 'heading.display',
  fontSize: size,
  fontKerning: 'normal',
  letterSpacing: 1,
  textDecoration: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'color 500ms ease',
  '-webkit-font-smoothing': 'antialiased',
  ':hover': {
    color: (): string => (color === 'primary' ? 'secondary' : 'mutedHover'),
  },
});

export const LinkHighlight: React.FC<LinkHighlightProps> = props => {
  const Component = props.as || 'a';
  return (
    <Component
      sx={createStyles(props.size, props.color)}
      href={props.href}
      onClick={props.onClick}>
      {props.children}
    </Component>
  );
};

LinkHighlight.displayName = 'LinkHighlight';

export const IconRight: React.FC<LinkIconProps> = props => (
  <ChevronRight size={props.size} sx={createStylesIcon} />
);

IconRight.displayName = 'Link.IconRight';

export const IconLeft: React.FC<LinkIconProps> = props => (
  <ChevronLeft size={props.size} sx={createStylesIcon} />
);

IconLeft.displayName = 'Link.IconLeft';
