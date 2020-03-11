/**@jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Text } from '..';
import { theme } from '../../theme';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Link />', () => {
  let id: string;

  beforeEach(() => (id = 'test-text'));
  afterEach(() => (id = undefined));

  describe('Accessibility', () => {
    it('should not have accessibility violations (anchor)', async done => {
      const { getByText, unmount } = render(
        <Text href="#" as="a" size="s">
          {id}
        </Text>,
      );
      const link = getByText(id);
      const a11yResults = await axe(link);
      expect(a11yResults).toHaveNoViolations();
      expect(link.tagName).toBe('A');
      expect(link.getAttribute('href')).toBe('#');
      cleanup();
      unmount();
      done();
    });

    it('should not have accessibility violations (span)', async done => {
      const { getByText, unmount } = render(
        <Text as="span" size="s">
          {id}
        </Text>,
      );

      const link = getByText(id);
      const a11yResults = await axe(link);
      expect(a11yResults).toHaveNoViolations();
      expect(link.tagName).toBe('SPAN');
      cleanup();
      unmount();
      done();
    });
  });

  describe('Font-Size', () => {
    it('should use the default S font family', () => {
      const { getByText, unmount } = render(
        <Text href="#" as="a" size="s">
          {id}
        </Text>,
      );
      const link = getByText(id);
      expect(link).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`);
      unmount();
    });

    it('should use the default XL font family', () => {
      const { getByText, unmount } = render(
        <Text href="#" as="a" size="xl">
          {id}
        </Text>,
      );
      const link = getByText(id);
      expect(link).toHaveStyleRule('font-size', `${theme.fontSizes[4]}px`);
      unmount();
    });

    it('should use the Theme-UI S font family', () => {
      // const theme = { fontSizes: [0, 22, 44, 36, 65] };
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text href="#" as="a" size="s">
            {id}
          </Text>
        </ThemeProvider>,
      );
      const link = getByText(id);
      expect(link).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`);
      unmount();
    });

    it('should use the Theme-UI S font family', () => {
      const theme = { fontSizes: [0, 22, 44, 36, 65] };
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text href="#" as="a" size="xl">
            {id}
          </Text>
        </ThemeProvider>,
      );
      const link = getByText(id);
      expect(link).toHaveStyleRule('font-size', `${theme.fontSizes[4]}px`);
      unmount();
    });
  });
});
