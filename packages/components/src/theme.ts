import { theme as ThemeQuery } from 'gatsby-theme-query';

const breakpoints = ['0px', '480px', '769px', '990px', '1024px', '1440px'];

export const theme = {
  ...ThemeQuery,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  breakpoints,
  colors: {
    ...ThemeQuery.colors,
  },
  transition: {
    duration: [...ThemeQuery.transition.duration],
    timing: [
      ...ThemeQuery.transition.timing,
      'cubic-bezier(0.000, 0.755, 0.450, 0.910)',
      'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    ],
  },
  header: ['70px', '70px', '70px', '80px', '80px', '80px'],
};
