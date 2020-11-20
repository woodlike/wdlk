import React, { useContext, Dispatch } from 'react';
import { Box, Link, Text } from '@wdlk/components';
import { Link as GatsbyLink } from 'gatsby';

import { GraphCMSCart } from '.';
import { CartItemLayout, Image, Label } from '../components';
import {
  Action,
  LineItemProps,
  CartContext,
  CartDispatchContext,
  RemoveCartItemPayload,
} from '../model';

export interface CartItemProps {
  readonly altText: string;
  readonly lineItem: LineItemProps;
  readonly cmsCart: GraphCMSCart;
}

export const CartItem: React.FC<CartItemProps> = props => {
  const dispatch = useContext<Dispatch<Action>>(CartDispatchContext);
  const { client, cart } = useContext(CartContext);
  const removeCartPayload: RemoveCartItemPayload = {
    client,
    dispatch,
    cartId: cart.id,
    lineItemId: props.lineItem.id as string,
  };

  return (
    <CartItemLayout>
      <GatsbyLink to={props.lineItem.customAttributes[0].value}>
        <Image
          alt={props.altText}
          fit="cover"
          src={props.lineItem.variant.image.src}
        />
      </GatsbyLink>
      <div>
        <Text size="m">{props.lineItem.title}</Text>
        <Box padding={[2, 0]}>
          <Label size="s">
            {props.cmsCart.sizeLabel}: {props.lineItem.variant.title}
          </Label>
        </Box>
        <Link
          as="span"
          color="secondary"
          size="s"
          onClick={() =>
            dispatch({
              type: 'remove_cart_item',
              payload: removeCartPayload,
            })
          }>
          {props.cmsCart.removeLabel}
        </Link>
      </div>
      <Text size="m">
        {props.lineItem.variant.priceV2.amount}{' '}
        {props.lineItem.variant.priceV2.currencyCode}
      </Text>
    </CartItemLayout>
  );
};
