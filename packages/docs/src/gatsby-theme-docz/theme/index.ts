import { theme as wdlkTheme } from '@wdlk/components';
import baseTheme from 'gatsby-theme-docz/src/theme/index';

const breakpoints = ['480px', '769px', '1024px', '1440px'];
const theme = {
  plain: {
    backgroundColor: 'white',
  },
  ...baseTheme,
  ...wdlkTheme,
  breakpoints,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  fonts: {
    ...wdlkTheme.fonts,
    monospace: `"IBM Plex Mono", monospace`,
  },
  colors: {
    ...baseTheme.colors,
    ...wdlkTheme.colors,
  },
};

export default theme;
