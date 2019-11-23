import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { color, toRGBString } from '../../../tokens';
expect.extend(toHaveNoViolations);

import { Logo } from '../';

describe('Logo', () => {
  let logoTitle: string;
  let logoDesc: string;

  beforeAll(() => {
    logoTitle =
      'Woodlike Ocean - Sustainable Swimwear crafted from ocean recovered fishing nets';
    logoDesc =
      'The Woodlike Ocean logo represents the moving water waves made by a drop of water';
  });

  afterAll(() => {
    logoTitle = undefined;
    logoDesc = undefined;
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <Logo title={logoTitle} desc={logoDesc} />
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should include an accessible title for screen readers', () => {
    const { container, unmount } = render(
        <Logo title={logoTitle} desc={logoDesc} />
    );

    const svg = container.querySelector('svg') as SVGElement;
    const title = svg.querySelector('title') as HTMLTitleElement;
    expect(svg.hasAttribute('aria-labelledby')).toBeTruthy();
    expect(svg.getAttribute('aria-labelledby')).toMatch('logo-title-aria-id');
    expect(title.innerHTML).toMatch(logoTitle);
    unmount();
  });

  it('should include an accessible description for screen readers', () => {
    const { container, unmount } = render(
      <>
        <Logo title={logoTitle} desc={logoDesc} />
      </>
    );
    const desc = container.querySelector('desc') as SVGDescElement;
    expect(desc.innerHTML).toMatch(logoDesc);
    unmount();
  });

  it('it should render with the default colors', () => {
    const { container, unmount } = render(
      <>
        <Logo title={logoTitle} desc={logoDesc} />
      </>
    );
    const svg = container.querySelector('svg') as SVGElement;
    const styles = window.getComputedStyle(svg);
    expect(styles.getPropertyValue('color')).toMatch(toRGBString(color.coral));
    unmount();
  });
});
