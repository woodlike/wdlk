import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { qt } from '../query';
import { NavLink } from './navigation-link';

expect.extend(toHaveNoViolations);

describe('<NavigationLink />', () => {
  it('should not have accessibility violations', async done => {
    const title = 'only necessary if you can not write descriptive link texts';
    const { container, unmount } = render(
      <ul>
        <NavLink href="#" current={true} isFocused={false} title={title}>
          Link Text
        </NavLink>
      </ul>
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should have all the relevant a11y attributes', () => {
    const title = 'only necessary if you can not write descriptive link texts';
    const { getByTestId } = render(
      <NavLink href="#" current={true} isFocused={false} title={title}>
        Link Text
      </NavLink>
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a.getAttribute('href')).toBe('#');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(a.getAttribute('aria-label')).toBe('current page');
    expect(a.getAttribute('title')).toBe(title)
    cleanup();
  });

  it('should not have the a11y attributes', () => {
    const { getByTestId } = render(
      <NavLink href="#" current={false} isFocused={false}>
        Link Text
      </NavLink>
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a.getAttribute('href')).toBe('#');
    expect(a.getAttribute('aria-current')).toBeNull();
    expect(a.getAttribute('aria-label')).toBeNull();
    expect(a.getAttribute('title')).toBeNull();
    cleanup();
  });

  it('should have required styling', () => {
    const { getByTestId } = render(
      <NavLink href="#" current={false} isFocused={false}>
        Link Text
      </NavLink>
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    const liStyles = getComputedStyle(li);
    const aStyles = getComputedStyle(a);
    console.log(liStyles, aStyles);
    cleanup();
  });
});
