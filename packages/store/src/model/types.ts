export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export interface Image {
  readonly id: string;
  readonly src: string;
  readonly localFile: string;
}
