import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

import { Logo } from '../';

describe('Logo', () => {
  it('test', async () => {
    const { container } = render(<Logo />);
    const a11yResults = await axe(container);

    expect(a11yResults).toHaveNoViolations()
  });
  cleanup();
});
