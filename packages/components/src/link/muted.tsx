/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { LinkProps, handleLinkSize, LinkSize } from '.';
import { useThemeQuery } from '../query';

const createStylesMuted = (size: LinkSize, qt: ThemeQuery): SxStyleProp => ({
  fontFamily: qt('body'),
  fontSize: handleLinkSize(size, qt),
  fontWeight: qt('fontWeights')(5),
  color: qt('muted'),
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'color 333ms linear',
  ':hover': {
    color: qt('mutedHover'),
  },
});

export const Muted: React.FC<LinkProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const styles = createStylesMuted(props.size, qt);
  return props.as === 'a' ? (
    <props.as sx={styles} href={props.href}>
      {props.children}
    </props.as>
  ) : (
    <props.as sx={styles} onClick={props.onClick}>
      {props.children}
    </props.as>
  );
};

Muted.displayName = 'Link.Muted';
