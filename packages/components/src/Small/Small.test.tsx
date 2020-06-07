import { matchers } from 'jest-emotion';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import * as React from 'react';

import { Small } from '.';
import { theme } from '..';

expect.extend(matchers);

describe('<Small />', () => {
  describe('FontSizes', () => {
    const id = 'Test Small';
    const { fontSizes } = theme;
    it('should return 12px (default value) on missing scaleIdx prop', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small family="body" scale={null}>
            {id}
          </Small>
        </ThemeProvider>,
      );
      const small = getByText(id);
      expect(small).toHaveStyleRule('font-size', '12px');
      unmount();
    });

    it('should return 12px (default value) on out of range idx', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small family="body" scale={fontSizes.length + 1}>
            {id}
          </Small>
        </ThemeProvider>,
      );
      const small = getByText(id);
      expect(small).toHaveStyleRule('font-size', '12px');
      unmount();
    });

    it('should return the first font size of the theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small family="body" scale={0}>
            {id}
          </Small>
        </ThemeProvider>,
      );
      const small = getByText(id);
      expect(small).toHaveStyleRule('font-size', `${fontSizes[0]}px`);
      unmount();
    });

    it('should return the second font size of the theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small family="body" scale={1}>
            {id}
          </Small>
        </ThemeProvider>,
      );
      const small = getByText(id);
      expect(small).toHaveStyleRule('font-size', `${fontSizes[1]}px`);
      unmount();
    });
  });
});
