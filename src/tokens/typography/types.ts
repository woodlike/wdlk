export type TypographyFormat = 'woff' | 'woff2';
export type TypographyStyle = 'normal' | 'italic';

export type TypographyKeys = 'font-family' | 'font-size' | 'font-style' | 'font-variant' | 'font-weight' | 'line-height' | 'letter-spacing';

export type TypographyToken = {[Key in TypographyKeys] : string};

export type CollectionKey<T> = {
  [key: T]: TypographyToken;
}
