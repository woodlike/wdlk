/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { NavLinkProps } from '.';
import { qt } from '../query';
import { withFocusStyle } from '../with-focus-style';

const styledListItem: SxStyleProp = {
  padding: `${qt('spaces')(5)}px ${qt('spaces')(5)}px ${qt('spaces')(4)}px`,
  listStyle: 'none',
}

const styledLink: SxStyleProp = {
  position: 'relative',
  display: 'inline-block',
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(2)}px`,
  letterSpacing: `${qt('letterSpacings')(0)}px`,
  textDecoration: 'none',
  color: qt('grays')(4),
  'hover:': {

  },
}

export const LinkBase: React.FunctionComponent<NavLinkProps> = (
  props
): JSX.Element => (
  <li
    sx={styledListItem}
    data-testid="navigation-link-test-id">
      {console.log()}
    <a
      sx={styledLink}
      className={props.className}
      aria-current={props.current ? 'page' : undefined}
      aria-label={props.current ? 'current page' : undefined}
      href={props.href} title={props.title}>
      {props.children}
    </a>
  </li>
);

export const NavLink = withFocusStyle<NavLinkProps>(LinkBase);
export default NavLink;
