import React from 'react';
import { Heading, Text } from '@wdlk/components';

import { Label, Summary, SummaryItem } from '../components';
import { ShopifyCartProps } from '../model';

export interface CartSummaryProps {
  readonly cart: ShopifyCartProps;
  readonly cmsCart: GraphCMSCart;
}

export interface GraphCMSCart {
  readonly checkoutLabel: string;
  readonly itemsLabel: string;
  readonly shippingLabel: string;
  readonly totalLabel: string;
  readonly shippingPrecalculated: string;
  readonly vatValueLabel: string;
  readonly sizeLabel: string;
  readonly removeLabel: string;
}

export const CartSummary: React.FC<CartSummaryProps> = props => (
  <Summary>
    <SummaryItem>
      <Label size="s">
        {props.cart.lineItems.length} {props.cmsCart.itemsLabel}
      </Label>
    </SummaryItem>
    <SummaryItem justify="end">
      {props.cart.subtotalPriceV2 && (
        <Label size="s">
          {props.cart.subtotalPriceV2.amount}{' '}
          {props.cart.subtotalPriceV2.currencyCode}
        </Label>
      )}
    </SummaryItem>
    <SummaryItem>
      <Label size="s">{props.cmsCart.shippingLabel}</Label>
    </SummaryItem>
    <SummaryItem justify="end">
      <Label size="s">{props.cmsCart.shippingPrecalculated}</Label>
    </SummaryItem>
    <SummaryItem>
      <Text as="div" size="s">
        {props.cmsCart.totalLabel.toUpperCase()}
      </Text>
      <Label size="s">{props.cmsCart.vatValueLabel}</Label>
    </SummaryItem>
    <SummaryItem justify="end">
      {props.cart.subtotalPriceV2 && (
        <Heading type="secondary" size="m">
          {props.cart.subtotalPriceV2.amount}{' '}
          {props.cart.subtotalPriceV2.currencyCode}
        </Heading>
      )}
    </SummaryItem>
  </Summary>
);
