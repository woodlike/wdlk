import { TypographyCollection, TypographyToken } from '.';
import { fontFamily } from './familiy';

export const displayBase: Partial<TypographyToken> = {
  'font-family': fontFamily.display,
  'line-height': '1.5',
  'letter-spacing': 0,
  'font-style': 'normal',
  'font-variant': 'normal',
  '-webkit-font-smoothing': 'grayscale',
  '-moz-osx-font-smoothing': 'antialiased',
};

export const display: TypographyCollection = {
  200: {
    'font-size': '16px',
    'font-weight': 200,
    ...displayBase as Readonly<TypographyToken>,
  },
  300: {
    'font-size': '18px',
    'font-weight': 300,
    ...displayBase as Readonly<TypographyToken>,
  },
};
