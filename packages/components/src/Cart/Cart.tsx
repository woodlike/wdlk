/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../theme/query';
import { withFocusStyle } from '../with-focus-style';

export interface CartProps {
  href: string;
  isFocused: boolean;
  isFilled: boolean;
  title: string;
  count: number | undefined;
  className?: string;
}

const styledCartLink: SxStyleProp = {
  display: 'inline-block',
  color: `${qt('corals')(0)}`,
};

const styledCartSVG: SxStyleProp = {
  width: 34,
  height: 32,
  fill: 'currentColor',
  stroke: 'currentColor',
  strokeWidth: 2,
  fontFamily: `${qt('display')}`,
  fontSize: `${qt('fontSizes')(2)}px`,
  transitionProperty: 'color',
  transitionDuration: `${qt('duration')(1)}s`,
  transitionTimingFunction: `${qt('timing')(0)}`,
  ':hover': {
    color: `${qt('corals')(1)}`,
  },
};

const styledCounter: SxStyleProp = {
  color: `${qt('whites')(0)}`,
  letterSpacing: `${qt('letterSpacings')(2)}px`,
  strokeWidth: 0,
  transform: 'translate(38%, 85%)',
};

const styledFilled = (isFilled: boolean): SxStyleProp => (isFilled ? { fillOpacity: 1 } : { fillOpacity: 0 });

const createStyledSVGStyle = (isFilled: boolean): SxStyleProp => {
  return {
    ...styledCartSVG,
    ...styledFilled(isFilled),
  };
};

const CartIcon: React.FunctionComponent<CartProps> = (props): JSX.Element => {
  return (
    <a sx={styledCartLink} href={props.href} className={props.className}>
      <svg
        sx={createStyledSVGStyle(props.isFilled)}
        viewBox="0 0 34 34"
        data-testid="cart-link-test-id"
        aria-labelledby="cart-title-label-id">
        <title id="cart-title-label-id">{props.title}</title>
        <desc>The cart currently contains {props.count} items</desc>
        <path d="M1.9 12.8h30l-2.2 15.1c-.4 2.7-3 4.9-5.7 4.9H9.8c-2.8 0-5.3-2.2-5.7-4.9L1.9 12.8z" />
        <path fillOpacity="0" d="M12.2 5.3c.4-2.2 2.5-3.9 4.7-3.9s4.3 1.8 4.7 3.9l1.3 7.3h-12l1.3-7.3z" />
        <text sx={styledCounter}>{props.count}</text>
      </svg>
    </a>
  );
};

export const Cart = withFocusStyle<CartProps>(CartIcon);
