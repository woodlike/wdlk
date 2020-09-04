import { Dispatch } from 'react';

export interface CartState {
  readonly client: ShopifyBuy.Client;
  readonly cart: ShopifyBuy.Cart;
}

export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export interface InitCheckoutPayload {
  readonly cartId: string | null;
  readonly client: ShopifyBuy.Client;
  readonly dispatch: Dispatch<Action>;
}

export interface AddCartItemsPayload {
  readonly cartId: string | number;
  readonly client: ShopifyBuy.Client;
  readonly lineItemsToAdd: ShopifyBuy.LineItemToAdd[];
  readonly dispatch: Dispatch<Action>;
}

export type Action =
  | ActionType<'initialize_checkout', InitCheckoutPayload>
  | ActionType<'update_cart', ShopifyBuy.Cart>
  | ActionType<'add_cart_items', AddCartItemsPayload>;

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

export function handleAddLineItems(payload: AddCartItemsPayload) {
  const { cartId, client, lineItemsToAdd, dispatch } = payload;
  client.checkout
    .addLineItems(cartId, lineItemsToAdd)
    .then(cart => {
      dispatch({ type: 'update_cart', payload: cart });
    })
    .catch(error =>
      console.warn(
        `CartProvider Shopify reducer (handleAddLineItems): ${error}`,
      ),
    );
}

export function cartReducer(state: CartState, action: Action) {
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
        cart: action.payload,
      };
    }

    case 'add_cart_items': {
      handleAddLineItems(action.payload);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
