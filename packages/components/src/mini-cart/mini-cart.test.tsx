import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { MiniCart, CartLink, MiniCartLink } from './';
import { Cart } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<MiniCart />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <MiniCart>
        <MiniCartLink>
          <CartLink href="#" isFocused={false}>
            Login
          </CartLink>
        </MiniCartLink>
        <MiniCartLink>
          <CartLink href="#" isFocused={false}>
            register
          </CartLink>
        </MiniCartLink>
        <MiniCartLink>
          <Cart href="#" isFocused={false} count={0} isFilled={true} title="Woodlike Ocean Shopping cart" />
        </MiniCartLink>
      </MiniCart>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
