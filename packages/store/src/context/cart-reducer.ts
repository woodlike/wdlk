export interface CartState {
  readonly client: ShopifyBuy.Client;
  readonly cart: ShopifyBuy.Cart;
}

export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export type Action = ActionType<'update_checkout', ShopifyBuy.Cart>;

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    case 'update_checkout': {
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
