import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import * as React from 'react';

import { Rows } from '.';
import { theme } from '../theme';
import { qt } from '../theme/query';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Rows />', () => {
  let id: string;

  beforeEach(() => {
    id = 'Test Rows';
  });

  afterEach(() => {
    id = undefined;
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(<Rows>{id}</Rows>);

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('collapseBelow', () => {
    it('should use the flex row on missing collapseBelow props', () => {
      const { queryByText, unmount } = render(<Rows>{id}</Rows>);
      const row = queryByText(id);
      expect(row).toHaveStyleRule('flex-direction', 'row');
      unmount();
    });

    it('should use flex-direction column as default value on provided collapseBelow', () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Rows collapseBelow={2}>{id}</Rows>
        </ThemeProvider>,
      );
      const row = queryByText(id);
      expect(row).toHaveStyleRule('flex-direction', 'column');
      unmount();
    });

    it('should use flex-direction row as value matching @media min-width', () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Rows collapseBelow={2}>{id}</Rows>
        </ThemeProvider>,
      );
      const row = queryByText(id);
      expect(row).toHaveStyleRule('flex-direction', 'row', {
        media: `(min-width: ${qt('breakpoints')(2)})`,
      });
      unmount();
    });
  });

  describe('justifyContent', () => {
    it('should not have a justify-content property', () => {
      const { queryByText, unmount } = render(<Rows>{id}</Rows>);
      const row = queryByText(id);
      expect(
        Boolean(getComputedStyle(row).getPropertyValue('justify-content')),
      ).toBeFalsy();
      unmount();
    });
    it('should have justify-content center rule', () => {
      const { queryByText, unmount } = render(
        <Rows justifyContent="center">{id}</Rows>,
      );
      const row = queryByText(id);
      expect(row).toHaveStyleRule('justify-content', 'center');
      unmount();
    });
    it('should have justify-content flex-end rule', () => {
      const { queryByText, unmount } = render(
        <Rows justifyContent="flex-end">{id}</Rows>,
      );
      const row = queryByText(id);
      expect(row).toHaveStyleRule('justify-content', 'flex-end');
      unmount();
    });
    it('should have justify-content flex-start rule', () => {
      const { queryByText, unmount } = render(
        <Rows justifyContent="flex-start">{id}</Rows>,
      );
      const row = queryByText(id);
      expect(row).toHaveStyleRule('justify-content', 'flex-start');
      unmount();
    });
  });

  describe('as', () => {
    it('should render a div', () => {
      const { queryByText, unmount } = render(<Rows as="div">{id}</Rows>);
      const row = queryByText(id);
      expect(row.tagName).toBe('DIV');
      unmount();
    });

    it('should render a main', () => {
      const { queryByText, unmount } = render(<Rows as="main">{id}</Rows>);
      const row = queryByText(id);
      expect(row.tagName).toBe('MAIN');
      unmount();
    });

    it('should render a section', () => {
      const { queryByText, unmount } = render(<Rows as="section">{id}</Rows>);
      const row = queryByText(id);
      expect(row.tagName).toBe('SECTION');
      unmount();
    });

    it('should render a article', () => {
      const { queryByText, unmount } = render(<Rows as="article">{id}</Rows>);
      const row = queryByText(id);
      expect(row.tagName).toBe('ARTICLE');
      unmount();
    });
  });
});
