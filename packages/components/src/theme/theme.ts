import { theme as themeQuery, Colors, toRGB } from 'theme-query';
import { Theme } from '.';
import { andromeda } from './code-theme';

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

const borderWidths = [0, 1, 2, 3, 4];
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
  blacks: [toRGB([0, 0, 0]), toRGB([34, 34, 34]), toRGB([51, 51, 51])],
  beiges: [toRGB([250, 245, 244])],
  sand: toRGB([204, 153, 102]),
  yellows: [toRGB([223, 199, 129]), toRGB([255, 202, 84])],
};

const fonts = {
  body: `"MuseoSans", Helvetica, sans-serif`,
  heading: {
    display: `"Museo", serif`,
    secondary: `"MuseoSans", Helvetica, sans-serif`,
    campaign: `"Challista_signature", serif`,
  },
  monospace: `"IBM Plex Mono", monospace`,
};

export const theme: Theme = {
  ...themeQuery,
  borderStyles,
  borderWidths,
  breakpoints,
  colors: {
    ...colors,
    background: colors.whites[0],
    border: colors.grays[0],
    borderActive: colors.blacks[1],
    borderDisabled: colors.grays[0],
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
  fonts,
  lineHeights: [1, 1.5, 2],
  header: {
    height: 70,
  },
  code: {
    s: {
      fontSize: fontSizes[0],
    },
    m: {
      fontSize: fontSizes[1],
    },
    l: {
      fontSize: fontSizes[2],
    },
    theme: andromeda,
  },
  heading: {
    color: colors.blacks[0],
    fontWeight: 400,
    fonts: {
      primary: fonts.heading.display,
      secondary: fonts.heading.secondary,
      campaign: fonts.heading.campaign,
    },
    modes: {
      color: colors.whites[0],
    },
    xs: {
      fontSize: fontSizes[3],
    },
    s: {
      fontSize: fontSizes[4],
    },
    m: {
      fontSize: fontSizes[5],
    },
    l: {
      fontSize: fontSizes[6],
    },
    xl: {
      fontSize: fontSizes[7],
    },
    xxl: {
      fontSize: fontSizes[8],
    },
  },
  legend: {
    color: colors.blacks[1],
    fontFamily: fonts.body,
    xs: {
      fontSize: fontSizes[1],
    },
    s: {
      fontSize: fontSizes[2],
    },
    m: {
      fontSize: fontSizes[3],
    },
    l: {
      fontSize: fontSizes[4],
    },
  },
  link: {
    color: {
      primary: {
        default: colors.blacks[0],
        hover: colors.blacks[2],
      },
      secondary: {
        default: colors.grays[1],
        hover: colors.grays[4],
      },
    },
    fontFamily: fonts.body,
    s: {
      fontSize: fontSizes[1],
    },
    m: {
      fontSize: fontSizes[2],
    },
    l: {
      fontSize: fontSizes[3],
    },
  },
  outline: {
    color: colors.grays[4],
    offset: borderWidths[1],
    style: 'solid',
    width: borderWidths[1],
  },
  small: {
    fontFamily: fonts.body,
    s: {
      fontSize: fontSizes[0],
    },
    m: {
      fontSize: fontSizes[1],
    },
    l: {
      fontSize: fontSizes[2],
    },
  },
  text: {
    fontFamily: fonts.body,
    color: colors.blacks[0],
    modes: {
      color: colors.whites[0],
    },
    s: {
      fontSize: fontSizes[1],
    },
    m: {
      fontSize: fontSizes[2],
    },
    l: {
      fontSize: fontSizes[3],
    },
  },
  video: { color: colors.whites[0], controls: { color: colors.corals[0] } },
  letterSpacings: [0.5, 1, 1.5],
  space: spaces,
  transition: {
    duration: [...themeQuery.transition.duration],
    timing: [
      ...themeQuery.transition.timing,
      'cubic-bezier(0.000, 0.755, 0.450, 0.910)',
      'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
      'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    ],
  },
  buttons: {
    primary: {
      color: colors.whites[0],
      bg: colors.blacks[0],
    },
    secondary: {
      color: colors.whites[0],
      bg: colors.corals[0],
    },
  },
};
