import { Text, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Text />", () => {
  let testId: string
  beforeEach(() => {
    testId = "test-text"
  })

  afterEach(() => {
    testId = (undefined as unknown) as string
  })

  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Text size="s">{testId}</Text>
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
          <Text size="s">{testId}</Text>
        </ThemeProvider>,
      )
      const text = getByText(testId)
      expect(text).toHaveStyleRule("font-size", `${theme.text.s.fontSize}px`)
      unmount()
    })

    it("should have the size M font-size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text size="m">{testId}</Text>
        </ThemeProvider>,
      )
      const text = getByText(testId)
      expect(text).toHaveStyleRule("font-size", `${theme.text.m.fontSize}px`)
      unmount()
    })

    it("should have the size L font-size", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text size="l">{testId}</Text>
        </ThemeProvider>,
      )

      const text = getByText(testId)
      expect(text).toHaveStyleRule("font-size", `${theme.text.l.fontSize}px`)
      unmount()
    })
  })

  describe("Font Family", () => {
    it("should have the legend variant font-family", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text size="s">{testId}</Text>
        </ThemeProvider>,
      )
      const legend = getByText(testId)
      expect(legend).toHaveStyleRule(
        "font-family",
        theme.text.fontFamily.replace(",", ", "),
      )
      unmount()
    })
  })

  describe("Color", () => {
    it("should have the legend variant color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text size="s">{testId}</Text>
        </ThemeProvider>,
      )
      const text = getByText(testId)
      expect(text).toHaveStyleRule("color", theme.text.color)
      unmount()
    })
  })

  describe("Breakpoint - responsive styles", () => {
    it("should return an m growSize font-size on passed breakpoint index", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Text breakpoint={2} size="m">
            {testId}
          </Text>
        </ThemeProvider>,
      )

      const text = getByText(testId)
      const media = `(min-width: ${theme.breakpoints[2]})`

      expect(text).toHaveStyleRule("font-size", `${theme.text.m.growSize}px`, {
        media,
      })
      unmount()
    })
  })
})
