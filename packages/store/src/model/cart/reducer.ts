import * as Lens from './lenses';
import { Cart, CartState } from '.';
import {
  RemoveCartItemPayload,
  InitCheckoutPayload,
  AddCartItemsPayload,
} from './actions';
import { ActionType } from '..';

export type CartAction =
  | ActionType<'initialize_checkout', InitCheckoutPayload>
  | ActionType<'update_cart', Cart>
  | ActionType<'add_cart_items', AddCartItemsPayload>
  | ActionType<'remove_cart_item', RemoveCartItemPayload>;

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
        cart: Lens.reduceCart(action.payload),
      };
    }

    case 'add_cart_items': {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
