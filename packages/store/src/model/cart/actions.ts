import { Dispatch } from 'react';
import { ShopifyClient, CartAction } from '.';

export interface InitCheckoutPayload {
  readonly cartId: string | null;
  readonly client: ShopifyClient;
  readonly dispatch: Dispatch<CartAction>;
}

export interface RemoveCartItemPayload {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly dispatch: Dispatch<CartAction>;
  readonly lineItemId: string;
}

export interface AddCartItemsPayload {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly lineItemsToAdd: ShopifyBuy.LineItemToAdd[];
  readonly dispatch: Dispatch<CartAction>;
}

export function initializeCheckout(payload: InitCheckoutPayload) {
  const { cartId, client, dispatch } = payload;
  try {
    if (!!cartId) {
      client.checkout.fetch(cartId).then(async cart => {
        if (cart && cart.id) {
          dispatch({
            type: 'update_cart',
            payload: cart,
          });
          return;
        }

        const newCart = await client.checkout.create();
        localStorage.setItem('shopify_checkout_id', `${newCart.id}`);
        dispatch({ type: 'update_cart', payload: newCart });
      });
    } else {
      client.checkout.create().then(cart => {
        localStorage.setItem('shopify_checkout_id', `${cart.id}`);
        dispatch({ type: 'update_cart', payload: cart });
      });
    }
  } catch (error) {
    console.warn(`CartProvider Shopify reducer (initializeCheckout): ${error}`);
    localStorage.setItem('shopify_checkout_id', '');
  }
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

export function addLineItems(payload: AddCartItemsPayload) {
  const { cartId, client, lineItemsToAdd, dispatch } = payload;
  client.checkout
    .addLineItems(cartId, lineItemsToAdd)
    .then(cart => {
      dispatch({
        type: 'update_cart',
        payload: cart,
      });
    })
    .catch(error =>
      console.warn(`CartProvider Shopify reducer (addLineItems): ${error}`),
    );
}

export function create<T>(dispatch: Dispatch<T>) {
  function dispatcher<P>(
    actionCreator: (payload: P & { readonly dispatch: Dispatch<T> }) => void,
  ) {
    return (payload: P) => {
      actionCreator({
        ...payload,
        dispatch,
      });
    };
  }

  return dispatcher;
}
