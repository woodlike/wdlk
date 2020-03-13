import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { andromeda, Code } from '..';
import { theme } from '../../theme';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Code />', () => {
  let code: string;

  beforeEach(() => {
    code = `
      export const Foo = (): JSX.Element => (
        <h1>Hi Mom</h1>
      )
    `;
  });

  afterEach(() => {
    code = undefined;
  });

  it('should not have accessibility violations (pre)', async done => {
    const { container, unmount } = render(<Code code={code} size="s" />);
    const pre = container.querySelector('pre');
    const a11yResults = await axe(pre);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('Code Theme', () => {
    it('should use the default Andromeda theme', () => {
      const { container, unmount } = render(<Code code={code} size="s" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('color', andromeda.plain.color);
      expect(pre).toHaveStyleRule('background-color', andromeda.plain.backgroundColor);
      unmount();
    });
  });

  describe('Font-Size', () => {
    it('should use the defined S font family', () => {
      const { container, unmount } = render(<Code code={code} size="s" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[0]}px`);
      unmount();
    });

    it('should use the defined M font family', () => {
      const { container, unmount } = render(<Code code={code} size="m" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[1]}px`);
      unmount();
    });

    it('should use the defined L font family', () => {
      const { container, unmount } = render(<Code code={code} size="l" />);
      const pre = container.querySelector('pre');
      expect(pre).toHaveStyleRule('font-size', `${theme.fontSizes[2]}px`);
      unmount();
    });
  });
});
