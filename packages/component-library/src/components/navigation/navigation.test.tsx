import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Navigation } from './';

import { NavBar } from '../navigation-bar';
import { NavLink } from '../navigation-link';
import { NavPanel } from '../navigation-panel';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Navigation />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Navigation>
        <NavBar itemCount={6}>
          <NavLink
            href="#"
            current={true}
            isFocused={false}
            context="bar"
            text="Bikinis"
          />
          <NavLink
            href="#"
            current={false}
            isFocused={true}
            context="bar"
            text="One Pieces">
            <NavPanel isExpanded={true}>
              <NavLink
                href="#"
                current={false}
                isFocused={true}
                context="panel"
                text="One Pieces"
              />
              <NavLink
                href="#"
                current={true}
                isFocused={false}
                context="panel"
                text="Surf & Yoga"
              />
              <NavLink
                href="#"
                current={false}
                isFocused={false}
                context="panel"
                text="Mini Shape"
              />
              <NavLink
                href="#"
                current={false}
                isFocused={false}
                context="panel"
                text="Puch"
              />
              <NavLink
                href="#"
                current={false}
                isFocused={false}
                context="panel"
                text="Sale"
              />
              <NavLink
                href="#"
                current={false}
                isFocused={false}
                context="panel"
                text="Gift Card"
              />
            </NavPanel>
          </NavLink>
          <NavLink
            href="#"
            current={false}
            isFocused={false}
            context="bar"
            text="Surf & Yoga"
          />
          <NavLink
            href="#"
            current={false}
            isFocused={false}
            context="bar"
            text="Tanning"
          />
          <NavLink
            href="#"
            current={false}
            isFocused={false}
            context="bar"
            text="Sustainability"
          />
          <NavLink
            href="#"
            current={false}
            isFocused={false}
            context="bar"
            text="The Brand"
          />
        </NavBar>
      </Navigation>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
