import { Small, theme } from ".."

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"
import { render } from "@testing-library/react"

expect.extend(matchers)

describe("<Small />", () => {
  let testId: string
  beforeEach(() => {
    testId = "test-small"
  })

  afterEach(() => {
    testId = (undefined as unknown) as string
  })

  describe("Sizes", () => {
    it("should not have a font-size on mising size prop", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null}>{testId}</Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).not.toHaveStyleRule(
        "font-size",
        `${theme.small.s.fontSize}`,
      )
      unmount()
    })

    it("should not have a S font-size ", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size="s">{testId}</Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).not.toHaveStyleRule(
        "font-size",
        `${theme.small.s.fontSize}`,
      )
      unmount()
    })

    it("should not have a M font-size ", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size="m">{testId}</Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).not.toHaveStyleRule(
        "font-size",
        `${theme.small.m.fontSize}`,
      )
      unmount()
    })

    it("should not have a L font-size ", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size="l">{testId}</Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).not.toHaveStyleRule(
        "font-size",
        `${theme.small.l.fontSize}`,
      )
      unmount()
    })
  })

  describe("Color", () => {
    it("should not have a primary color as default", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null}>{testId}</Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).toHaveStyleRule("color", theme.colors.primary)
      unmount()
    })

    it("should not have a primary color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null} color="primary">
            {testId}
          </Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).toHaveStyleRule("color", theme.colors.primary)
      unmount()
    })

    it("should not have a secondary color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null} color="secondary">
            {testId}
          </Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).toHaveStyleRule("color", theme.colors.secondary)
      unmount()
    })

    it("should not have a text color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null} color="text">
            {testId}
          </Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).toHaveStyleRule("color", theme.colors.text)
      unmount()
    })

    it("should not have a muted color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Small size={null} color="muted">
            {testId}
          </Small>
        </ThemeProvider>,
      )
      const small = getByText(testId)
      expect(small).toHaveStyleRule("color", theme.colors.muted)
      unmount()
    })
  })
})
