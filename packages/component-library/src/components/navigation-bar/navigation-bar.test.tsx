import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { NavBar } from './navigation-bar';
import { NavLink } from '../navigation-link';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<NavigationBar />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <NavBar itemCount={4}>
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
      </NavBar>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  })
})
