import { TypographyToken, TypographyCollection } from '.';
import { fontFamily } from './familiy';

export const headingBase: Partial<TypographyToken> = {
  'line-height': '1.5',
  'font-style': 'normal',
  'font-variant': 'normal',
  '-webkit-font-smoothing': 'grayscale',
  '-moz-osx-font-smoothing': 'antialiased',
};

export const heading: TypographyCollection = {
  500: {
    'font-family': fontFamily.heading.default,
    'letter-spacing': '1px',
    ...headingBase as Readonly<TypographyToken>
  },
  600: {
    'font-family': fontFamily.heading.default,
    'font-weight': 600,
    'letter-spacing': '2px',
    ...headingBase as Readonly<TypographyToken>
  },
  700: {
    'font-family': fontFamily.heading.secondary,
    'letter-spacing': '2px',
    ...headingBase as Readonly<TypographyToken>
  }
}
