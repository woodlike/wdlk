import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import * as Nav from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<NavigationBar />', () => {
  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Nav.Panel isExpanded={true}>
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
      </Nav.Panel>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should have expanded aria attributes', () => {
    const { getByTestId, unmount } = render(
      <Nav.Panel isExpanded={true}>
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
      </Nav.Panel>,
    );
    const panel = getByTestId('navigation-panel-test-id');
    expect(panel.getAttribute('aria-hidden')).toBe('false');
    expect(panel.getAttribute('aria-expanded')).toBe('true');

    unmount();
  });

  it('should be not visible and have hidden aria attributes', () => {
    const { getByTestId, unmount } = render(
      <Nav.Panel isExpanded={false}>
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" context="panel" />
      </Nav.Panel>,
    );
    const panel = getByTestId('navigation-panel-test-id');
    expect(panel.getAttribute('aria-hidden')).toBe('true');
    expect(panel.getAttribute('aria-expanded')).toBe('false');
    expect(panel).toHaveStyleRule('opacity', '0');
    unmount();
  });
});
