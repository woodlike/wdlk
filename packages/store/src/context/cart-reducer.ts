// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CartState {}

export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export type Action = ActionType<'TEST'>;

export function cartReducer(state: CartState, action: Action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
