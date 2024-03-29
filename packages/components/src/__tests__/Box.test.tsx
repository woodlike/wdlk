import * as React from "react"

import { Theme, theme } from ".."

import { Box } from "../Box"
import { ThemeProvider } from "@emotion/react"
import { matchers } from "@emotion/jest"
import { render } from "@testing-library/react"

expect.extend(matchers)

describe("<Box />", () => {
  const id = "Test Box"
  const {
    colors,
    breakpoints,
    borderStyles,
    borderWidths,
    space,
  } = theme as Theme
  describe("Padding handling", () => {
    it("(shorthand): handles a Theme-UI shorthand padding area", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2}>{id}</Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "padding",
        `${space[2]}px ${space[2]}px ${space[2]}px ${space[2]}px`,
      )
      unmount()
    })

    it("(shorthand): handles a Theme-UI shorthand area with min-width breakpoint", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} breakpoint={3} maxPadding={4}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)

      expect(box).toHaveStyleRule(
        "padding",
        `${space[4]}px ${space[4]}px ${space[4]}px ${space[4]}px`,
        {
          media: `(min-width: ${breakpoints[3]})`,
        },
      )
      unmount()
    })

    it("(vertical | horizontal): handles a Theme-UI tuple padding area", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[3, 5]}>{id}</Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "padding",
        `${space[3]}px ${space[5]}px ${space[3]}px ${space[5]}px`,
      )
      unmount()
    })

    it("(top | horizontal | bottom): handles a Theme-UI triple padding area", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[3, 5, 9]}>{id}</Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "padding",
        `${space[3]}px ${space[5]}px ${space[9]}px ${space[5]}px`,
      )
      unmount()
    })

    it("(top | right | bottom | left): handles a Theme-UI triple padding area", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={[2, 6, 3, 2]}>{id}</Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "padding",
        `${space[2]}px ${space[6]}px ${space[3]}px ${space[2]}px`,
      )
      unmount()
    })
  })

  describe("Border width handling", () => {
    it("(shorthand): handles a Theme-UI shorthand border width", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={3}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-width",
        `${borderWidths[3]}px ${borderWidths[3]}px ${borderWidths[3]}px ${borderWidths[3]}px`,
      )
      unmount()
    })

    it("(vertical | horizontal): handles a Theme-UI tuple border width", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[3, 5]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-width",
        `${borderWidths[3]}px ${borderWidths[5]}px ${borderWidths[3]}px ${borderWidths[5]}px`,
      )
      unmount()
    })

    it("(top | horizontal | bottom): handles a Theme-UI triple border width", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[3, 5, 9]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-width",
        `${borderWidths[3]}px ${borderWidths[5]}px ${borderWidths[9]}px ${borderWidths[5]}px`,
      )
      unmount()
    })

    it("(top | right | bottom | left): handles a Theme-UI triple border width", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderWidths={[2, 6, 3, 2]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-width",
        `${borderWidths[2]}px ${borderWidths[6]}px ${borderWidths[3]}px ${borderWidths[2]}px`,
      )
      unmount()
    })
  })

  describe("Border styles handling", () => {
    it("(shorthand): handles a Theme-UI shorthand border styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={3}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-style",
        `${borderStyles[3]} ${borderStyles[3]} ${borderStyles[3]} ${borderStyles[3]}`,
      )
      unmount()
    })

    it("(vertical | horizontal): handles a Theme-UI tuple border styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[3, 5]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-style",
        `${borderStyles[3]} ${borderStyles[5]} ${borderStyles[3]} ${borderStyles[5]}`,
      )
      unmount()
    })

    it("(top | horizontal | bottom): handles a Theme-UI triple border styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[3, 5, 9]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-style",
        `${borderStyles[3]} ${borderStyles[5]} ${borderStyles[9]} ${borderStyles[5]}`,
      )
      unmount()
    })

    it("(top | right | bottom | left): handles a Theme-UI triple border styles", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderStyles={[2, 6, 3, 2]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-style",
        `${borderStyles[2]} ${borderStyles[6]} ${borderStyles[3]} ${borderStyles[2]}`,
      )
      unmount()
    })
  })

  describe("Border color handling", () => {
    it("(shorthand): handles a Theme-UI shorthand border color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={"primary"}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule("border-color", colors.primary)
      unmount()
    })

    it("(shorthand): handles a Theme-UI shorthand border color scale", () => {
      const borderColors = { color: "corals", idx: 1 }
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={borderColors}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule("border-color", colors.corals[1])
      unmount()
    })

    it("(vertical | horizontal):  handles a Theme-UI tuple border color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={["primary", "secondary"]}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-color",
        `${colors.primary} ${colors.secondary} ${colors.primary} ${colors.secondary}`,
      )
      unmount()
    })

    it("(vertical | horizontal):  handles a Theme-UI tuple border color scale", () => {
      const borderColors = [{ color: "corals", idx: 1 }, "secondary"]
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={borderColors}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-color",
        `${colors.corals[1]} ${colors.secondary} ${colors.corals[1]} ${colors.secondary}`,
      )
      unmount()
    })

    it("(top | horizontal | bottom):  handles a Theme-UI triple border color scale", () => {
      const borderColors = [
        { color: "whites", idx: 2 },
        { color: "blacks", idx: 1 },
        "secondary",
      ]
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={borderColors}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-color",
        `${colors.whites[2]} ${colors.blacks[1]} ${colors.secondary} ${colors.blacks[1]}`,
      )
      unmount()
    })

    it("(top | right | bottom | left):  handles a Theme-UI triple border color scale", () => {
      const borderColors = [
        { color: "whites", idx: 2 },
        { color: "blacks", idx: 1 },
        { color: "grays", idx: 0 },
        { color: "corals", idx: 1 },
      ]

      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} borderColors={borderColors}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule(
        "border-color",
        `${colors.whites[2]} ${colors.blacks[1]} ${colors.grays[0]} ${colors.corals[1]}`,
      )
      unmount()
    })
  })

  describe("Background color handling", () => {
    it("handles a Theme-UI background color", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} backgroundColor={"primary"}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule("background-color", colors.primary)
      unmount()
    })

    it("handles a Theme-UI background color scale", () => {
      const backgroundColor = { color: "grays", idx: 3 }
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box padding={2} backgroundColor={backgroundColor}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box).toHaveStyleRule("background-color", colors.grays[3])
      unmount()
    })
  })

  describe("HTML tag rendering", () => {
    it("should render a DIV tag", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box as="div" padding={2}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box.tagName).toBe("DIV")
      unmount()
    })

    it("should render a ASIDE tag", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box as="aside" padding={2}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box.tagName).toBe("ASIDE")
      unmount()
    })

    it("should render a SECTION tag", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box as="section" padding={2}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box.tagName).toBe("SECTION")
      unmount()
    })

    it("should render a MAIN tag", () => {
      const { getByText, unmount } = render(
        <ThemeProvider theme={theme}>
          <Box as="main" padding={2}>
            {id}
          </Box>
        </ThemeProvider>,
      )
      const box = getByText(id)
      expect(box.tagName).toBe("MAIN")
      unmount()
    })
  })
})
