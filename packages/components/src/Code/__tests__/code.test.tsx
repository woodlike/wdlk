import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { andromeda, Code, convertor } from '..';
import { theme } from '../../theme';
import { Language } from '../languages';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Code />', () => {
  let code: string;

  beforeEach(() => {
    code = `
    const add = (a: number, b: number): number => {
      return a + b;
    }
    `;
  });

  afterEach(() => {
    code = undefined;
  });

  it('should not have accessibility violations (pre)', async done => {
    const { container, unmount } = render(<Code code={code} lang={Language.typescript} size="s" />);
    const pre = container.querySelector('pre');
    const a11yResults = await axe(pre);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('Code generated Theme', () => {
    it('should use the default Andromeda theme', () => {
      const { container, unmount } = render(<Code code={code} lang={Language.tsx} size="s" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('color', andromeda.plain.color);
      expect(pre).toHaveStyleRule('background-color', andromeda.plain.backgroundColor);
      unmount();
    });

    it('should provide the generated spans with the corresponding theme token styling', () => {
      const theme = convertor(andromeda);
      const { container, unmount } = render(<Code code={code} lang={Language.typescript} size="s" />);
      const codeEl = container.querySelector('code');
      Array.from(codeEl.querySelectorAll('span')).forEach((span: HTMLSpanElement) => {
        const styles = getComputedStyle(span);
        if (Boolean(styles.getPropertyValue('color'))) {
          expect(Array.from(theme.values()).find(val => val.color === styles.getPropertyValue('color'))).toBeTruthy();
        }
      });
      unmount();
    });
  });

  describe('Font-Size', () => {
    it('should use the defined S font family', () => {
      const { container, unmount } = render(<Code code={code} lang={Language.typescript} size="s" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[0]}px`);
      unmount();
    });

    it('should use the defined M font family', () => {
      const { container, unmount } = render(<Code code={code} lang={Language.typescript} size="m" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`);
      unmount();
    });

    it('should use the defined L font family', () => {
      const { container, unmount } = render(<Code code={code} lang={Language.typescript} size="l" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[2]}px`);
      unmount();
    });
  });
});
