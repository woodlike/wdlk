/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface MiniCartLinkProps {
  readonly href: string;
  readonly isFocused: boolean;
  readonly children: string;
  readonly className?: string;
}

const styledMiniCart: SxStyleProp = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 0,
  listStyle: 'none',
};

const syledMiniCartLink: SxStyleProp = {
  paddingLeft: 2,
  ':first-of-type': {
    paddingRight: 2,
    paddingLeft: 0,
    borderRight: ({ colors }: Theme) => `solid 1px ${colors.grays[2]}`,
  },
};

const styledCartLink: SxStyleProp = {
  fontFamily: 'fonts.body',
  fontSize: 1,
  color: ({ colors }: Theme) => colors.grays[2],
  display: 'inline-block',
  textDecoration: 'none',
  transition: ({ transition }: Theme) =>
    `color ${transition.duration[0]}s ${transition.timing[0]}`,
  ':hover': {
    color: ({ colors }: Theme) => colors.grays[2],
  },
};

export const Link: React.FC<MiniCartLinkProps> = props => (
  <a sx={styledCartLink} href={props.href} className={props.className}>
    {props.children}
  </a>
);

export const CartDisplay: React.FC = props => {
  return (
    <ul sx={styledMiniCart} data-testid="mini-cart">
      {props.children}
    </ul>
  );
};

export const CartDisplayItem: React.FC = props => (
  <li sx={syledMiniCartLink}>{props.children}</li>
);
