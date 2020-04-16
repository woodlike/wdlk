/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render, cleanup } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Logo } from '.';
import { qt } from '../theme/query';

expect.extend(toHaveNoViolations);
describe('Logo', () => {
  let logoTitle: string;
  let logoDesc: string;

  beforeAll(() => {
    logoTitle = 'Woodlike Ocean - Sustainable Swimwear crafted from ocean recovered fishing nets';
    logoDesc = 'The Woodlike Ocean logo represents the moving water waves made by a drop of water';
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(<Logo href="#" title={logoTitle} desc={logoDesc} isFocused={true} />);

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should include an accessible title for screen readers', () => {
    const { container, unmount } = render(<Logo href="#" title={logoTitle} desc={logoDesc} isFocused={true} />);

    const svg = container.querySelector('svg') as SVGElement;
    const title = svg.querySelector('title');
    expect(svg.hasAttribute('aria-labelledby')).toBeTruthy();
    expect(svg.getAttribute('aria-labelledby')).toMatch('logo-title-aria-id');
    expect(title.innerHTML).toMatch(logoTitle);
    unmount();
  });

  it('should include an accessible description for screen readers', () => {
    const { container, unmount } = render(<Logo href="#" title={logoTitle} desc={logoDesc} isFocused={true} />);
    const desc = container.querySelector('desc') as SVGDescElement;
    expect(desc.innerHTML).toMatch(logoDesc);
    unmount();
  });

  it('it should render with the default colors', () => {
    const { getByTestId, unmount } = render(<Logo href="#" title={logoTitle} desc={logoDesc} isFocused={true} />);
    const a = getByTestId('logo-test-id');
    const svg = a.querySelector('svg') as SVGElement;
    const styles = getComputedStyle(svg);
    expect(styles.getPropertyValue('color')).toMatch((qt('corals')(0) as unknown) as string);
    unmount();
  });
});
