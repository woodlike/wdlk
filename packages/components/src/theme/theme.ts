import { base } from '@theme-ui/presets';
import { theme as themeQuery, Colors, toRGB } from 'theme-query';

export interface Theme {
  readonly borderStyles: string[];
  readonly borderWidths: number[];
  readonly breakpoints: string[];
  readonly colors: ThemeColor & GenericThemeColor;
  readonly fonts: ThemeFontsProps;
  readonly fontSizes: number[];
  readonly space: number[];
}

export interface GenericThemeColor {
  readonly [key: string]: string | string[];
}

export interface ThemeFontsProps {
  readonly body: string;
  readonly heading: ThemeHeadingProps;
}

export interface ThemeHeadingProps {
  readonly display: string;
}

export interface ThemeColor {
  readonly primary: string;
  readonly secondary: string;
  readonly text: string;
  readonly border: string;
  readonly muted: string;
  readonly mutedHover: string;
  readonly headline: string;
  readonly link: string;
  readonly textInverted: string;
}

const borderStyles = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
];
const borderWidths = [1, 2, 3, 4];
const breakpoints = ['0px', '480px', '768px', '990px', '1024px', '1440px'];
const fontSizes: number[] = [12, 14, 16, 18, 20, 24, 32, 44, 72];
const fontWeights: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const spaces = [0, 3, 6, 12, 18, 24, 30, 36, 48, 72];

const colors: Colors = {
  codeBg: toRGB([38, 42, 51]),
  corals: [toRGB([255, 113, 99]), toRGB([229, 85, 78])],
  whites: [
    toRGB([255, 255, 255]),
    toRGB([240, 246, 246]),
    toRGB([240, 240, 240]),
    toRGB([249, 246, 241]),
    toRGB([247, 247, 247]),
  ],
  grays: [
    toRGB([222, 223, 224]),
    toRGB([159, 188, 208]),
    toRGB([142, 149, 154]),
    toRGB([89, 103, 113]),
    toRGB([77, 77, 79]),
    toRGB([56, 72, 82]),
  ],
  blacks: [toRGB([34, 34, 34]), toRGB([51, 51, 51])],
  beiges: [toRGB([250, 245, 244])],
  sand: toRGB([204, 153, 102]),
  yellows: [toRGB([223, 199, 129]), toRGB([255, 202, 84])],
};
export const theme = {
  ...base,
  ...themeQuery,

  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    ...colors,
    background: colors.whites[0],
    border: colors.grays[0],
    headline: colors.grays[5],
    link: colors.grays[3],
    primary: colors.corals[0],
    muted: colors.grays[3],
    mutedHover: colors.grays[2],
    secondary: colors.corals[1],
    text: colors.blacks[0],
    textInverted: colors.whites[1],
  },
  fontSizes,
  fontWeights,
  fonts: {
    ...themeQuery.fonts,
    heading: {
      display: `"Museo", serif`,
      secondary: `"MuseoSans", Helvetica, sans-serif`,
      campaign: `"Challista_signature", serif`,
    },
    monospace: `"IBM Plex Mono", monospace`,
  },
  header: ['70px', '70px', '70px', '80px', '80px', '80px'],
  letterSpacings: [0.5, 1, 1.5],
  space: spaces,
  transition: {
    duration: [...themeQuery.transition.duration],
    timing: [
      ...themeQuery.transition.timing,
      'cubic-bezier(0.000, 0.755, 0.450, 0.910)',
      'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    ],
  },
};
