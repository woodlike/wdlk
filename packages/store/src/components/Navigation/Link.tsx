/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';
import { getHeaderHeight } from './utils';

export interface NavigationLinkProps {
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
  height: ({ borderWidths }: Theme) => borderWidths[0],
  width: '100%',
  backgroundColor: 'currentColor',
  transform: 'scaleX(0)',
  transformOrigin: '0 0',
  transitionProperty: 'transform',
  transitionDuration: ({ transition }: Theme) => `${transition.duration[0]}s`,
  transitionTimingFunction: ({ transition }: Theme) => transition.timing[0],
};

const stylesLink: SxStyleProp = {
  position: 'relative',
  display: 'inline-block',
  fontFamily: 'body',
  letterSpacing: ({ letterSpacings }: Theme) => letterSpacings[0],
  textDecoration: 'none',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: ({ header }: Theme) => getHeaderHeight(header),
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
        paddingBottom: 0,
        fontSize: `12px`,
      };
    case 'M':
      return {
        paddingBottom: `3px`,
        fontSize: `14px`,
        textTransform: 'uppercase',
      };
    case 'L':
      return {
        paddingBottom: `3px`,
        fontSize: `24px`,
        textTransform: 'uppercase',
      };
    default:
      return {
        fontSize: [`14px`, `14px`],
      };
  }
};

const createStylesCurrentLink = (
  current: boolean,
  isActive = false,
  isInverted = false,
): SxStyleProp => ({
  ...{
    ...(isInverted
      ? {
          marginBottom: 1,
          color: 'background',
        }
      : { color: 'link' }),
    '::after': {
      ...stylesCurrentLink,
      ...(isActive || current
        ? { transform: 'scaleX(1)' }
        : { transform: 'scaleX(0)' }),
    },
  },
});

const createStylesLink = (props: NavigationLinkProps): SxStyleProp => ({
  ...stylesLink,
  ...createLinkSize(props.size),
  ...createStylesCurrentLink(props.current, props.isActive, props.isInverted),
});

export const Link: React.FC<NavigationLinkProps> = props => (
  <li sx={createStylesLinkItem(props.context)}>
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
