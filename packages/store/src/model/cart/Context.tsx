import React, { useEffect, useReducer, Dispatch } from 'react';
import Client from 'shopify-buy';

import * as Actions from './actions';
import {
  cartReducer,
  initialCart,
  CartAction,
  CartState,
  ShopifyClient,
} from '.';

export interface ActionsContext {
  readonly dispatch: Dispatch<CartAction>;
  readonly addLineItem: (payload: AddCartItem) => void;
  readonly removeLineItem: (payload: RemoveCartItem) => void;
}

type InitCart = Omit<Actions.InitCheckoutPayload, 'dispatch'>;
export type RemoveCartItem = Omit<Actions.RemoveCartItemPayload, 'dispatch'>;
export type AddCartItem = Omit<Actions.AddCartItemsPayload, 'dispatch'>;

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

const client = (Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: `${process.env.ACCESS_TOKEN}`,
}) as unknown) as ShopifyClient;

const initialState: CartState = {
  client,
  cart: initialCart,
};

export const CartProvider: React.FC = props => {
  const [{ cart, client }, dispatch] = useReducer(cartReducer, initialState);

  const actionCreator = Actions.create<CartAction>(dispatch);

  const initialize = actionCreator<InitCart>(Actions.initializeCheckout);
  const removeLineItem = actionCreator<RemoveCartItem>(Actions.removeLineItem);
  const addLineItem = actionCreator<AddCartItem>(Actions.addLineItems);

  useEffect(() => {
    const cartId = localStorage.getItem('shopify_checkout_id');
    initialize({ cartId, client });
  }, [cart.id]);

  const actions: ActionsContext = {
    dispatch,
    removeLineItem,
    addLineItem,
  };

  const state = {
    client,
    cart,
  };

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
