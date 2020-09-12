import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { theme, Heading } from '..';

expect.extend(toHaveNoViolations);
expect.extend(matchers);
describe('<Heading />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xs">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const a11yResults = await axe(container);
      expect(a11yResults).toHaveNoViolations();
      cleanup();
      unmount();
      done();
    });
  });

  describe('Returns the expeced font size', () => {
    it('should have a font size of 18px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xs">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );
      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${theme.heading.xs.fontSize}px`);
    });

    it('should have a font size of 20px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="s">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${theme.heading.s.fontSize}px`);
    });

    it('should have a font size of 24px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="m">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${theme.heading.m.fontSize}px`);
    });

    it('should have a font size of 32px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="l">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${theme.heading.l.fontSize}px`);
    });

    it('should have a font size of 44px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xl">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule('font-size', `${theme.heading.xl.fontSize}px`);
    });

    it('should have a font size of 72px', () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xxl">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      );

      const h2 = container.querySelector('h2');
      expect(h2).toHaveStyleRule(
        'font-size',
        `${theme.heading.xxl.fontSize}px`,
      );
    });
  });
});
