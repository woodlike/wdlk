import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';

import { Accordion } from '.';
import { theme } from '..';

expect.extend(toHaveNoViolations);
expect.extend(matchers);

describe('<Accordion />', () => {
  let heightMock: number;

  beforeEach(() => {
    heightMock = 300;
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 0,
      height: heightMock,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    })) as jest.Mock;
  });

  afterEach(() => {
    heightMock = (undefined as unknown) as number;
  });

  it('should not have any accessibility violations', async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Accordion.Frame>
          <Accordion.Item
            ariaId="one"
            headerSlot={<h2>Title</h2>}
            isExpanded={true}>
            <div>test id one</div>
          </Accordion.Item>
          <Accordion.Item
            ariaId="two"
            headerSlot={<h2>Title</h2>}
            isExpanded={true}>
            <div>test id one</div>
          </Accordion.Item>
        </Accordion.Frame>
      </ThemeProvider>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  it('should have a default expanded Accordion', () => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Accordion.Frame>
          <Accordion.Item
            ariaId="one"
            headerSlot={<h2>Title</h2>}
            isExpanded={true}>
            <div style={{ height: '200px' }}>test id one</div>
          </Accordion.Item>
          <Accordion.Item
            ariaId="two"
            headerSlot={<h2>Title</h2>}
            isExpanded={true}>
            <div>test id two</div>
          </Accordion.Item>
        </Accordion.Frame>
      </ThemeProvider>,
    );

    const itemOne = container.querySelector('#one') as Element;
    const itemTwo = container.querySelector('#two') as Element;

    expect(itemOne).toHaveStyleRule('max-height', `${heightMock}`);
    expect(itemTwo).toHaveStyleRule('max-height', `${heightMock}`);
    unmount();
  });
});
