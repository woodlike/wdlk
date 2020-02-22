import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import * as Nav from '../';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Navigation />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Nav.Frame>
        <Nav.Bar itemCount={6}>
          <Nav.Link href="#" current={true} isFocused={false} context="bar" text="Bikinis" />
          <Nav.Link href="#" current={false} isFocused={true} context="bar" text="One Pieces">
            <Nav.Panel isExpanded={true}>
              <Nav.Link href="#" current={false} isFocused={true} context="panel" text="One Pieces" />
              <Nav.Link href="#" current={true} isFocused={false} context="panel" text="Surf & Yoga" />
              <Nav.Link href="#" current={false} isFocused={false} context="panel" text="Mini Shape" />
              <Nav.Link href="#" current={false} isFocused={false} context="panel" text="Puch" />
              <Nav.Link href="#" current={false} isFocused={false} context="panel" text="Sale" />
              <Nav.Link href="#" current={false} isFocused={false} context="panel" text="Gift Card" />
            </Nav.Panel>
          </Nav.Link>
          <Nav.Link href="#" current={false} isFocused={false} context="bar" text="Surf & Yoga" />
          <Nav.Link href="#" current={false} isFocused={false} context="bar" text="Tanning" />
          <Nav.Link href="#" current={false} isFocused={false} context="bar" text="Sustainability" />
          <Nav.Link href="#" current={false} isFocused={false} context="bar" text="The Brand" />
        </Nav.Bar>
      </Nav.Frame>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
