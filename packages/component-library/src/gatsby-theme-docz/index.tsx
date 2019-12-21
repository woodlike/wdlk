/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui';
import { theme as doczTheme, useConfig, ComponentsProvider } from 'docz';
import { theme } from 'gatsby-theme-query';
// @ts-ignore
import defaultTheme from '~theme';
// @ts-ignore
import components from '~components';

const libraryTheme = {
  ...defaultTheme,
  ...theme,
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
