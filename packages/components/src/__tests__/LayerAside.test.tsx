import { LayerAside, theme } from ".."
import { cleanup, render } from "../../testing-library"

import React from "react"
import { axe } from "jest-axe"
import { matchers } from "@emotion/jest"

expect.extend(matchers)

describe("LayerAside", () => {
  let id: string
  beforeEach(() => {
    id = "aside-layer"
  })

  afterEach(() => {
    id = (undefined as unknown) as string
  })

  describe("Accessibility", () => {
    it("should not have accessibility violations", async done => {
      const { container, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )

      const a11yResults = await axe(container)
      expect(a11yResults).toHaveNoViolations()
      cleanup()
      unmount()
      done()
    })
  })

  describe("Visibility", () => {
    it("should have a visible layer", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("transform", "translate3d(0, 0, 0)")
      unmount()
    })

    it("should have a unvisible layer - position right", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={false} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("transform", "translate3d(100%, 0, 0)")
      unmount()
    })

    it("should have a unvisible layer - position left", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={false} padding={[2, 5]} position="left">
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule(
        "transform",
        "translate3d(-100%, 0, 0)",
      )
      unmount()
    })
  })

  describe("Dimensions", () => {
    it("should have full viewport width as default value", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("width", "100vw")
      unmount()
    })

    it("should have a 50vw default on the defined theme breakpoint", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("width", "50vw", {
        media: `(min-width: ${theme.breakpoints[2]})`,
      })
      unmount()
    })

    it("should have a theme defined width on the specified breakpoint", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule(
        "max-width",
        theme.layerAside.maxWidth,
        {
          media: `(min-width: ${theme.breakpoints[2]})`,
        },
      )
      unmount()
    })

    it("should have the specified theme top position", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule(
        "height",
        `calc(100vh - ${theme.layerAside.top}px)`,
      )
      unmount()
    })

    it("should have a top 0 position on the defined breakpoint", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("height", `100vh`, {
        media: `(min-width: ${theme.breakpoints[2]})`,
      })
      unmount()
    })
  })

  describe("Layer position", () => {
    it("should be fixed to right by default", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]}>
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("right", "0")
      unmount()
    })

    it("should be fixed to right by configuration", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]} position="right">
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("right", "0")
      unmount()
    })

    it("should be fixed to left by configuration", () => {
      const { getByText, unmount } = render(
        <LayerAside isOpen={true} padding={[2, 5]} position="left">
          {id}
        </LayerAside>,
      )
      const layerAside = getByText(id)
      expect(layerAside).toHaveStyleRule("left", "0")
      unmount()
    })
  })
})
