import { Column, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "../../testing-library"

import React from "react"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Column />", () => {
  let id: string

  beforeEach(() => {
    id = "test-column"
  })

  afterEach(() => {
    id = (undefined as unknown) as string
  })

  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(<Column>{id}</Column>)

    const a11yResults = await axe(container)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  describe("flex basis", () => {
    it("should not have flex style property", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column>{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id) as HTMLElement
      const style = getComputedStyle(column)
      expect(style.getPropertyValue("flex")).toBeFalsy()
      unmount()
    })

    it("should not have flex style property on fluid prop", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="fluid">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id) as HTMLElement
      const style = getComputedStyle(column)
      expect(style.getPropertyValue("flex")).toBeFalsy()
      unmount()
    })

    it("should have a flex basis style of 50%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="1/2">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id) as HTMLElement
      expect(column).toHaveStyleRule("flex", "0 0 50%")
      unmount()
    })

    it("should have a flex basis style of 33.333333333333336%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="1/3">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 33.333333333333336%")
      unmount()
    })

    it("should have a flex basis style of 66.66666666666667%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="2/3">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 66.66666666666667%")
      unmount()
    })

    it("should have a flex basis style of 25%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="1/4">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 25%")
      unmount()
    })

    it("should have a flex basis style of 75%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="3/4">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 75%")
      unmount()
    })

    it("should have a flex basis style of 20%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="1/5">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 20%")
      unmount()
    })

    it("should have a flex basis style of 40%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="2/5">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 40%")
      unmount()
    })

    it("should have a flex basis style of 60%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="3/5">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 60%")
      unmount()
    })

    it("should have a flex basis style of 80%", () => {
      const { queryByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column basis="4/5">{id}</Column>
        </ThemeProvider>,
      )
      const column = queryByText(id)
      expect(column).toHaveStyleRule("flex", "0 0 80%")
      unmount()
    })
  })

  describe("Space padding", () => {
    it("(top | right | bottom | left): handles the theme box padding internally", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Column padding={[2, 6]}>{id}</Column>
        </ThemeProvider>,
      )
      const column = getByText(id)
      expect(column).toHaveStyleRule(
        "padding",
        `${theme.space[2]}px ${theme.space[6]}px ${theme.space[2]}px ${theme.space[6]}px`,
      )
      unmount()
    })
  })
})
