import React, { Dispatch, SetStateAction, useContext } from 'react';
import {
  LayerAside,
  LayerShim,
  Columns,
  Heading,
  Text,
  Stack,
  Box,
} from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';

import { CartItem } from '.';
import { Icon, IconSize, Summary, Label, CartContext, SummaryItem } from '..';

export interface CartLayer {
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export type CartItemProps = {
  readonly customAttributes: ShopifyBuy.CustomAttribute[];
  readonly variant: {
    readonly image: {
      readonly altText?: string | null;
      readonly src: string;
    };
    readonly priceV2: {
      readonly amount: string;
      readonly currencyCode: string;
    };
    readonly title: string;
  };
} & ShopifyBuy.LineItem;

export const CartLayer: React.FC<CartLayer> = props => {
  const { graphCmsCart } = useStaticQuery(graphql`
    query CartQuery {
      graphCmsCart {
        emptyCartMessage
        itemsLabel
        title
        removeLabel
        shippingLabel
        subtotalLabel
        shippingPrecalculated
        totalLabel
        vatValueLabel
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
          <Heading as="h2" type="secondary" size="xs">
            {graphCmsCart.title}
          </Heading>
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            name="close"
            size={IconSize.xs}
            color="secondary"
          />
        </Columns>

        {!!cart.lineItems.length ? (
          <>
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
            <Box padding={[5, isLargeViewPort ? 0 : 4]}>
              <Stack as="ul" space={4}>
                {cart.lineItems.map((item: CartItemProps) => (
                  <CartItem
                    alt={item.variant.image.altText ?? item.title}
                    id={item.id as string}
                    title={item.title}
                    key={`cart-item-${item.id}`}
                    price={`${item.variant.priceV2.amount} ${item.variant.priceV2.currencyCode}`}
                    removeLabel={graphCmsCart.removeLabel}
                    src={item.variant.image.src}
                    size={item.variant.title}
                    slug={item.customAttributes[0].value}
                  />
                ))}
              </Stack>
            </Box>
          </>
        ) : (
          <Heading as="h3" type="secondary" size="m">
            {graphCmsCart.emptyCartMessage}
          </Heading>
        )}
      </LayerAside>
      {isLargeViewPort && (
        <LayerShim isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
