import { matchers } from 'jest-emotion';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import * as React from 'react';

import { Box } from '.';
import { theme } from '..';

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

  describe('Border color handling', () => {
    it('(shorthand): handles a Theme-UI shorthand border color', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={'primary'}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('border-color', 'var(--theme-ui-colors-primary,rgb(255,113,99))');
      unmount();
    });
    it('(shorthand): handles a Theme-UI shorthand border color scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={{ color: 'corals', idx: 1 }}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('border-color', 'var(--theme-ui-colors-corals-1,rgb(229,85,78))');
      unmount();
    });
    it('(vertical | horizontal):  handles a Theme-UI tuple border color', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={['primary', 'secondary']}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-color',
        'var(--theme-ui-colors-primary,rgb(255,113,99)) var(--theme-ui-colors-secondary,rgb(229,85,78)) var(--theme-ui-colors-primary,rgb(255,113,99)) var(--theme-ui-colors-secondary,rgb(229,85,78))',
      );
      unmount();
    });
    it('(vertical | horizontal):  handles a Theme-UI tuple border color scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={[{ color: 'corals', idx: 1 }, 'secondary']}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-color',
        'var(--theme-ui-colors-corals-1,rgb(229,85,78)) var(--theme-ui-colors-secondary,rgb(229,85,78)) var(--theme-ui-colors-corals-1,rgb(229,85,78)) var(--theme-ui-colors-secondary,rgb(229,85,78))',
      );
      unmount();
    });

    it('(top | right | bottom | left):  handles a Theme-UI triple border color scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={[{ color: 'whites', idx: 2 }, { color: 'blacks', idx: 1 }, 'secondary']}>
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'border-color',
        'var(--theme-ui-colors-whites-2,rgb(240,240,240)) var(--theme-ui-colors-blacks-1,rgb(51,51,51)) var(--theme-ui-colors-secondary,rgb(229,85,78)) var(--theme-ui-colors-blacks-1,rgb(51,51,51))',
      );
      unmount();
    });
  });
});
