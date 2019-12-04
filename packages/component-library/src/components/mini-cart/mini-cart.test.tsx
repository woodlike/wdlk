import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { MiniCart, CartLink } from './';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<MiniCart />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <MiniCart>
        <CartLink href="#" isFocused={false}>
          Login
        </CartLink>
        <CartLink href="#" isFocused={false}>
          register
        </CartLink>
        <CartLink href="#" isFocused={false}>
          register
        </CartLink>
      </MiniCart>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
