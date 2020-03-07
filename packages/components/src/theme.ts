import { base } from '@theme-ui/presets';
import { theme as themeQuery } from 'theme-query';

const breakpoints = ['0px', '480px', '768px', '990px', '1024px', '1440px'];

export const theme = {
  ...base,
  ...themeQuery,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  breakpoints,
  colors: {
    ...themeQuery.colors,
    primary: themeQuery.colors.corals[0],
    border: themeQuery.colors.grays[0],
    background: themeQuery.colors.whites[0],
  },
  fonts: {
    ...themeQuery.fonts,
    heading: {
      display: `"Museo", serif`,
      secondary: `"MuseoSans", Helvetica, sans-serif`,
      campaign: `"Challista_signature", serif`,
    },
  },
  space: {
    ...themeQuery.spaces,
  },
  transition: {
    duration: [...themeQuery.transition.duration],
    timing: [
      ...themeQuery.transition.timing,
      'cubic-bezier(0.000, 0.755, 0.450, 0.910)',
      'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    ],
  },
  header: ['70px', '70px', '70px', '80px', '80px', '80px'],
};
