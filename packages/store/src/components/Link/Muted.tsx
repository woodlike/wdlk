/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { LinkProps } from '.';

const createStylesMuted = (props: LinkProps): SxStyleProp => ({
  fontFamily: 'heading.display',
  fontSize: props.size,
  fontWeight: 5,
  color: 'muted',
  textDecoration: 'none',
  ...(props.onClick && {
    cursor: 'pointer',
    transition: 'color 333ms linear',
    ':hover': {
      color: 'mutedHover',
    },
  }),
});

export const LinkMuted: React.FC<LinkProps> = props => {
  const Component = props.as || 'a';
  return (
    <Component
      sx={createStylesMuted(props)}
      href={props.href}
      onClick={props.onClick}>
      {props.children}
    </Component>
  );
};

LinkMuted.displayName = 'LinkMuted';
