import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { axe, toHaveNoViolations } from 'jest-axe';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { theme, Stack } from '..';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Stack />', () => {
  let testId: string;
  beforeEach(() => {
    testId = 'test-stack';
  });

  afterEach(() => {
    testId = (undefined as unknown) as string;
  });

  it('should not have accessibility violations', async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Stack as="div" space={3}>
          {testId}
        </Stack>
      </ThemeProvider>,
    );

    const a11yResults = await axe(container);
    expect(a11yResults).toHaveNoViolations();
    cleanup();
    unmount();
    done();
  });

  describe('Grid Row Gap', () => {
    it('should use the second space theme on a missing space value', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Stack as="div" space={25}>
            {testId}
          </Stack>
        </ThemeProvider>,
      );
      const stack = getByText(testId);
      expect(stack).toHaveStyleRule('grid-row-gap', `${theme.space[1]}px`);
      expect(stack).toHaveStyleRule('display', 'grid');
      unmount();
    });

    it('should have a bottom spacing from the 3rd space theme', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Stack as="div" space={3}>
            {testId}
          </Stack>
        </ThemeProvider>,
      );
      const stack = getByText(testId);
      expect(stack).toHaveStyleRule('grid-row-gap', `${theme.space[3]}px`);
      expect(stack).toHaveStyleRule('display', 'grid');
      unmount();
    });

    it('should have a bottom spacing from the 5th space theme', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Stack as="div" space={5}>
            {testId}
          </Stack>
        </ThemeProvider>,
      );
      const stack = getByText(testId);
      expect(stack).toHaveStyleRule('grid-row-gap', `${theme.space[5]}px`);
      expect(stack).toHaveStyleRule('display', 'grid');
      unmount();
    });
  });
});
