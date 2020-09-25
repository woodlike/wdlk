declare namespace jest {
  interface Options {
    readonly media?: string;
    readonly modifier?: string;
    readonly supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: string, options?: Options): R;
  }
}
