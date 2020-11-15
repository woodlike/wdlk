import React, { useContext, Dispatch } from 'react';
import { Box, Link, Text } from '@wdlk/components';
import { Link as GatsbyLink } from 'gatsby';

import {
  CartItemLayout,
  Image,
  Label,
  CartContext,
  CartDispatchContext,
} from '..';
import { Action, RemoveCartItemPayload } from '../context/cart-reducer';

export interface CartItem {
  readonly alt: string;
  readonly id: string;
  readonly src: string;
  readonly title: string;
  readonly size: string;
  readonly slug: string;
  readonly price: string;
  readonly removeLabel: string;
}

export const CartItem: React.FC<CartItem> = props => {
  const dispatch = useContext<Dispatch<Action>>(CartDispatchContext);
  const { client, cart } = useContext(CartContext);
  const removeCartPayload: RemoveCartItemPayload = {
    client,
    dispatch,
    cartId: cart.id,
    lineItemId: props.id,
  };

  return (
    <CartItemLayout>
      <GatsbyLink to={props.slug}>
        <Image alt={props.alt} fit="cover" src={props.src} />
      </GatsbyLink>
      <div>
        <Text size="m">{props.title}</Text>
        <Box padding={[2, 0]}>
          <Label size="s">{props.size}</Label>
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
          {props.removeLabel}
        </Link>
      </div>
      <Text size="m">{props.price}</Text>
    </CartItemLayout>
  );
};
