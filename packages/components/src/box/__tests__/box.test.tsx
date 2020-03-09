import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Box } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Box />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(<Box tag="div">Test Children</Box>);

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
  describe('rendered type from tag prop', () => {
    it('should render a default div tag', () => {
      const { container, unmount } = render(<Box tag="div">Test Children</Box>);
      expect(container.querySelector('div')).toBeTruthy();
      unmount();
    });

    it('should render a section tag', () => {
      const { container, unmount } = render(<Box tag="section">Test Children</Box>);
      expect(container.querySelector('section')).toBeTruthy();
      unmount();
    });

    it('should render a aside tag', () => {
      const { container, unmount } = render(<Box tag="aside">Test Children</Box>);
      expect(container.querySelector('aside')).toBeTruthy();
      unmount();
    });

    it('should render a article tag', () => {
      const { container, unmount } = render(<Box tag="article">Test Children</Box>);
      expect(container.querySelector('article')).toBeTruthy();
      unmount();
    });
  });

  describe('Space styling (padding and margin)', () => {
    it('should return a StyleException (empty string)', () => {
      const { getByText, unmount } = render(<Box tag="aside">Test Box</Box>);
      const box = getByText('Test Box');
      const padding = getComputedStyle(box);
      expect(padding.getPropertyValue('padding')).toBe('');
      unmount();
    });

    it('should return a StyleException (empty string)', () => {
      const { getByText, unmount } = render(<Box tag="aside">Test Box</Box>);
      const box = getByText('Test Box');
      const margin = getComputedStyle(box);
      expect(margin.getPropertyValue('margin')).toBe('');
      unmount();
    });

    it('should contain a 4 padding value style', () => {
      const { getByText, unmount } = render(
        <Box p={[5, 6, 8, 9]} tag="aside">
          Test Box
        </Box>,
      );
      const box = getByText('Test Box');
      expect(box).toHaveStyleRule('padding', '5px 6px 8px 9px');
      unmount();
    });

    it('should contain a 4 margin value style', () => {
      const { getByText, unmount } = render(
        <Box m={[5, 6, 8, 9]} tag="aside">
          Test Box
        </Box>,
      );
      const box = getByText('Test Box');
      expect(box).toHaveStyleRule('margin', '5px 6px 8px 9px');
      unmount();
    });
  });
});
