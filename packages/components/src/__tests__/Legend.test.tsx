import { Legend, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Legend />", () => {
  let testId: string
  beforeEach(() => {
    testId = "test-legend"
  })

  afterEach(() => {
    testId = (undefined as unknown) as string
  })

  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Legend size="s">test-legend</Legend>
      </ThemeProvider>,
    )

    const a11yResults = await axe(container)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  describe("Size", () => {
    it("should have the size S font-size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="s">{testId}</Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule(
        "font-size",
        `${theme.legend.s.fontSize}px`,
      )
      unmount()
    })

    it("should have the size M font-size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="m">{testId}</Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule(
        "font-size",
        `${theme.legend.m.fontSize}px`,
      )
      unmount()
    })

    it("should have the size L font-size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="l">{testId}</Legend>
        </ThemeProvider>,
      )

      const legend = getByText(testId)
      expect(legend).toHaveStyleRule(
        "font-size",
        `${theme.legend.l.fontSize}px`,
      )
      unmount()
    })
  })

  describe("Font Family", () => {
    it("should have the legend variant font-family", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="s">test-legend</Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule("font-family", theme.legend.fontFamily)
      unmount()
    })
  })

  describe("Font Type", () => {
    it("should have the styling for a primary type", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="s">test-legend</Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule("text-transform", "uppercase")
      unmount()
    })

    it("should have the styling for a secondary type", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="s" type="secondary">
            test-legend
          </Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule("text-transform", "capitalize")
      unmount()
    })
  })

  describe("Color", () => {
    it("should have the legend variant color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Legend size="s">test-legend</Legend>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule("color", theme.legend.color)
      unmount()
    })
  })
})
