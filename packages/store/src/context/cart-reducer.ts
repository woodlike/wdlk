import { Dispatch } from 'react';

export interface CartState {
  readonly client: ShopifyBuy.Client;
  readonly cart: ShopifyBuy.Cart;
}

export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export type Action = ActionType<'initialize_checkout', ShopifyBuy.Cart>;

export async function initializeCheckout(
  client: ShopifyBuy.Client,
  id: string | null,
  dispatch: Dispatch<Action>,
) {
  try {
    if (!!id) {
      const cart = await client.checkout.fetch(id);
      if (!cart || !cart.id) {
        const cart = await client.checkout.create();
        localStorage.setItem('shopify_checkout_id', `${cart.id}`);
        dispatch({ type: 'initialize_checkout', payload: cart });
      }
    } else {
      const cart = await client.checkout.create();
      localStorage.setItem('shopify_checkout_id', `${cart.id}`);
      dispatch({ type: 'initialize_checkout', payload: cart });
    }
  } catch (error) {
    console.warn(`CartProvider Shopify cart init reducer: ${error}`);
    localStorage.setItem('shopify_checkout_id', '');
  }
}

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case 'initialize_checkout': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
