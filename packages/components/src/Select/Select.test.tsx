import { Select, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Select />", () => {
  describe("Accessibility validation", () => {
    it("should not have any accessibility violations", async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )

      const a11yResults = await axe(container)
      expect(a11yResults).toHaveNoViolations()
      cleanup()
      unmount()
      done()
    })
  })
  describe("Frame size configuration", () => {
    const id = "Test Select Frame"
    const { fontSizes } = theme
    const SIZE_FACTOR = 2.5
    it("should return the 1st fontsize from theme scale on missing item ", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
            fontSize={0}>
            {id}
          </Select.Frame>
        </ThemeProvider>,
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule(
        "grid-template-columns",
        `repeat(auto-fit, ${fontSizes[0] * SIZE_FACTOR}px)`,
      )
      expect(item).toHaveStyleRule(
        "grid-column-gap",
        `${(fontSizes[0] * SIZE_FACTOR) / SIZE_FACTOR}px`,
      )
      unmount()
    })

    it("should return the 3rd fontsize from theme scale", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
            fontSize={3}>
            {id}
          </Select.Frame>
        </ThemeProvider>,
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule(
        "grid-template-columns",
        `repeat(auto-fit, ${fontSizes[3] * SIZE_FACTOR}px)`,
      )
      expect(item).toHaveStyleRule(
        "grid-column-gap",
        `${(fontSizes[3] * SIZE_FACTOR) / SIZE_FACTOR}px`,
      )
      unmount()
    })
  })
  describe("Tile size configuration", () => {
    const id = "Test Select Item"
    const { fontSizes } = theme
    const SIZE_FACTOR = 2.5
    it("should return the 1st fontsize from theme scale on missing item ", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("font-size", `${fontSizes[0]}px`)
      expect(item).toHaveStyleRule("width", `${fontSizes[0] * SIZE_FACTOR}px`)
      expect(item).toHaveStyleRule("height", `${fontSizes[0] * SIZE_FACTOR}px`)
      unmount()
    })

    it("should return the 3rd fontsize from theme scale", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("font-size", `${fontSizes[3]}px`)
      expect(item).toHaveStyleRule("width", `${fontSizes[3] * SIZE_FACTOR}px`)
      expect(item).toHaveStyleRule("height", `${fontSizes[3] * SIZE_FACTOR}px`)
      unmount()
    })

    it("should return the 5th fontsize from theme scale", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("font-size", `${fontSizes[5]}px`)
      expect(item).toHaveStyleRule("width", `${fontSizes[5] * SIZE_FACTOR}px`)
      expect(item).toHaveStyleRule("height", `${fontSizes[5] * SIZE_FACTOR}px`)
      unmount()
    })
  })

  describe("borderWidth configuration", () => {
    const id = "Test Select Item"
    const { borderWidths } = theme
    it("should return the 1st borderWidth as default", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("border-width", `${borderWidths[1]}px`)
      unmount()
    })

    it("should return the 1st borderWidth from theme scale on missing item", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("border-width", `${borderWidths[0]}px`)
      unmount()
    })

    it("should return the 3rd borderWidth from theme scale", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toHaveStyleRule("border-width", `${borderWidths[3]}px`)
      unmount()
    })
  })

  describe("Active State", () => {
    const id = "Test Select Item"
    it("should have the borders color as default", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)

      expect(item).toMatchInlineSnapshot(`
        <li
          aria-selected="false"
          class="css-1ldtis3"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `)
      unmount()
    })

    it("should have the active borders color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)

      expect(item).toMatchInlineSnapshot(`
        <li
          aria-selected="true"
          class="css-n9c3w7"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `)
      unmount()
    })

    it("should have the disabled styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Select.Frame
            ariaLabel="size-select"
            ariaActivedescendant={"0"}
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
      )
      const item = getByText(id)
      expect(item).toMatchInlineSnapshot(`
        <li
          aria-selected="true"
          class="css-4p8q0i"
          font-size="0"
          id="0"
          role="option"
        >
          Test Select Item
        </li>
      `)
      unmount()
    })
  })
})
