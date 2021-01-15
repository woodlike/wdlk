import React from 'react';
import styled from './styled';

export interface CartItemLayoutProps {
  readonly priceSlot: JSX.Element;
}

const StyledCartItemLayout = styled.li`
  display: grid;
  grid-template-columns: 30% 50% auto;
  justify-content: space-between;
  grid-column-gap: ${props => props.theme.space[3]}px;
`;

StyledCartItemLayout.displayName = 'StyledCartItemLayout';

const StyledPriceSlot = styled.div`
  text-align: right;
`;
StyledPriceSlot.displayName = 'StyledPriceSlot';

export const CartItemLayout: React.FC<CartItemLayoutProps> = props => (
  <StyledCartItemLayout>
    {props.children}
    <StyledPriceSlot>{props.priceSlot}</StyledPriceSlot>
  </StyledCartItemLayout>
);
