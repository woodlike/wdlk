/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { ThemeQuery } from 'theme-query';
import { LinkProps, handleLinkSize } from '.';
import { useThemeQuery } from '../theme/query';

const createStylesMuted = (props: LinkProps, qt: ThemeQuery): SxStyleProp => ({
  fontFamily: 'body',
  fontSize: handleLinkSize(props.size, qt),
  fontWeight: 5,
  color: 'muted',
  textDecoration: 'none',
  ...(props.onClick && {
    cursor: 'pointer',
    transition: 'color 333ms linear',
    ':hover': {
      color: qt('mutedHover'),
    },
  }),
});

export const Muted: React.FC<LinkProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  const styles = createStylesMuted(props, qt);
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
