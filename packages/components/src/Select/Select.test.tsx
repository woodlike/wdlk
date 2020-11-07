import React from 'react';
import { matchers } from 'jest-emotion';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { theme, Select } from '..';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(matchers);
expect.extend(toHaveNoViolations);

describe('<Select />', () => {
  describe('Accessibility validation', () => {
    it('should not have any accessibility violations', async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={3}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={3}>
              test
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );

      const a11yResults = await axe(container);
      expect(a11yResults).toHaveNoViolations();
      cleanup();
      unmount();
      done();
    });
  });
  describe('Frame size configuration', () => {
    const id = 'Test Select Frame';
    const { fontSizes } = theme;
    const SIZE_FACTOR = 2.5;
    it('should return the 1st fontsize from theme scale on missing item ', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            {id}
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule(
        'grid-template-columns',
        `repeat(auto-fit,${fontSizes[0] * SIZE_FACTOR}px)`,
      );
      expect(item).toHaveStyleRule(
        'grid-column-gap',
        `${(fontSizes[0] * SIZE_FACTOR) / SIZE_FACTOR}px`,
      );
      unmount();
    });

    it('should return the 3rd fontsize from theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={3}>
            {id}
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule(
        'grid-template-columns',
        `repeat(auto-fit,${fontSizes[3] * SIZE_FACTOR}px)`,
      );
      expect(item).toHaveStyleRule(
        'grid-column-gap',
        `${(fontSizes[3] * SIZE_FACTOR) / SIZE_FACTOR}px`,
      );
      unmount();
    });
  });
  describe('Tile size configuration', () => {
    const id = 'Test Select Item';
    const { fontSizes } = theme;
    const SIZE_FACTOR = 2.5;
    it('should return the 1st fontsize from theme scale on missing item ', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={fontSizes.length}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('font-size', `${fontSizes[0]}px`);
      expect(item).toHaveStyleRule('width', `${fontSizes[0] * SIZE_FACTOR}px`);
      expect(item).toHaveStyleRule('height', `${fontSizes[0] * SIZE_FACTOR}px`);
      unmount();
    });

    it('should return the 3rd fontsize from theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={3}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={3}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('font-size', `${fontSizes[3]}px`);
      expect(item).toHaveStyleRule('width', `${fontSizes[3] * SIZE_FACTOR}px`);
      expect(item).toHaveStyleRule('height', `${fontSizes[3] * SIZE_FACTOR}px`);
      unmount();
    });

    it('should return the 5th fontsize from theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={5}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('font-size', `${fontSizes[5]}px`);
      expect(item).toHaveStyleRule('width', `${fontSizes[5] * SIZE_FACTOR}px`);
      expect(item).toHaveStyleRule('height', `${fontSizes[5] * SIZE_FACTOR}px`);
      unmount();
    });
  });

  describe('borderWidth configuration', () => {
    const id = 'Test Select Item';
    const { borderWidths } = theme;
    it('should return the 1st borderWidth as default', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={0}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('border-width', `${borderWidths[1]}px`);
      unmount();
    });

    it('should return the 1st borderWidth from theme scale on missing item', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              borderWidth={borderWidths.length}
              fontSize={0}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('border-width', `${borderWidths[0]}px`);
      unmount();
    });

    it('should return the 3rd borderWidth from theme scale', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={3}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={3}
              borderWidth={3}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toHaveStyleRule('border-width', `${borderWidths[3]}px`);
      unmount();
    });
  });

  describe('Active State', () => {
    const id = 'Test Select Item';
    it('should have the borders color as default', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={false}
              fontSize={0}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);

      expect(item).toMatchInlineSnapshot(`
        .emotion-0 {
          width: 30px;
          height: 30px;
          border-width: 1px;
          border-style: solid;
          line-height: 30px;
          color: currentColor;
          border-color: rgb(222,223,224);
          cursor: pointer;
          pointer-events: all;
          -webkit-text-decoration: none;
          text-decoration: none;
          list-style: none;
          font-family: museo-sans,Helvetica,sans-serif;
          font-size: 12px;
          text-align: center;
        }

        <li
          aria-selected="false"
          class="emotion-0"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `);
      unmount();
    });

    it('should have the active borders color', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              isAvailable={true}
              id="0"
              onClick={() => jest.fn()}
              isActive={true}
              fontSize={0}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);

      expect(item).toMatchInlineSnapshot(`
        .emotion-0 {
          width: 30px;
          height: 30px;
          border-width: 1px;
          border-style: solid;
          line-height: 30px;
          color: currentColor;
          border-color: rgb(34,34,34);
          cursor: pointer;
          pointer-events: all;
          -webkit-text-decoration: none;
          text-decoration: none;
          list-style: none;
          font-family: museo-sans,Helvetica,sans-serif;
          font-size: 12px;
          text-align: center;
        }

        <li
          aria-selected="true"
          class="emotion-0"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `);
      unmount();
    });

    it('should have the disabled styles', () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={'0'}
            fontSize={0}>
            <Select.Item
              id="0"
              isAvailable={false}
              isActive={true}
              onClick={() => jest.fn()}
              fontSize={0}>
              {id}
            </Select.Item>
          </Select.Frame>
        </ThemeProvider>,
      );
      const item = getByText(id);
      expect(item).toMatchInlineSnapshot(`
        .emotion-0 {
          width: 30px;
          height: 30px;
          border-width: 1px;
          border-style: solid;
          line-height: 30px;
          color: rgb(222,223,224);
          border-color: rgb(222,223,224);
          cursor: unset;
          pointer-events: none;
          -webkit-text-decoration: line-through;
          text-decoration: line-through;
          list-style: none;
          font-family: museo-sans,Helvetica,sans-serif;
          font-size: 12px;
          text-align: center;
        }

        <li
          aria-selected="true"
          class="emotion-0"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `);
      unmount();
    });
  });
});
