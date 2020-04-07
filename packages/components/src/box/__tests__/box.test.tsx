import * as React from 'react';
import { ThemeProvider } from 'theme-ui';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';

import { theme } from '../../theme';
import { Box } from '..';

expect.extend(matchers);

describe('<Box />', () => {
  const id = 'Test Box';
  const { borderStyles, borderWidths, space } = theme;
  describe('Padding handling', () => {
    it('(shorthand): handles a Theme-UI shorthand padding area', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2}>{id}</Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', `${space[2]}px ${space[2]}px ${space[2]}px ${space[2]}px`);
      unmount();
    });

    it('(vertical | horizontal): handles a Theme-UI tuple padding area', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[3, 5]}>{id}</Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', `${space[3]}px ${space[5]}px ${space[3]}px ${space[5]}px`);
      unmount();
    });

    it('(top | horizontal | bottom): handles a Theme-UI triple padding area', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[3, 5, 9]}>{id}</Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', `${space[3]}px ${space[5]}px ${space[9]}px ${space[5]}px`);
      unmount();
    });

    it('(top | right | bottom | left): handles a Theme-UI triple padding area', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[2, 6, 3, 2]}>{id}</Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', `${space[2]}px ${space[6]}px ${space[3]}px ${space[2]}px`);
      unmount();
    });
  });

  describe('Border width handling', () => {
    it('(shorthand): handles a Theme-UI shorthand border width', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={3}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-width',
        `${borderWidths[3]}px ${borderWidths[3]}px ${borderWidths[3]}px ${borderWidths[3]}px`,
      );
      unmount();
    });
    it('(vertical | horizontal): handles a Theme-UI tuple border width', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[3, 5]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-width',
        `${borderWidths[3]}px ${borderWidths[5]}px ${borderWidths[3]}px ${borderWidths[5]}px`,
      );
      unmount();
    });

    it('(top | horizontal | bottom): handles a Theme-UI triple border width', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[3, 5, 9]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-width',
        `${borderWidths[3]}px ${borderWidths[5]}px ${borderWidths[9]}px ${borderWidths[5]}px`,
      );
      unmount();
    });

    it('(top | right | bottom | left): handles a Theme-UI triple border width', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[2, 6, 3, 2]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-width',
        `${borderWidths[2]}px ${borderWidths[6]}px ${borderWidths[3]}px ${borderWidths[2]}px`,
      );
      unmount();
    });
  });

  describe('Border styles handling', () => {
    it('(shorthand): handles a Theme-UI shorthand border styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={3}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-style',
        `${borderStyles[3]}px ${borderStyles[3]}px ${borderStyles[3]}px ${borderStyles[3]}px`,
      );
      unmount();
    });
    it('(vertical | horizontal): handles a Theme-UI tuple border styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[3, 5]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-style',
        `${borderStyles[3]}px ${borderStyles[5]}px ${borderStyles[3]}px ${borderStyles[5]}px`,
      );
      unmount();
    });

    it('(top | horizontal | bottom): handles a Theme-UI triple border styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[3, 5, 9]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-style',
        `${borderStyles[3]}px ${borderStyles[5]}px ${borderStyles[9]}px ${borderStyles[5]}px`,
      );
      unmount();
    });

    it('(top | right | bottom | left): handles a Theme-UI triple border styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[2, 6, 3, 2]}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-style',
        `${borderStyles[2]}px ${borderStyles[6]}px ${borderStyles[3]}px ${borderStyles[2]}px`,
      );
      unmount();
    });
  });
});
