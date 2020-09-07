import React from 'react';
import styled from './styled';

export interface CartProps {
  readonly href: string;
  readonly isFocused: boolean;
  readonly isFilled: boolean;
  readonly title: string;
  readonly count: number | undefined;
}

interface StyledCartProps {
  readonly isFilled: boolean;
}

const StyledBagLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
`;

StyledBagLink.displayName = 'StyledBagLink';

const StyledCart = styled.svg<StyledCartProps>`
  width: 34px;
  height 32px;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 2px;
  transition-property: color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timing};
  fill-opacity: ${props => (props.isFilled ? 1 : 0)};

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

StyledCart.displayName = 'StyledCart';

const StyledBagLabel = styled.text`
  font-family: ${({ theme }) => theme.fonts.heading.display};
  color: ${({ theme }) => theme.colors.background};
  letter-spacing: ${({ theme }) => theme.letterSpacings[2]}px;
  stroke-width: 0;
  transform: translate(38%, 85%);
`;

StyledBagLabel.displayName = 'StyledBagLabel';

export const Cart: React.FC<CartProps> = (props): JSX.Element => {
  return (
    <StyledBagLink href={props.href}>
      <StyledCart
        isFilled={props.isFilled}
        viewBox="0 0 34 34"
        data-testid="cart-link-test-id"
        aria-labelledby="cart-title-label-id">
        <title id="cart-title-label-id">{props.title}</title>
        <desc>The shopping bag currently contains {props.count} items</desc>
        <path d="M1.9 12.8h30l-2.2 15.1c-.4 2.7-3 4.9-5.7 4.9H9.8c-2.8 0-5.3-2.2-5.7-4.9L1.9 12.8z" />
        <path
          fillOpacity="0"
          d="M12.2 5.3c.4-2.2 2.5-3.9 4.7-3.9s4.3 1.8 4.7 3.9l1.3 7.3h-12l1.3-7.3z"
        />
        <StyledBagLabel>{props.count}</StyledBagLabel>
      </StyledCart>
    </StyledBagLink>
  );
};
