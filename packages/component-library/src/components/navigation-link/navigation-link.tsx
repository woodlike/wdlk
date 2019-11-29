/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { NavLinkProps } from '.';
import { qt } from '../query';
import { withFocusStyle } from '../with-focus-style';

const styledListItem: SxStyleProp = {
  alignSelf: 'center',
  justifySelf: ['left', 'center'],
  listStyle: 'none',
};

const isCurrentLink = (current: boolean): SxStyleProp =>
  current ? { transform: 'scaleX(1)' } : { transform: 'scaleX(0)' };

const styledCurrentLink: SxStyleProp = {
  content: '""',
  display: 'block',
  height: `${qt('borderWidths')(0)}px`,
  width: '100%',
  backgroundColor: 'currentColor',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
  transitionProperty: 'transform',
  transitionDuration: `${qt('duration')(0)}s`,
  transitionTimingFunction: `${qt('timing')(0)}`,
};

const generateCurrentLinkStyle = (current: boolean): SxStyleProp => {
  return {
    '::after': {
      ...styledCurrentLink,
      ...isCurrentLink(current),
    },
  };
};

const styledLink: SxStyleProp = {
  position: 'relative',
  display: 'inline-block',
  fontFamily: `${qt('body')}`,
  fontSize: [`${qt('fontSizes')(3)}px`, `${qt('fontSizes')(2)}px`],
  letterSpacing: `${qt('letterSpacings')(0)}px`,
  textDecoration: 'none',
  color: qt('grays')(3),
  ':hover': {
    '::after': {
      transform: 'scaleX(1)',
    },
  },
};

export const NavigationLinkBase: React.FunctionComponent<NavLinkProps> = (
  props
): JSX.Element => {
  const themedNavigationLink = {
    ...styledLink,
    ...generateCurrentLinkStyle(props.current),
  };
  return (
    <li sx={styledListItem} data-testid="navigation-link-test-id">
      <a
        sx={themedNavigationLink}
        className={props.className}
        aria-current={props.current ? 'page' : undefined}
        aria-label={props.current ? 'current page' : undefined}
        href={props.href}
        title={props.title}>
        {props.children}
      </a>
    </li>
  );
};

export const NavLink = withFocusStyle<NavLinkProps>(NavigationLinkBase);
export default NavLink;
