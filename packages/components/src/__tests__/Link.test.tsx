import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import { Link } from ".."
import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"
import { theme } from "../theme"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Link />", () => {
  let testId: string
  beforeEach(() => {
    testId = "test-link"
  })

  afterEach(() => {
    testId = (undefined as unknown) as string
  })

  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Link size="s">{testId}</Link>
      </ThemeProvider>,
    )

    const a11yResults = await axe(container)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  describe("Size", () => {
    it("should have the size S styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="s">{testId}</Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("font-size", `${theme.link.s.fontSize}px`)
      unmount()
    })

    it("should have the size M styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="m">{testId}</Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("font-size", `${theme.link.m.fontSize}px`)
      unmount()
    })

    it("should have the size L styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="l">{testId}</Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("font-size", `${theme.link.l.fontSize}px`)
      unmount()
    })

    it("should have the size L styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="xl">{testId}</Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("font-size", `${theme.link.xl.fontSize}px`)
      unmount()
    })
  })

  describe("Color", () => {
    it("should have the link primary color on missing prop", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="s" color="primary">
            {testId}
          </Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("color", theme.link.color.primary.default)
      expect(link).toHaveStyleRule("color", theme.link.color.primary.hover, {
        target: ":hover",
      })
      unmount()
    })
    it("should have the link primary color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="s" color="primary">
            {testId}
          </Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("color", theme.link.color.primary.default)
      expect(link).toHaveStyleRule("color", theme.link.color.primary.hover, {
        target: ":hover",
      })
      unmount()
    })

    it("should have the link secondary color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="s" color="secondary">
            {testId}
          </Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("color", theme.link.color.secondary.default)
      expect(link).toHaveStyleRule("color", theme.link.color.secondary.hover, {
        target: ":hover",
      })
      unmount()
    })

    it("should have the link tertiary color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Link size="s" color="tertiary">
            {testId}
          </Link>
        </ThemeProvider>,
      )
      const link = getByText(testId)
      expect(link).toHaveStyleRule("color", theme.link.color.tertiary.default)
      expect(link).toHaveStyleRule("color", theme.link.color.tertiary.hover, {
        target: ":hover",
      })
      unmount()
    })
  })
})
