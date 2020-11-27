import React, { useEffect, useReducer, Dispatch } from 'react';
import Client from 'shopify-buy';

import * as Actions from './actions';
import { cartReducer, initialCart, CartAction, CartState } from '.';

export interface ActionsContext {
  readonly dispatch: Dispatch<CartAction>;
  readonly removeLineItem: (payload: RemoveCartItemPayload) => void;
}

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
export const CartDispatchContext = React.createContext(
  {} as Dispatch<CartAction>,
);
CartDispatchContext.displayName = 'CartDispatchContext';

/**
 * @name CartActionsContext
 * @description passes down the actions and dispatch functions.
 * The action creators functions and dispath value never changes.
 * We separate state values with state updates avoiding unnecessary re-rendering.
 */
export const CartActionsContext = React.createContext({} as ActionsContext);
CartActionsContext.displayName = 'CartActionsContext';

const client = Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: `${process.env.ACCESS_TOKEN}`,
});

const initialState: CartState = {
  client,
  cart: initialCart,
};

export const CartProvider: React.FC = props => {
  const [{ cart, client }, dispatch] = useReducer(cartReducer, initialState);

  const actionCreator = Actions.create(dispatch);
  const removeLineItem = actionCreator(Actions.removeLineItem);

  useEffect(() => {
    const cartId = localStorage.getItem('shopify_checkout_id');
    dispatch({
      type: 'initialize_checkout',
      payload: { cartId, client, dispatch },
    });
  }, [cart.id]);

  const actions: ActionsContext = {
    dispatch,
    removeLineItem,
  };

  const state = {
    client,
    cart,
  };
  console.log(cart, '****');

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartActionsContext.Provider value={actions}>
        <CartContext.Provider value={state}>
          {props.children}
        </CartContext.Provider>
      </CartActionsContext.Provider>
    </CartDispatchContext.Provider>
  );
};
