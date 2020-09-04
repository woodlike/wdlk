import React, { useState, useContext, useEffect } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import { Box, Button, Theme, Text, ScaleArea, Select } from '@wdlk/components';

import { Title } from '..';
import { CartContext, CartDispatchContext, Price, useProductData } from '../..';
import { Variant } from '../../gatsby';

export interface StageContentProps {
  readonly description: string;
  readonly title: string;
  readonly variants: Variant[];
  readonly shopifyId: string;
}

interface FetchVariantsArgs {
  readonly client: ShopifyBuy.Client;
  readonly localVariantsId: string;
  readonly shopifyId: string;
}

const contestScales: ScaleArea[] = [
  [8, 8],
  [8, 7],
  [8, 4],
];

async function fetchVariants({
  client,
  localVariantsId,
  shopifyId,
}: FetchVariantsArgs) {
  try {
    const { variants } = await client.product.fetch(shopifyId);

    localStorage.setItem(localVariantsId, JSON.stringify(variants));

    return variants;
  } catch (error) {
    console.warn(`Fetch Shopify product: ${JSON.stringify(error, null, 2)}`);
    return null;
  }
}

export const Content: React.FC<StageContentProps> = props => {
  const dispatch = useContext(CartDispatchContext);
  const { client, cart } = useContext(CartContext);
  const { cartButton } = useProductData();
  const { description, title, shopifyId, variants: queryVariants } = props;
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;

  const [variants, setVariants] = useState(queryVariants);
  const [activeVariant, setActiveVariant] = useState(variants[0]);

  const localVariantsId = `variants_${title
    .toLowerCase()
    .split(' ')
    .join('_')}`;

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

  useEffect(() => {
    const localStorageVariants = localStorage.getItem(localVariantsId);

    if (!!localStorageVariants) {
      setVariants(prevVariants =>
        prevVariants.map((variant, idx) => ({
          ...variant,
          available: JSON.parse(localStorageVariants)[idx].available,
        })),
      );
    } else {
      fetchVariants({ client, localVariantsId, shopifyId }).then(variants => {
        if (variants) {
          setVariants(prevVariants =>
            prevVariants.map((variant, idx) => ({
              ...variant,
              available: variants[idx].available,
            })),
          );
        }
      });
    }
  }, []);

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
            isAvailable={!!variant.available}
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
      <Text size="l" tag="p">
        {description}
      </Text>
    </Box>
  );
};
