import React, { useState, useContext, useEffect, Dispatch } from 'react';
import { useTheme } from 'emotion-theming';
import { useMedia } from '@wdlk/hooks';
import {
  Box,
  Button,
  Columns,
  Heading,
  Legend,
  Link,
  ScaleArea,
  Select,
  Small,
  Stack,
  Text,
} from '@wdlk/components';

import {
  CartContext,
  CartDispatchContext,
  contestScales,
  findString,
  Price,
  PriceLayout,
  Title,
  useProductData,
} from '../..';
import { Variant } from '../../gatsby';
import { Action } from '../../model';

export interface StageContentProps {
  readonly description: string;
  readonly shopifyId: string;
  readonly tags: string[];
  readonly title: string;
  readonly variants: Variant[];
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly slug: string;
}

interface FetchVariantsArgs {
  readonly client: ShopifyBuy.Client;
  readonly localVariantsId: string;
  readonly shopifyId: string;
}

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
  const dispatch = useContext<Dispatch<Action>>(CartDispatchContext);
  const { client, cart } = useContext(CartContext);
  const {
    cartButton,
    description: contentDescription,
    preOrder,
    sizes,
    taxLabel,
  } = useProductData();
  const {
    description,
    shopifyId,
    tags,
    title,
    slug,
    variants: queryVariants,
  } = props;
  const { breakpoints } = useTheme();

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
    lineItemsToAdd: [
      {
        variantId: activeVariant.shopifyId,
        quantity: 1,
        customAttributes: [{ key: 'slug', value: slug }],
      },
    ],
    slug,
    dispatch,
  };

  const isPreOrder = findString(tags, 'pre-order');

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
    <>
      <Box padding={scales}>
        <Stack as="div" space={7}>
          <Box as="header" padding={0}>
            <Box padding={[0, 0, 2, 0]}>
              {isPreOrder && (
                <Legend size="m" as="strong">
                  {preOrder.label}
                </Legend>
              )}
            </Box>
            <Box padding={[0, 0, 4, 0]}>
              <Title>{title}</Title>
            </Box>
            <PriceLayout
              label={
                <Small size="s" color="muted">
                  {taxLabel}
                </Small>
              }
              sale={
                activeVariant.compareAtLocalePrice && (
                  <Price type="secondary">
                    {activeVariant.compareAtLocalePrice.amount}
                  </Price>
                )
              }>
              <Price type="primary">{activeVariant.priceLocale.amount}</Price>
            </PriceLayout>
          </Box>

          <Stack as="div" space={4}>
            <Columns justifyContent="space-between">
              <Legend size="xs" as="strong">
                {sizes.label}
              </Legend>
              <Link
                as="span"
                color="secondary"
                onClick={() => props.setIsOpen(!props.isOpen)}
                size="s">
                {sizes.link}
              </Link>
            </Columns>

            <Select.Frame
              ariaLabel={sizes.ariaLabel}
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
            <Box padding={[6, 0, 3, 0]}>
              <Button
                onClick={() =>
                  dispatch({
                    type: 'add_cart_items',
                    payload: addCartItemsPayload,
                  })
                }
                padding={[3, 4]}>
                {cartButton}
              </Button>
            </Box>
          </Stack>

          <Stack as="figure" space={3}>
            <Legend size="xs" as="figcaption">
              {contentDescription.label}
            </Legend>
            {isPreOrder && (
              <>
                <Heading as="h3" size="s" type="secondary">
                  {preOrder.title}
                </Heading>
              </>
            )}
            <Text size="m">{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
