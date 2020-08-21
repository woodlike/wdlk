import React, { useEffect, useReducer, Dispatch } from 'react';
import Client from 'shopify-buy';

import { cartReducer, Action, CartState } from './cart-reducer';

export const SHOPIFY_CHECKOUT_ID_KEY = 'shopify_checkout_id';

/**
 * @name CartContext
 * @description passes down the cart state to consumer child components.
 */
export const CartContext = React.createContext({} as CartState);
CartContext.displayName = 'CartContext';

/**
 * @name CartDispatchContext
 * @description passes down the useReducer dispatch function.
 * The dispath value never changes.
 * We separate state values with state updates avoiding unnecessary re-rendering.
 */
export const CartDispatchContext = React.createContext({} as Dispatch<Action>);
CartDispatchContext.displayName = 'CartDispatchContext';

const client = Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: `${process.env.ACCESS_TOKEN}`,
});

const initialState: CartState = {
  client,
  cart: {} as ShopifyBuy.Cart,
};

export const CartProvider: React.FC = props => {
  const [{ cart, client }, dispatch] = useReducer(cartReducer, initialState);

  const setCart = (cart: ShopifyBuy.Cart) => {
    localStorage.setItem(SHOPIFY_CHECKOUT_ID_KEY, cart.id as string);
    dispatch({ type: 'update_checkout', payload: cart });
  };
  useEffect(() => {
    const cartId = localStorage.getItem(SHOPIFY_CHECKOUT_ID_KEY);
    (async () => {
      try {
        if (!!cartId) {
          const cart = await client.checkout.fetch(cartId);
          if (!cart || !cart.id) {
            const cart = await client.checkout.create();
            setCart(cart);
          }
        } else {
          const cart = await client.checkout.create();
          setCart(cart);
        }
      } catch (error) {
        console.warn(error);
        localStorage.setItem(SHOPIFY_CHECKOUT_ID_KEY, '');
      }
    })();
  }, [cart.id]);

  const state = {
    client,
    cart,
  };

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartContext.Provider value={state}>
        {props.children}
      </CartContext.Provider>
    </CartDispatchContext.Provider>
  );
};
