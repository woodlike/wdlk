/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { NavLinkProps, NavLinkContext, NavLinkSize } from '.';
import { qt } from '../../query';
import { withFocusStyle } from '../with-focus-style';

const stylesListItem: SxStyleProp = {
  position: 'relative',
  alignSelf: 'center',
  listStyle: 'none',
};

const stylesCurrentLink: SxStyleProp = {
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

const stylesLink: SxStyleProp = {
  position: 'relative',
  display: 'inline-block',
  fontFamily: `${qt('body')}`,
  letterSpacing: `${qt('letterSpacings')(0)}px`,
  textDecoration: 'none',
  ':hover': {
    '::after': {
      transform: 'scaleX(1)',
    },
  },
};

const handleContext = (ctx: NavLinkContext): SxStyleProp => ({
  justifySelf: ctx === 'bar' ? ['left', 'center'] : ['left'],
});

const createStylesLinkItem = (ctx: NavLinkContext): SxStyleProp => ({
  ...{
    ...stylesListItem,
    ...handleContext(ctx),
  }
});

const createLinkSize = (size: NavLinkSize | undefined): SxStyleProp => {
  switch(size) {
    case 'M':
      return {fontSize: `${qt('fontSizes')(4)}px`};
    case 'L':
      return {fontSize: `${qt('fontSizes')(5)}px`};
    default:
      return {fontSize: [`${qt('fontSizes')(3)}px`, `${qt('fontSizes')(2)}px`]};
  }
};

const createStylesCurrentLink = (current: boolean, isInverted: boolean = false): SxStyleProp => ({
  ...{
    ...(isInverted ? {color: qt('whites')(2)}: {color: qt('grays')(3)}),
    '::after': {
      ...stylesCurrentLink,
      ...(current ? { transform: 'scaleX(1)' } : { transform: 'scaleX(0)' }),
    },
  },
});

export const NavigationLinkBase: React.FC<NavLinkProps> = (
  props
): JSX.Element => {
  const themedNavigationLink = {
    ...stylesLink,
    ...createLinkSize(props.size),
    ...createStylesCurrentLink(props.current, props.isInverted),
  };

  return (
    <li
      sx={createStylesLinkItem(props.context)}
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
