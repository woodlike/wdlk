import React, { useEffect, useReducer, Dispatch } from 'react';
import Client from 'shopify-buy';

import {
  cartReducer,
  Action,
  CartState,
  initializeCheckout,
} from './cart-reducer';

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

  useEffect(() => {
    const cartId = localStorage.getItem('shopify_checkout_id');
    initializeCheckout(client, cartId, dispatch);
  }, [cart.id]);

  const state = {
    client,
    cart,
  };

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {props.children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
