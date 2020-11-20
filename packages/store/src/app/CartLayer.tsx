import React, { Dispatch, SetStateAction, useContext } from 'react';
import {
  LayerAside,
  LayerShim,
  Columns,
  Heading,
  Stack,
  Box,
  Button,
} from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import { useStaticQuery, graphql } from 'gatsby';

import { CartItem, CartSummary } from '.';
import { Icon, IconSize, LayerFooter } from '../components';
import { CartContext, LineItemProps } from '../model';

export interface CartLayer {
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartLayer: React.FC<CartLayer> = props => {
  const { cart } = useContext(CartContext);
  const { breakpoints } = useTheme();
  const isLargeViewPort = useMedia(
    [`(min-width: ${breakpoints[2]})`, `(min-width: ${breakpoints[1]})`],
    [true, false],
    false,
  );
  const { isOpen, setIsOpen } = props;
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
        sizeLabel
        checkoutLabel
      }
    }
  `);

  return (
    <>
      <LayerAside padding={[6, isLargeViewPort ? 8 : 0, 0]} isOpen={isOpen}>
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
            <CartSummary cart={cart} cmsCart={graphCmsCart} />
            <Box padding={[5, isLargeViewPort ? 0 : 4]}>
              <Stack as="ul" space={4}>
                {cart.lineItems.map((item: LineItemProps) => (
                  <CartItem
                    altText={item.variant.image.altText ?? item.title}
                    cmsCart={graphCmsCart}
                    lineItem={item}
                    key={`cart-item-${item.id}`}
                  />
                ))}
              </Stack>
            </Box>
            <LayerFooter>
              <Button
                onClick={() => window && window.open(cart.webUrl)}
                padding={[3, 4]}>
                {graphCmsCart.checkoutLabel}
              </Button>
            </LayerFooter>
          </>
        ) : (
          <Box padding={isLargeViewPort ? [2, 0] : [0, 4]}>
            <Heading as="h3" type="secondary" size="m">
              {graphCmsCart.emptyCartMessage}
            </Heading>
          </Box>
        )}
      </LayerAside>
      {isLargeViewPort && (
        <LayerShim isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
