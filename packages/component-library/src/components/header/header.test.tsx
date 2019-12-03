import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Header } from './';
import { Logo } from '../logo';
import { NavBar } from '../navigation-bar';
import { NavLink } from '../navigation-link';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Header />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <>
      <Header areas={[
        // tslint:disable: jsx-key
        <Logo title="demo title" desc="desc" isFocused={true} />,
        (
          <NavBar itemCount={4}>
            <NavLink
              href="#"
              current={true}
              isFocused={false}
              text="Link Text" />
            <NavLink
              href="#"
              current={true}
              isFocused={false}
              text="Link Text" />
            <NavLink
              href="#"
              current={true}
              isFocused={false}
              text="Link Text" />
            <NavLink
              href="#"
              current={true}
              isFocused={false}
              text="Link Text" />
          </NavBar>
        ),
        <h1>Hi Mom</h1>
      ]} />
      </>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  })
})
