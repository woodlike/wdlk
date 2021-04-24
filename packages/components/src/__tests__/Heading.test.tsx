import * as React from "react"

import { Heading, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import { ThemeProvider } from "emotion-theming"
import { matchers } from "jest-emotion"

expect.extend(toHaveNoViolations)
expect.extend(matchers)
describe("<Heading />", () => {
  let testId: string
  beforeEach(() => (testId = "test-heading"))
  afterEach(() => (testId = (undefined as unknown) as string))

  describe("Accessibility validation", () => {
    it("should not have any accessibility violations", async done => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xs" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const a11yResults = await axe(container)
      expect(a11yResults).toHaveNoViolations()
      cleanup()
      unmount()
      done()
    })
  })

  describe("Returns the expeced font size", () => {
    it("should have a font size of 18px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xs" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )
      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.xs.fontSize}px`)
    })

    it("should have a font size of 20px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="s" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.s.fontSize}px`)
    })

    it("should have a font size of 24px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="m" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.m.fontSize}px`)
    })

    it("should have a font size of 32px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="l" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.l.fontSize}px`)
    })

    it("should have a font size of 44px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xl" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.xl.fontSize}px`)
    })

    it("should have a font size of 72px", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xxl" type="primary">
            Healing Flowers Collection
          </Heading>
        </ThemeProvider>,
      )

      const h2 = container.querySelector("h2")
      expect(h2).toHaveStyleRule("font-size", `${theme.heading.xxl.fontSize}px`)
    })
  })

  describe("Font-Family", () => {
    it("should return a primary family", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xxl" type="primary">
            {testId}
          </Heading>
        </ThemeProvider>,
      )
      const heading = getByText(testId)
      expect(heading).toHaveStyleRule(
        "font-family",
        theme.heading.fonts.primary.replace(/\s/g, ""),
      )
      unmount()
    })

    it("should return a secondary family", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xxl" type="secondary">
            {testId}
          </Heading>
        </ThemeProvider>,
      )
      const heading = getByText(testId)
      expect(heading).toHaveStyleRule(
        "font-family",
        theme.heading.fonts.secondary.replace(/\s/g, ""),
      )
      unmount()
    })

    it("should return a campaign family", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" size="xxl" type="campaign">
            {testId}
          </Heading>
        </ThemeProvider>,
      )
      const heading = getByText(testId)
      expect(heading).toHaveStyleRule(
        "font-family",
        theme.heading.fonts.campaign.replace(/\s/g, ""),
      )
      unmount()
    })
  })

  describe("Breakpoint - responsive styles", () => {
    it("should return an xxl growSize font-size on passed breakpoint index", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" breakpoint={2} size="xxl" type="campaign">
            {testId}
          </Heading>
        </ThemeProvider>,
      )

      const heading = getByText(testId)
      const media = `(min-width: ${theme.breakpoints[2]})`

      expect(heading).toHaveStyleRule(
        "font-size",
        `${theme.heading.xxl.growSize}px`,
        {
          media,
        },
      )
      unmount()
    })

    it("should return a default font-size on m size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Heading as="h2" breakpoint={2} size="s" type="campaign">
            {testId}
          </Heading>
        </ThemeProvider>,
      )

      const heading = getByText(testId)
      const media = `(min-width: ${theme.breakpoints[2]})`

      expect(heading).toHaveStyleRule(
        "font-size",
        `${theme.heading.s.fontSize}px`,
        {
          media,
        },
      )
      unmount()
    })
  })
})
