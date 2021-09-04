import { Layer, LayerShim, theme } from ".."
import { cleanup, render } from "../../testing-library"

import React from "react"
import { axe } from "jest-axe"
import { matchers } from "@emotion/jest"

expect.extend(matchers)

describe("<Layer />", () => {
  let id: string

  beforeEach(() => {
    id = "layer-test-id"
  })

  afterEach(() => {
    id = (undefined as unknown) as string
  })

  describe("Accessibility", () => {
    it("should not have accessibility violations", async done => {
      const { container, unmount } = render(
        <Layer isOpen={true} padding={[2, 5]}>
          {id}
        </Layer>,
      )

      const a11yResults = await axe(container)
      expect(a11yResults).toHaveNoViolations()
      cleanup()
      unmount()
      done()
    })
  })

  describe("Visibility", () => {
    it("should have a visible Layer", () => {
      const { getByText, unmount } = render(
        <Layer isOpen={true} padding={[2, 5]}>
          {id}
        </Layer>,
      )
      const layer = getByText(id)
      expect(layer).toHaveStyleRule("transform", "translate3d(0, 0, 0)")
      expect(layer).toHaveStyleRule("opacity", "1")
      expect(layer).toHaveStyleRule("top", `${theme.layer.top}px`, {
        media: `(min-width: ${theme.breakpoints[2]})`,
      })
      unmount()
    })

    it("should not have a visible Layer", () => {
      const { getByText, unmount } = render(
        <Layer isOpen={false} padding={[2, 5]}>
          {id}
        </Layer>,
      )
      const layer = getByText(id)
      expect(layer).toHaveStyleRule("transform", "translate3d(0, 100%, 0)")
      expect(layer).toHaveStyleRule("opacity", "0")
      expect(layer).toHaveStyleRule("top", `${theme.layer.top}px`, {
        media: `(min-width: ${theme.breakpoints[2]})`,
      })
      unmount()
    })

    it("should have a visible Shim", () => {
      const { getByText, unmount } = render(
        <>
          <Layer isOpen={true} padding={[2, 5]}>
            {id}
          </Layer>
          <LayerShim isOpen={true} />
        </>,
      )
      const shim = getByText(id).nextSibling
      expect(shim).toHaveStyleRule("opacity", "0.8")
      expect(shim).toHaveStyleRule("pointer-events", "auto")
      unmount()
    })

    it("should not have a visible Shim", () => {
      const { getByText, unmount } = render(
        <>
          <Layer isOpen={false} padding={[2, 5]}>
            {id}
          </Layer>
          <LayerShim isOpen={false} />
        </>,
      )
      const shim = getByText(id).nextSibling
      expect(shim).toHaveStyleRule("opacity", "0")
      expect(shim).toHaveStyleRule("pointer-events", "none")
      unmount()
    })
  })

  describe("Spacing", () => {
    it("should translate the provided scales to padding values", () => {
      const { getByText, unmount } = render(
        <Layer isOpen={false} padding={[2, 5]}>
          {id}
        </Layer>,
      )
      const layer = getByText(id)
      expect(layer).toHaveStyleRule(
        "padding",
        `${theme.space[2]}px ${theme.space[5]}px ${theme.space[2]}px ${theme.space[5]}px`,
      )

      unmount()
    })
  })
})
