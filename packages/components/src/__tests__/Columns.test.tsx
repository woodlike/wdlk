import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { theme, Columns } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Columns />', () => {
  let id: string;

  beforeEach(() => {
    id = 'test-columns';
  });

  afterEach(() => {
    id = (undefined as unknown) as string;
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(<Columns>{id}</Columns>);

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('collapseBelow', () => {
    it('should use the flex column on missing collapseBelow props', () => {
      const { queryByText, unmount } = render(<Columns>{id}</Columns>);
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'row');
      unmount();
    });

    it('should use flex-direction column as default value on provided collapseBelow', () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Columns collapseBelow={2}>{id}</Columns>
        </ThemeProvider>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'row');
      unmount();
    });

    it('should use flex-direction row as value matching @media min-width', () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Columns collapseBelow={2}>{id}</Columns>
        </ThemeProvider>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'column', {
        media: `(min-width: ${theme.breakpoints[2]})`,
      });
      unmount();
    });
  });

  describe('justifyContent', () => {
    it('should not have a justify-content property', () => {
      const { queryByText, unmount } = render(<Columns>{id}</Columns>);
      const columns = queryByText(id);
      expect(
        Boolean(getComputedStyle(columns).getPropertyValue('justify-content')),
      ).toBeFalsy();
      unmount();
    });
    it('should have justify-content center rule', () => {
      const { queryByText, unmount } = render(
        <Columns justifyContent="center">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('justify-content', 'center');
      unmount();
    });
    it('should have justify-content flex-end rule', () => {
      const { queryByText, unmount } = render(
        <Columns justifyContent="flex-end">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('justify-content', 'flex-end');
      unmount();
    });
    it('should have justify-content flex-start rule', () => {
      const { queryByText, unmount } = render(
        <Columns justifyContent="flex-start">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('justify-content', 'flex-start');
      unmount();
    });
  });
});
