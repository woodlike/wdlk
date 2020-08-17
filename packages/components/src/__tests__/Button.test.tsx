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
          <Button>Test Button</Button>
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
          <Button>{id}</Button>
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
          <Button padding={5}>{id}</Button>
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
          <Button padding={[2, 4]}>{id}</Button>
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
          <Button padding={[1, 2, 3, 4]}>{id}</Button>
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
});
