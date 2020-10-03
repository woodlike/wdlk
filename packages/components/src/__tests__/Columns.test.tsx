import React from 'react';
import { axe } from 'jest-axe';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '../../testing-library';

import { theme, Columns } from '..';

expect.extend(matchers);
// expect.extend(toHaveNoViolations);

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
    it('should use the flex direction row on missing collapseBelow props', () => {
      const { queryByText, unmount } = render(<Columns>{id}</Columns>);
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'row');
      unmount();
    });

    it('should use flex-direction row collapseBelow not matches the media query', () => {
      const { queryByText, unmount } = render(
        <Columns collapseBelow={2}>{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'row');
      unmount();
    });

    it('should use flex-direction row as value matching @media max-width', () => {
      const { queryByText, unmount } = render(
        <Columns collapseBelow={2}>{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('flex-direction', 'column', {
        media: `(max-width: ${theme.breakpoints[2]})`,
      });
      unmount();
    });
  });

  describe('justifyContent', () => {
    it('should not have a justify-content property', () => {
      const { queryByText, unmount } = render(<Columns>{id}</Columns>);
      const columns = queryByText(id) as HTMLElement;
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

  describe('align', () => {
    it('should not have a align-items property', () => {
      const { queryByText, unmount } = render(<Columns>{id}</Columns>);
      const columns = queryByText(id) as HTMLElement;
      expect(
        Boolean(getComputedStyle(columns).getPropertyValue('align-items')),
      ).toBeFalsy();
      unmount();
    });
    it('should have align-items center rule', () => {
      const { queryByText, unmount } = render(
        <Columns align="center">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('align-items', 'center');
      unmount();
    });
    it('should have align-items flex-end rule', () => {
      const { queryByText, unmount } = render(
        <Columns align="flex-end">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('align-items', 'flex-end');
      unmount();
    });
    it('should have align-items flex-start rule', () => {
      const { queryByText, unmount } = render(
        <Columns align="flex-start">{id}</Columns>,
      );
      const columns = queryByText(id);
      expect(columns).toHaveStyleRule('align-items', 'flex-start');
      unmount();
    });
  });
});
