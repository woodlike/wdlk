import React, { useState, useContext } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import { Box, Button, Theme, ScaleArea, Select } from '@wdlk/components';

import { Title } from '..';
import { CartContext, CartDispatchContext, Price, useProductData } from '../..';
import { Variant } from '../../gatsby';

export interface StageContentProps {
  readonly variants: Variant[];
  readonly title: string;
}

const contestScales: ScaleArea[] = [
  [8, 8],
  [8, 7],
  [8, 4],
];

export const Content: React.FC<StageContentProps> = props => {
  const dispatch = useContext(CartDispatchContext);
  const { client, cart } = useContext(CartContext);
  const { cartButton } = useProductData();
  const { variants, title } = props;
  const [activeVariant, setActiveVariant] = useState(variants[0]);
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;

  const scales = useMedia<ScaleArea>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
    ],
    contestScales,
    contestScales[contestScales.length - 1],
  );

  const addCartItemsPayload = {
    cartId: cart.id,
    client,
    lineItemsToAdd: [{ variantId: activeVariant.shopifyId, quantity: 1 }],
    dispatch,
  };

  return (
    <Box padding={scales}>
      <Title>{title}</Title>
      <Price.Layout
        //TODO: Make this value translatable
        label={<Price.Label>(VAT included)</Price.Label>}
        sale={
          !!activeVariant.compareAtLocalePrice && (
            <Price.Sale>{activeVariant.compareAtLocalePrice.amount}</Price.Sale>
          )
        }>
        <Price.Total>{activeVariant.priceLocale.amount}</Price.Total>
      </Price.Layout>
      <Select.Frame
        ariaLabel="size-variant-select"
        ariaActivedescendant={activeVariant.shopifyId}
        fontSize={2}>
        {variants.map(variant => (
          <Select.Item
            id={variant.shopifyId}
            key={variant.shopifyId}
            isActive={activeVariant.title === variant.title}
            fontSize={2}
            onClick={() => setActiveVariant(variant)}>
            {variant.title}
          </Select.Item>
        ))}
      </Select.Frame>
      <Button
        onClick={() =>
          dispatch({ type: 'add_cart_items', payload: addCartItemsPayload })
        }
        padding={[3, 4]}>
        {cartButton}
      </Button>
    </Box>
  );
};
