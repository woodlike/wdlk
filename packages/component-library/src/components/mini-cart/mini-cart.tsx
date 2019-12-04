/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { MiniCartProps, MiniCartLinkProps } from './';
import { qt } from '../query';
import { withFocusStyle } from '../with-focus-style';

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
  return <div data-testid="mini-cart">{props.children}</div>;
};

export const CartLink = withFocusStyle<MiniCartLinkProps>(Link);
