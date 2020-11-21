import { Dispatch } from 'react';
import { Cart, CartState, ShopifyClient } from '.';
import { ActionType } from '..';

export type CartAction =
  | ActionType<'initialize_checkout', InitCheckoutPayload>
  | ActionType<'update_cart', Cart>
  | ActionType<'add_cart_items', AddCartItemsPayload>
  | ActionType<'remove_cart_item', RemoveCartItemPayload>;

export interface InitCheckoutPayload {
  readonly cartId: string | null;
  readonly client: ShopifyClient;
  readonly dispatch: Dispatch<CartAction>;
}

export interface AddCartItemsPayload {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly lineItemsToAdd: ShopifyBuy.LineItemToAdd[];
  readonly dispatch: Dispatch<CartAction>;
}

export interface RemoveCartItemPayload {
  readonly cartId: string | number;
  readonly client: ShopifyClient;
  readonly dispatch: Dispatch<CartAction>;
  readonly lineItemId: string;
}

export function initializeCheckout(payload: InitCheckoutPayload) {
  const { cartId, client, dispatch } = payload;
  try {
    if (!!cartId) {
      client.checkout.fetch(cartId).then(async cart => {
        if (cart && cart.id) {
          dispatch({ type: 'update_cart', payload: cart });
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

export function addLineItems(payload: AddCartItemsPayload) {
  const { cartId, client, lineItemsToAdd, dispatch } = payload;
  client.checkout
    .addLineItems(cartId, lineItemsToAdd)
    .then(cart => {
      const subtotalPriceV2 = {
        amount: parseFloat(cart.subtotalPriceV2?.amount as string).toFixed(2),
        currencyCode: cart.subtotalPriceV2?.currencyCode as string,
      };
      dispatch({
        type: 'update_cart',
        payload: {
          ...cart,
          subtotalPriceV2,
        },
      });
    })
    .catch(error =>
      console.warn(`CartProvider Shopify reducer (addLineItems): ${error}`),
    );
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

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'initialize_checkout': {
      initializeCheckout(action.payload);
      return {
        ...state,
      };
    }

    case 'update_cart': {
      return {
        ...state,
        cart: {
          ...action.payload,
          subtotalPriceV2: action.payload.subtotalPriceV2,
        },
      };
    }

    case 'add_cart_items': {
      addLineItems(action.payload);
      return {
        ...state,
      };
    }

    case 'remove_cart_item': {
      removeLineItem(action.payload);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
