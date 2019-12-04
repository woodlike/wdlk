/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { MiniCartProps, MiniCartLinkProps, MiniCartItemProps } from './';
import { qt } from '../query';
import { withFocusStyle } from '../with-focus-style';

const styledMiniCart: SxStyleProp = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 0,
  listStyle: 'none',
};

const syledMiniCartLink: SxStyleProp = {
  paddingLeft: `${qt('spaces')(2)}px`,
  ':first-of-type': {
    paddingRight: `${qt('spaces')(2)}px`,
    paddingLeft: 0,
    borderRight: `solid 1px ${qt('grays')(2)}`,
  },
};

const styledCartLink: SxStyleProp = {
  fontFamily: `${qt('body')}`,
  fontSize: `${qt('fontSizes')(1)}px`,
  color: `${qt('grays')(2)}`,
  display: 'inline-block',
  textDecoration: 'none',
  transitionProperty: 'color',
  transitionDuration: `${qt('duration')(0)}s`,
  transitionTimingFunction: `${qt('timing')(0)}`,
  ':hover': {
    color: `${qt('grays')(3)}`,
  },
};

const Link: React.FunctionComponent<MiniCartLinkProps> = (
  props
): JSX.Element => (
  <a sx={styledCartLink} href={props.href} className={props.className}>
    {props.children}
  </a>
);

export const MiniCart: React.FunctionComponent<MiniCartProps> = (
  props
): JSX.Element => {
  return (
    <ul sx={styledMiniCart} data-testid="mini-cart">
      {props.children}
    </ul>
  );
};

export const MiniCartLink: React.FunctionComponent<MiniCartItemProps> = props => (
  <li sx={syledMiniCartLink}>{props.children}</li>
);

export const CartLink = withFocusStyle<MiniCartLinkProps>(Link);