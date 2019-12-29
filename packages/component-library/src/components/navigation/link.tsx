/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { NavLinkProps, NavLinkContext } from '.';
import { qt } from '../../query';
import { withFocusStyle } from '../with-focus-style';

const styledListItem: SxStyleProp = {
  position: 'relative',
  alignSelf: 'center',
  listStyle: 'none',
};

const handleContext = (ctx: NavLinkContext): SxStyleProp => ({
  justifySelf: ctx === 'bar' ? ['left', 'center'] : ['left'],
});

const createStyledLinkItem = (ctx: NavLinkContext): SxStyleProp => ({
  ...styledListItem,
  ...handleContext(ctx),
});

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

const createCurrentLinkStyle = (current: boolean): SxStyleProp => {
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
    ...createCurrentLinkStyle(props.current),
  };
  return (
    <li
      sx={createStyledLinkItem(props.context)}
      data-testid="navigation-link-test-id"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}>
      <a
        sx={themedNavigationLink}
        className={props.className}
        aria-current={props.current ? 'page' : undefined}
        aria-label={props.current ? 'current page' : undefined}
        href={props.href}
        title={props.title}>
          {props.text}
      </a>
        {props.children}
    </li>
  );
};

export const Link = withFocusStyle<NavLinkProps>(NavigationLinkBase);
