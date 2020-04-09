import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import * as Nav from '..';
import { qt } from '../../theme/query';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<NavigationLink />', () => {
  it('should not have accessibility violations', async done => {
    const title = 'only necessary if you can not write descriptive link texts';
    const { container, unmount } = render(
      <ul>
        <Nav.Link href="#" current={true} isFocused={false} title={title} context="bar" text="Link Text" />
      </ul>,
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
      <Nav.Link href="#" current={true} isFocused={false} title={title} context="bar" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a.getAttribute('href')).toBe('#');
    expect(a.getAttribute('aria-current')).toBe('page');
    expect(a.getAttribute('aria-label')).toBe('current page');
    expect(a.getAttribute('title')).toBe(title);
    cleanup();
  });

  it('should not have the a11y attributes', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={false} isFocused={false} context="bar" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a.getAttribute('href')).toBe('#');
    expect(a.getAttribute('aria-current')).toBeNull();
    expect(a.getAttribute('aria-label')).toBeNull();
    expect(a.getAttribute('title')).toBeNull();
    cleanup();
  });

  it('should have styling for a current state link', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="bar" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a).toHaveStyleRule('content', '""', { target: '::after' });
    expect(a).toHaveStyleRule('transform', 'scaleX(1)', { target: '::after' });
    expect(a).toHaveStyleRule('transform-origin', '0 0', { target: '::after' });
    expect(a).toHaveStyleRule('width', '100%', { target: '::after' });
    expect(a).toHaveStyleRule('height', `${qt('borderWidths')(0)}px`, {
      target: '::after',
    });
    expect(a).toHaveStyleRule('background-color', 'currentColor', {
      target: '::after',
    });
    cleanup();
  });

  it('should have the styling for an active link', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={false} isFocused={false} isActive={true} context="bar" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a') as HTMLElement;
    expect(a).toHaveStyleRule('content', '""', { target: '::after' });
    expect(a).toHaveStyleRule('transform', 'scaleX(1)', { target: '::after' });
    expect(a).toHaveStyleRule('transform-origin', '0 0', { target: '::after' });
    expect(a).toHaveStyleRule('width', '100%', { target: '::after' });
    expect(a).toHaveStyleRule('height', `${qt('borderWidths')(0)}px`, {
      target: '::after',
    });
    expect(a).toHaveStyleRule('background-color', 'currentColor', {
      target: '::after',
    });
    cleanup();
  });

  it('should recognize styling for a bar context', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="bar" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    expect(li).toHaveStyleRule('justify-self', 'left');
    expect(li).toHaveStyleRule('justify-self', 'center', {
      media: 'screen and (min-width: 40em)',
    });
    cleanup();
  });

  it('should recognize styling for a panel context', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="panel" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    expect(li).toHaveStyleRule('justify-self', 'left');
    cleanup();
  });

  it('should return a size S link', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="panel" size="S" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a');
    expect(a).toHaveStyleRule('font-size', `${qt('fontSizes')(0)}px`);
    expect(a).toHaveStyleRule('margin-bottom', '0');
    cleanup();
  });

  it('should return a size M link', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="panel" size="M" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a');
    expect(a).toHaveStyleRule('font-size', `${qt('fontSizes')(4)}px`);
    expect(a).toHaveStyleRule('text-transform', 'uppercase');
    expect(a).toHaveStyleRule('margin-bottom', `${qt('spaces')(1)}px`);
    cleanup();
  });

  it('should return a size L link', () => {
    const { getByTestId } = render(
      <Nav.Link href="#" current={true} isFocused={false} context="panel" size="L" text="Link Text" />,
    );
    const li = getByTestId('navigation-link-test-id');
    const a = li.querySelector('a');
    expect(a).toHaveStyleRule('font-size', `${qt('fontSizes')(5)}px`);
    expect(a).toHaveStyleRule('text-transform', 'uppercase');
    expect(a).toHaveStyleRule('margin-bottom', `${qt('spaces')(1)}px`);
    cleanup();
  });
});
