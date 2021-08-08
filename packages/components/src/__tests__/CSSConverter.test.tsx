import { CSSConverter } from ".."
import React from "react"
import { matchers } from "@emotion/jest"
import { render } from "@testing-library/react"

expect.extend(matchers)

describe("<CSSConverter />", () => {
  let testId: string
  let color: string
  let backgroundColor: string
  let fontStyle: "italic" | "normal"
  let textDecoration: string

  beforeEach(() => {
    color = "rgb(7, 212, 182)"
    backgroundColor = "#e09142"
    fontStyle = "italic"
    textDecoration = "line-through"
    testId = "test-cssconverter"
  })

  afterEach(() => {
    color = (undefined as unknown) as string
    backgroundColor = (undefined as unknown) as string
    fontStyle = (undefined as unknown) as "italic" | "normal"
    textDecoration = (undefined as unknown) as string
    testId = (undefined as unknown) as string
  })

  describe("Component", () => {
    it("should not have any style properties", () => {
      const { getByText, unmount } = render(
        <CSSConverter cssObject={undefined}>{testId}</CSSConverter>,
      )
      const styledElement = getByText(testId)
      expect(styledElement).not.toHaveStyleRule("color", color)
      expect(styledElement).not.toHaveStyleRule(
        "background-color",
        backgroundColor,
      )
      unmount()
    })

    it("should return a formatted string style rule declaration", () => {
      const { getByText, unmount } = render(
        <CSSConverter
          cssObject={{ backgroundColor, color, fontStyle, textDecoration }}>
          {testId}
        </CSSConverter>,
      )
      const styledElement = getByText(testId)
      expect(styledElement).toHaveStyleRule("color", color)
      expect(styledElement).toHaveStyleRule("background-color", backgroundColor)
      expect(styledElement).toHaveStyleRule("font-style", fontStyle)
      expect(styledElement).toHaveStyleRule("text-decoration", textDecoration)
      unmount()
    })
  })
})
