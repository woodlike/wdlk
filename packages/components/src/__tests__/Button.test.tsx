import React from 'react';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { Button, theme } from '..';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Button />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button onClick={() => jest.fn()}>Test Button</Button>
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
          <Button onClick={() => jest.fn()}>{id}</Button>
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
          <Button onClick={() => jest.fn()} padding={5}>
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
          <Button onClick={() => jest.fn()} padding={[2, 4]}>
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
          <Button onClick={() => jest.fn()} padding={[1, 2, 3, 4]}>
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

  describe('Variant properties', () => {
    const id = 'button-test-id';
    const { buttons } = theme;
    it('should have the primary variant styles as default', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button onClick={() => jest.fn()}>{id}</Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'color',
        buttons.primary.color.split(' ').join(''),
      );
      expect(button).toHaveStyleRule(
        'background-color',
        buttons.primary.bg.split(' ').join(''),
        { target: '::before' },
      );
      unmount();
    });

    it('should have the primary variant styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button onClick={() => jest.fn()} variant="primary">
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'color',
        buttons.primary.color.split(' ').join(''),
      );
      expect(button).toHaveStyleRule(
        'background-color',
        buttons.primary.bg.split(' ').join(''),
        { target: '::before' },
      );
      unmount();
    });

    it('should have the secondary variant styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button onClick={() => jest.fn()} variant="secondary">
            {id}
          </Button>
        </ThemeProvider>,
      );
      const button = getByText(id);
      expect(button).toHaveStyleRule(
        'color',
        buttons.secondary.color.split(' ').join(''),
      );
      expect(button).toHaveStyleRule(
        'background-color',
        buttons.secondary.bg.split(' ').join(''),
        { target: '::before' },
      );
      unmount();
    });
  });

  describe('Inverted properties', () => {
    const id = 'button-test-id';
    const { buttons } = theme;
    it('should have the inverted primary styles by default', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button onClick={() => jest.fn()} inverted>
            {id}
          </Button>
        </ThemeProvider>,
      );

      const button = getByText(id);

      expect(button).toHaveStyleRule(
        'color',
        buttons.primary.bg.split(' ').join(''),
      );

      expect(button).toHaveStyleRule(
        'border',
        `2px solid ${buttons.primary.bg.split(' ').join('')}`,
      );
      unmount();
    });

    it('should have the primary variant styles inverted', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button inverted onClick={() => jest.fn()} variant="primary">
            {id}
          </Button>
        </ThemeProvider>,
      );

      const button = getByText(id);

      expect(button).toHaveStyleRule(
        'color',
        buttons.primary.bg.split(' ').join(''),
      );

      expect(button).toHaveStyleRule(
        'border',
        `2px solid ${buttons.primary.bg.split(' ').join('')}`,
      );
      unmount();
    });

    it('should have the secondary variant styles inverted', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button inverted onClick={() => jest.fn()} variant="secondary">
            {id}
          </Button>
        </ThemeProvider>,
      );

      const button = getByText(id);

      expect(button).toHaveStyleRule(
        'color',
        buttons.secondary.bg.split(' ').join(''),
      );

      expect(button).toHaveStyleRule(
        'border',
        `2px solid ${buttons.secondary.bg.split(' ').join('')}`,
      );
      unmount();
    });
  });
});
