import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { NavPanel } from './';
import { NavLink } from '../navigation-link';

expect.extend(toHaveNoViolations);

describe('<NavigationBar />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <NavPanel isExpanded={true} >
        <NavLink href="#" current={true} isFocused={false}>
          Link Text
        </NavLink>
        <NavLink href="#" current={true} isFocused={false}>
          Link Text
        </NavLink>
        <NavLink href="#" current={true} isFocused={false}>
          Link Text
        </NavLink>
        <NavLink href="#" current={true} isFocused={false}>
          Link Text
        </NavLink>
      </NavPanel>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  })
})
