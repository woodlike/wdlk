import { Dispatch } from 'react';

import { Cart, CartState, ShopifyClient, subTotalLens, formatPrice } from '.';
import { RemoveCartItemPayload, InitCheckoutPayload } from './actions';
import { ActionType } from '..';

export type CartAction =
  | ActionType<'initialize_checkout', InitCheckoutPayload>
  | ActionType<'update_cart', Cart>
  | ActionType<'add_cart_items', AddCartItemsPayload>
  | ActionType<'remove_cart_item', RemoveCartItemPayload>;

export interface AddCartItemsPayload {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly lineItemsToAdd: ShopifyBuy.LineItemToAdd[];
  readonly dispatch: Dispatch<CartAction>;
}

export function addLineItems(payload: AddCartItemsPayload) {
  const { cartId, client, lineItemsToAdd, dispatch } = payload;
  client.checkout
    .addLineItems(cartId, lineItemsToAdd)
    .then(prevCart => {
      dispatch({
        type: 'update_cart',
        payload: formatPrice(subTotalLens, prevCart),
      });
    })
    .catch(error =>
      console.warn(`CartProvider Shopify reducer (addLineItems): ${error}`),
    );
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'initialize_checkout': {
      return {
        ...state,
      };
    }

    case 'update_cart': {
      return {
        ...state,
        cart: {
          ...action.payload,
        },
      };
    }

    case 'add_cart_items': {
      addLineItems(action.payload);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
