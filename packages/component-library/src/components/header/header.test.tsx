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

const renderLogo = () => (
  <Logo title="demo title" desc="desc" isFocused={true} />
);
const renderNav = () => (
  <NavBar itemCount={4}>
    <NavLink href="#" current={true} isFocused={false} text="Link Text" />
    <NavLink href="#" current={true} isFocused={false} text="Link Text" />
    <NavLink href="#" current={true} isFocused={false} text="Link Text" />
    <NavLink href="#" current={true} isFocused={false} text="Link Text" />
  </NavBar>
);
const rederCart = () => <h1>Hi Mom</h1>

describe('<Header />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <>
        <Header areas={[renderLogo(), renderNav(), rederCart()]} />
      </>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
