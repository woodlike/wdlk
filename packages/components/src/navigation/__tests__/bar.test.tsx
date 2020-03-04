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
      <Nav.Bar itemCount={4}>
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" />
        <Nav.Link href="#" current={true} isFocused={false} text="Link Text" />
      </Nav.Bar>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });
});
