import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import * as Nav from '../navigation';
import { Header } from './';
import { Logo } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

const renderLogo = (): JSX.Element => <Logo href="#" title="demo title" desc="desc" isFocused={true} />;
const renderNav = (): JSX.Element => (
  <Nav.Bar itemCount={4}>
    <Nav.Link context="bar" href="#" current={true} isFocused={false} text="Link Text" />
    <Nav.Link context="bar" href="#" current={true} isFocused={false} text="Link Text" />
    <Nav.Link context="bar" href="#" current={true} isFocused={false} text="Link Text" />
    <Nav.Link context="bar" href="#" current={true} isFocused={false} text="Link Text" />
  </Nav.Bar>
);
const rederCart = (): JSX.Element => <h1>Hi Mom</h1>;

describe('<Header />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <>
        <Header areas={[renderLogo(), renderNav(), rederCart()]} />
      </>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
