/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { qt } from '../theme/query';
import { withFocusStyle } from '../with-focus-style';

export interface MiniCartLinkProps {
  href: string;
  isFocused: boolean;
  children: string;
  className?: string;
}

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

const Link: React.FC<MiniCartLinkProps> = (props): JSX.Element => (
  <a sx={styledCartLink} href={props.href} className={props.className}>
    {props.children}
  </a>
);

export const MiniCart: React.FC = (props): JSX.Element => {
  return (
    <ul sx={styledMiniCart} data-testid="mini-cart">
      {props.children}
    </ul>
  );
};

export const MiniCartLink: React.FC = props => <li sx={syledMiniCartLink}>{props.children}</li>;

export const CartLink = withFocusStyle<MiniCartLinkProps>(Link);
