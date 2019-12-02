import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { NavPanel } from './';
import { NavLink } from '../navigation-link';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<NavigationBar />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <NavPanel isExpanded={true}>
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
      </NavPanel>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should have expanded aria attributes', () => {
    const { getByTestId, unmount } = render(
      <NavPanel isExpanded={true}>
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
      </NavPanel>
    );
    const panel = getByTestId('navigation-panel-test-id');
    expect(panel.getAttribute('aria-hidden')).toBe('false');
    expect(panel.getAttribute('aria-expanded')).toBe('true');

    unmount();
  });

  it('should be not visible and have hidden aria attributes', () => {
    const { getByTestId, unmount } = render(
      <NavPanel isExpanded={false}>
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
        <NavLink href="#" current={true} isFocused={false} text="Link Text" />
      </NavPanel>
    );
    const panel = getByTestId('navigation-panel-test-id');
    expect(panel.getAttribute('aria-hidden')).toBe('true');
    expect(panel.getAttribute('aria-expanded')).toBe('false');
    expect(panel).toHaveStyleRule('opacity', '0');
    // expect(panel).toHaveStyleRule('pointer-event', 'none');
    unmount();
  });
});
