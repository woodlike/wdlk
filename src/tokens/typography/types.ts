export type TypographyFormat = 'woff' | 'woff2';
export type TypographyKeys =
  | 'font-family'
  | 'font-size'
  | 'font-style'
  | 'font-variant'
  | 'font-weight'
  | 'line-height'
  | 'letter-spacing'
  | 'text-transform'
  | '-webkit-font-smoothing'
  | '-moz-osx-font-smoothing';
export type TypographyToken = { [Key in TypographyKeys]: string | number };

export type TypographyCollection = {
  readonly [key: number]: TypographyToken;
};

export interface Heading {
  readonly default: string;
  readonly secondary?: string;
}

export interface FontFamilies {
  readonly display: string;
  readonly heading: Heading;
}
