import { CSSConverter, CSS_CONTAINER_TEST_ID } from ".."
import React from "react"
import { matchers } from "@emotion/jest"
import { render, screen } from "@testing-library/react"

expect.extend(matchers)

describe("<CSSConverter />", () => {
  let color: string
  let backgroundColor: string
  let fontStyle: "italic" | "normal"
  let textDecoration: string

  beforeEach(() => {
    color = "rgb(7, 212, 182)"
    backgroundColor = "#e09142"
    fontStyle = "italic"
    textDecoration = "line-through"
  })

  afterEach(() => {
    color = (undefined as unknown) as string
    backgroundColor = (undefined as unknown) as string
    fontStyle = (undefined as unknown) as "italic" | "normal"
    textDecoration = (undefined as unknown) as string
  })

  describe("Component", () => {
    it("should not have any style properties", () => {
      const { unmount } = render(
        <CSSConverter cssObject={undefined} />
      )
      const styledElement = screen.getByTestId(CSS_CONTAINER_TEST_ID)
      expect(styledElement).not.toHaveStyleRule("color", color)
      expect(styledElement).not.toHaveStyleRule(
        "background-color",
        backgroundColor,
      )
      unmount()
    })

    it("should return a formatted string style rule declaration", () => {
      const { unmount } = render(
        <CSSConverter
          cssObject={{ backgroundColor, color, fontStyle, textDecoration }} />
      )
      const styledElement = screen.getByTestId(CSS_CONTAINER_TEST_ID)
      expect(styledElement).toHaveStyleRule("color", color)
      expect(styledElement).toHaveStyleRule("background-color", backgroundColor)
      expect(styledElement).toHaveStyleRule("font-style", fontStyle)
      expect(styledElement).toHaveStyleRule("text-decoration", textDecoration)
      unmount()
    })
  })
})
