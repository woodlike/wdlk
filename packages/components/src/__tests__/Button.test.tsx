import React from 'react';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';

import { Button, theme } from '..';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Button />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button color="primary" backgroundColor="secondary">
            Test Button
          </Button>
        </ThemeProvider>,
      );

      const a11yResults = await axe(container);
      expect(a11yResults).toHaveNoViolations();
      cleanup();
      unmount();
      done();
    });
  });

  describe('ScaleArea (padding)', () => {
    const id = 'button-test-id';
    const { space } = theme;
    it('should use the second scale on missing padding prop', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button color="primary" backgroundColor="secondary">
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'padding',
        `${space[1]}px ${space[1]}px ${space[1]}px ${space[1]}px`,
      );
      unmount();
    });

    it('should have a padding that matches with the provided ScaleArea (shorthand)', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button color="primary" backgroundColor="secondary" padding={5}>
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'padding',
        `${space[5]}px ${space[5]}px ${space[5]}px ${space[5]}px`,
      );
      unmount();
    });

    it('should have a padding that matches with the provided ScaleArea (vertical | horizontal)', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button color="primary" backgroundColor="secondary" padding={[2, 4]}>
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'padding',
        `${space[2]}px ${space[4]}px ${space[2]}px ${space[4]}px`,
      );
      unmount();
    });

    it('should have a padding that matches with the provided ScaleArea (top | right | bottom | left)', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button
            color="primary"
            backgroundColor="secondary"
            padding={[1, 2, 3, 4]}>
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'padding',
        `${space[1]}px ${space[2]}px ${space[3]}px ${space[4]}px`,
      );
      unmount();
    });
  });

  describe('Colors', () => {
    const id = 'button-test-id';
    it('should use the primary color and secondary background from theme', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button color="primary" backgroundColor="secondary" padding={5}>
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toMatchInlineSnapshot(`
        .emotion-0 {
          text-align: center;
          padding: 24px 24px 24px 24px;
          color: var(--theme-ui-colors-primary,rgb(255,113,99));
          background-color: var(--theme-ui-colors-secondary,rgb(229,85,78));
        }

        <button
          class="emotion-0"
        >
          button-test-id
        </button>
      `);
      unmount();
    });
    it('should use the color from the color scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button
            color={{ color: 'corals', idx: 1 }}
            backgroundColor={{ color: 'whites', idx: 1 }}
            padding={5}>
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toMatchInlineSnapshot(`
        .emotion-0 {
          text-align: center;
          padding: 24px 24px 24px 24px;
          color: var(--theme-ui-colors-corals-1,rgb(229,85,78));
          background-color: var(--theme-ui-colors-whites-1,rgb(240,246,246));
        }

        <button
          class="emotion-0"
        >
          button-test-id
        </button>
      `);
      unmount();
    });
  });
});
