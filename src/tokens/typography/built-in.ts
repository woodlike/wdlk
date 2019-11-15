import { CollectionKey } from '.';

export type CopyFactories = 300 | 400 | 500 | 600 | 700 | 800;

export interface FontFamilies {
  readonly copy: string;
  readonly headline: string;
}


export const fontFamily: FontFamilies = {
  copy: `"museo_sans300", Helvetica, sans-serif`,
  headline: `"museo300", serif`
};

export const copy: CollectionKey<CopyFactories> = {
  300: {
    'font-family': fontFamily.copy,
    'font-size': '24px',
  }
}

