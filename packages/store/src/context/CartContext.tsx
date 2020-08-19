import React, { useReducer, Dispatch } from 'react';
import Client from 'shopify-buy';

import { cartReducer, Action } from './cart-reducer';

export interface CartReducerState {
  readonly client: ShopifyBuy.Client;
}

const client = Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: `${process.env.ACCESS_TOKEN}`,
});

/**
 * @name CartContext
 * @description passes down the cart state to consumer child components.
 */
export const CartContext = React.createContext({});
CartContext.displayName = 'CartContext';

/**
 * @name CartDispatchContext
 * @description passes down the useReducer dispatch function.
 * The dispath value never changes.
 * We separate state values with state updates avoiding unnecessary re-rendering.
 */
export const CartDispatchContext = React.createContext({} as Dispatch<Action>);
CartDispatchContext.displayName = 'CartDispatchContext';

const initialState: CartReducerState = {
  client,
};

export const CartProvider: React.FC = props => {
  const [, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      {props.children}
    </CartDispatchContext.Provider>
  );
};
