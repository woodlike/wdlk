import { theme as ThemeQuery } from 'gatsby-theme-query';

const breakpoints = ['480px', '769px', '1024px', '1440px'];
// tslint:disable-next-line:no-any
(breakpoints as any).sm = breakpoints[0];
// tslint:disable-next-line:no-any
(breakpoints as any).md = breakpoints[1];
// tslint:disable-next-line:no-any
(breakpoints as any).lg = breakpoints[2];
// tslint:disable-next-line:no-any
(breakpoints as any).xl = breakpoints[3];

export const theme = {
  ...ThemeQuery,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  breakpoints,
  colors: {
    ...ThemeQuery.colors,
  },
  header: ['70px', '70px', '70px', '80px']
};
