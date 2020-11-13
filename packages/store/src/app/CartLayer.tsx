import React, { Dispatch, SetStateAction, useContext } from 'react';
import {
  LayerAside,
  LayerShim,
  Columns,
  Heading,
  Text,
} from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';

import { Icon, IconSize, Summary, Label, CartContext } from '..';
import { SummaryItem } from '../components';

export interface CartLayer {
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartLayer: React.FC<CartLayer> = props => {
  const { graphCmsCart } = useStaticQuery(graphql`
    query CartQuery {
      graphCmsCart {
        title
        vatValueLabel
        totalLabel
        shippingLabel
        itemsLabel
        subtotalLabel
        shippingPrecalculated
      }
    }
  `);
  const { cart } = useContext(CartContext);
  const { breakpoints } = useTheme();
  const isLargeViewPort = useMedia(
    [`(min-width: ${breakpoints[2]})`, `(min-width: ${breakpoints[1]})`],
    [true, false],
    false,
  );
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <LayerAside padding={[6, isLargeViewPort ? 8 : 0]} isOpen={isOpen}>
        <Columns
          align="center"
          justifyContent="space-between"
          padding={isLargeViewPort ? [0, 0, 4, 0] : [0, 4, 4, 4]}>
          <Heading type="secondary" size="xs">
            {graphCmsCart.title}
          </Heading>
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            name="close"
            size={IconSize.xs}
            color="secondary"
          />
        </Columns>
        {cart ? (
          <Summary>
            <SummaryItem>
              <Label size="s">
                {cart.lineItems.length} {graphCmsCart.itemsLabel}
              </Label>
            </SummaryItem>
            <SummaryItem justify="end">
              {cart.subtotalPriceV2 && (
                <Label size="s">
                  {cart.subtotalPriceV2.amount}{' '}
                  {cart.subtotalPriceV2.currencyCode}
                </Label>
              )}
            </SummaryItem>
            <SummaryItem>
              <Label size="s">{graphCmsCart.shippingLabel}</Label>
            </SummaryItem>
            <SummaryItem justify="end">
              <Label size="s">{graphCmsCart.shippingPrecalculated}</Label>
            </SummaryItem>
            <SummaryItem>
              <Text as="div" size="s">
                {graphCmsCart.totalLabel.toUpperCase()}
              </Text>
              <Label size="s">{graphCmsCart.vatValueLabel}</Label>
            </SummaryItem>
            <SummaryItem justify="end">
              {cart.subtotalPriceV2 && (
                <Heading type="secondary" size="m">
                  {cart.subtotalPriceV2.amount}{' '}
                  {cart.subtotalPriceV2.currencyCode}
                </Heading>
              )}
            </SummaryItem>
          </Summary>
        ) : null}
      </LayerAside>
      {isLargeViewPort && (
        <LayerShim isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
