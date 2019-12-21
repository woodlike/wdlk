import { theme as ThemeQuery } from 'gatsby-theme-query';

export const theme = {
  ...ThemeQuery,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  colors: {
    ...ThemeQuery.colors,
    exotic: 'papayawhip'
  }
};
