/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { headerScales } from '../utils';
import { withFocusStyle } from '../with-focus-style';
import { qt } from '../theme/query';

export interface NavLinkProps {
  readonly current: boolean;
  readonly context: NavLinkContext;
  readonly href: string;
  readonly text: string;
  readonly isFocused: boolean;
  readonly isInverted?: boolean;
  readonly isActive?: boolean;
  readonly children?: false | React.ReactNode;
  readonly title?: string;
  readonly size?: NavLinkSize;
  readonly className?: string;
  readonly onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  readonly onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export type NavLinkContext = 'bar' | 'panel';
export type NavLinkSize = 'S' | 'M' | 'L';

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
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: headerScales,
    width: '100%',
  },
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
  },
});

const createLinkSize = (size: NavLinkSize | undefined): SxStyleProp => {
  switch (size) {
    case 'S':
      return {
        marginBottom: 0,
        fontSize: `${qt('fontSizes')(0)}px`,
      };
    case 'M':
      return {
        marginBottom: `${qt('spaces')(1)}px`,
        fontSize: `${qt('fontSizes')(4)}px`,
        textTransform: 'uppercase',
      };
    case 'L':
      return {
        marginBottom: `${qt('spaces')(1)}px`,
        fontSize: `${qt('fontSizes')(5)}px`,
        textTransform: 'uppercase',
      };
    default:
      return {
        fontSize: [`${qt('fontSizes')(3)}px`, `${qt('fontSizes')(2)}px`],
      };
  }
};

const createStylesCurrentLink = (current: boolean, isActive = false, isInverted = false): SxStyleProp => ({
  ...{
    ...(isInverted
      ? {
          marginBottom: `${qt('spaces')(1)}px`,
          color: qt('whites')(0),
        }
      : { color: qt('grays')(3) }),
    '::after': {
      ...stylesCurrentLink,
      ...(isActive || current ? { transform: 'scaleX(1)' } : { transform: 'scaleX(0)' }),
    },
  },
});

const createStylesLink = (props: NavLinkProps): SxStyleProp => ({
  ...stylesLink,
  ...createLinkSize(props.size),
  ...createStylesCurrentLink(props.current, props.isActive, props.isInverted),
});

export const NavigationLinkBase: React.FC<NavLinkProps> = (props): JSX.Element => (
  <li sx={createStylesLinkItem(props.context)} data-testid="navigation-link-test-id">
    <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      <a
        sx={createStylesLink(props)}
        className={props.className}
        aria-current={props.current ? 'page' : undefined}
        aria-label={props.current ? 'current page' : undefined}
        href={props.href}
        title={props.title}>
        {props.text}
      </a>
      {props.children}
    </div>
  </li>
);

export const Link = withFocusStyle<NavLinkProps>(NavigationLinkBase);
