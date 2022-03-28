import { Button, BUTTON_LOADING_Y_KEY, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Button />", () => {
  describe("Accessibility validation", () => {
    it("should not have any accessibility violations", async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()}>Test Button</Button>
        </ThemeProvider>,
      )

      const a11yResults = await axe(container)
      expect(a11yResults).toHaveNoViolations()
      cleanup()
      unmount()
      done()
    })
  })

  describe("ScaleArea (padding)", () => {
    const id = "button-test-id"
    const { space } = theme
    it("should use the second scale on missing padding prop", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()}>{id}</Button>
        </ThemeProvider>,
      )
      const button = getByText(id)
      expect(button).toHaveStyleRule(
        "padding",
        `${space[1]}px ${space[1]}px ${space[1]}px ${space[1]}px`,
      )
      unmount()
    })

    it("should have a padding that matches with the provided ScaleArea (shorthand)", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()} padding={5}>
            {id}
          </Button>
        </ThemeProvider>,
      )
      const button = getByText(id)
      expect(button).toHaveStyleRule(
        "padding",
        `${space[5]}px ${space[5]}px ${space[5]}px ${space[5]}px`,
      )
      unmount()
    })

    it("should have a padding that matches with the provided ScaleArea (vertical | horizontal)", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()} padding={[2, 4]}>
            {id}
          </Button>
        </ThemeProvider>,
      )
      const button = getByText(id)
      expect(button).toHaveStyleRule(
        "padding",
        `${space[2]}px ${space[4]}px ${space[2]}px ${space[4]}px`,
      )
      unmount()
    })

    it("should have a padding that matches with the provided ScaleArea (top | right | bottom | left)", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()} padding={[1, 2, 3, 4]}>
            {id}
          </Button>
        </ThemeProvider>,
      )
      const button = getByText(id)
      expect(button).toHaveStyleRule(
        "padding",
        `${space[1]}px ${space[2]}px ${space[3]}px ${space[4]}px`,
      )
      unmount()
    })
  })

  describe("Variant properties", () => {
    const id = "button-test-id"
    const { buttons } = theme


    it("should have the primary variant styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" onClick={() => jest.fn()}>
            {id}
          </Button>
        </ThemeProvider>,
      )
      const button = getByText(id)
      expect(button).toHaveStyleRule("color", buttons.primary.color)
      expect(button).toHaveStyleRule(
        "border-color",
        buttons.primary.color,
      )
      expect(button).toHaveStyleRule("background-color", buttons.primary.bg, {
        target: "::before",
      })
      unmount()
    })


  })

  describe("Inverted properties", () => {
    const id = "button-test-id"
    const { buttons } = theme
    it("should have the inverted styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="secondary" onClick={() => jest.fn()}>
            {id}
          </Button>
        </ThemeProvider>,
      )

      const button = getByText(id)

      expect(button).toHaveStyleRule("color", buttons.secondary.color)
      expect(button).toHaveStyleRule(
        "border-color",
        buttons.secondary.color,
      )
      unmount()
    })
  })

  describe("Disabled Styles", () => {
    const id = "button-test-id"
    const { buttons } = theme
    it("should have the primary disabled styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" disabled onClick={() => jest.fn()}>
            {id}
          </Button>
        </ThemeProvider>,
      )

      const button = getByText(id)

      expect(button).toHaveStyleRule("color", buttons.primary.color)
      expect(button).toHaveStyleRule(
        "background-color",
        buttons.primary.disabled,
        {target: "::before"},
      )

      unmount()
    })

    it("should have the secondary disabled styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="secondary" disabled onClick={() => jest.fn()}>
            {id}
          </Button>
        </ThemeProvider>,
      )

      const button = getByText(id)

      expect(button).toHaveStyleRule("color", buttons.secondary.color)
      expect(button).toHaveStyleRule(
        "background-color",
        buttons.secondary.disabled,
        {target: "::before"},
      )

      unmount()
    })
  })

  describe("Loading", () => {
    const id = "button-test-id"
    const { buttons } = theme
    it("should have the primary disabled styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Button variant="primary" isLoading loadingCounter={10} onClick={() => jest.fn()}>
            {id}
          </Button>
        </ThemeProvider>,
      )

      const button = getByText(id)

      expect(button).toHaveStyleRule("color", buttons.primary.color)

      expect(button).toHaveStyleRule(
        "background-color",
        buttons.primary.disabled,
        {target: "::before"},
      )
      expect(button).toHaveStyleRule(
        "background-color",
        buttons.primary.bg,
        {target: "::after"},
      )

      unmount()
    })

  })

})
