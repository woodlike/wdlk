/**@jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Box } from '..';
import { theme } from '../../theme';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Box />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(<Box as="div">Test Children</Box>);

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should not have accessibility (li) violations', async done => {
    const { container, unmount } = render(
      <Box as="ul">
        <Box as="li">Test Children</Box>
        <Box as="li">Test Children</Box>
        <Box as="li">Test Children</Box>
      </Box>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('As type prop', () => {
    it('should render a default div tag', () => {
      const { container, unmount } = render(<Box as="div">Test Children</Box>);
      expect(container.querySelector('div')).toBeTruthy();
      unmount();
    });

    it('should render a section tag', () => {
      const { container, unmount } = render(<Box as="section">Test Children</Box>);
      expect(container.querySelector('section')).toBeTruthy();
      unmount();
    });

    it('should render a aside tag', () => {
      const { container, unmount } = render(<Box as="aside">Test Children</Box>);
      expect(container.querySelector('aside')).toBeTruthy();
      unmount();
    });

    it('should render a article tag', () => {
      const { container, unmount } = render(<Box as="article">Test Children</Box>);
      expect(container.querySelector('article')).toBeTruthy();
      unmount();
    });
  });

  describe('Theme UI space styling compatibility ', () => {
    let id: string;

    beforeEach(() => {
      id = 'Test Theme-UI';
    });

    afterEach(() => {
      id = (undefined as unknown) as string;
    });

    it('should use default number functionality on non-existing scale value', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box p={20} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', '20px 20px 20px 20px');
      unmount();
    });

    it('should use the default SpaceBox functionality on non-existing scale values', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box p={[10, 12, 22, 30]} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', '10px 12px 22px 30px');
      unmount();
    });

    it('should use a mixed SpaceBox values with Theme-UI scale values', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box p={[12, 7, 22, 9]} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', `12px ${theme.space[7]}px 22px ${theme.space[9]}px`);
      unmount();
    });

    it('should use the Theme-UI padding value for top, right, bottom, left', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box p={9} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'padding',
        `${theme.space[9]}px ${theme.space[9]}px ${theme.space[9]}px ${theme.space[9]}px`,
      );
      unmount();
    });

    it('should use Theme-UIs space scale as the padding value', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box p={[0, 1, 2, 3]} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'padding',
        `${theme.space[0]}px ${theme.space[1]}px ${theme.space[2]}px ${theme.space[3]}px`,
      );
      unmount();
    });

    it('should use Theme-UIs scale value from px and py', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box px={[2, 3]} py={[4, 5]} as="section">
            {id}
          </Box>
        </ThemeProvider>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule(
        'padding',
        `${theme.space[4]}px ${theme.space[2]}px ${theme.space[5]}px ${theme.space[3]}px`,
      );
      unmount();
    });
  });

  describe('Default Space styling (padding and margin)', () => {
    let id: string;

    beforeEach(() => {
      id = 'Test Box';
    });

    afterEach(() => {
      id = (undefined as unknown) as string;
    });

    it('should return a StyleException (empty string)', () => {
      const { getByText, unmount } = render(<Box as="aside">{id}</Box>);
      const box = getByText(id);
      const padding = getComputedStyle(box);
      expect(padding.getPropertyValue('padding')).toBe('');
      unmount();
    });

    it('should return a StyleException (empty string)', () => {
      const { getByText, unmount } = render(<Box as="aside">{id}</Box>);
      const box = getByText(id);
      const margin = getComputedStyle(box);
      expect(margin.getPropertyValue('margin')).toBe('');
      unmount();
    });

    it('should contain use the same padding value for top, right, bottom, left', () => {
      const { getByText, unmount } = render(
        <Box p={4} as="aside">
          {id}
        </Box>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', '4px 4px 4px 4px');
      unmount();
    });

    it('should contain a 4 padding value style', () => {
      const { getByText, unmount } = render(
        <Box p={[5, 6, 8, 9]} as="aside">
          {id}
        </Box>,
      );
      const box = getByText(id);
      expect(box).toHaveStyleRule('padding', '5px 6px 8px 9px');
      unmount();
    });
  });
});
