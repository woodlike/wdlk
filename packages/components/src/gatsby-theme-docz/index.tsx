/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui';
import { theme as doczTheme, useConfig, ComponentsProvider } from 'docz';
import { theme } from 'gatsby-theme-query';
// @ts-ignore
import defaultTheme from '~theme';
// @ts-ignore
import components from '~components';

const breakpoints = ['480px', '769px', '1024px', '1440px'];
const libraryTheme = {
  plain: {
    backgroundColor: 'white',
  },
  ...defaultTheme,
  ...theme,
  breakpoints,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  fonts: {
    ...theme.fonts,
    monospace: `"IBM Plex Mono", monospace`
  },
  colors: {
    ...defaultTheme.colors,
    ...theme.colors,
  }
};

// tslint:disable-next-line: no-any
const Theme = ({ children }: any) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default doczTheme(libraryTheme)(Theme);
