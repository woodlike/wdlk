import { Dispatch } from 'react';
import { ShopifyClient, CartAction } from '.';

export interface RemoveCartItemPayload<D = Dispatch<CartAction>> {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly dispatch: D;
  readonly lineItemId: string;
}

export function removeLineItem(payload: RemoveCartItemPayload) {
  const { cartId, client, dispatch, lineItemId } = payload;

  client.checkout
    .removeLineItems(cartId, [lineItemId])
    .then(cart => dispatch({ type: 'update_cart', payload: cart }))
    .catch(error =>
      console.warn(`CartProvider Shopify reducer (removeLineItems): ${error}`),
    );
}

export function create<T>(dispatch: Dispatch<T>) {
  function dispatcher<P>(actionCreator: (payload: P) => void) {
    return (payload: P) => {
      actionCreator({ ...payload, dispatch });
    };
  }

  return dispatcher;
}
