export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}
