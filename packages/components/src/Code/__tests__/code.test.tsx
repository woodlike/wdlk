import * as React from "react"

import { Code, Language, PrismTheme, convertor } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import { ThemeProvider } from '@emotion/react'
import { matchers } from "@emotion/jest"
import { theme } from "../.."

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<Code />", () => {
  let code: string
  let codeTheme: PrismTheme

  beforeEach(() => {
    code = `
    const add = (a: number, b: number): number => {
      return a + b;
    }
    `
    codeTheme = theme.code.theme
  })

  afterEach(() => {
    code = (undefined as unknown) as string
    codeTheme = (undefined as unknown) as PrismTheme
  })

  it("should not have accessibility violations (pre)", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Code code={code} lang={Language.typescript} size="s" />,
      </ThemeProvider>,
    )
    const pre = container.querySelector("pre") as HTMLPreElement
    const a11yResults = await axe(pre)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  describe("Code generated Theme", () => {
    it("should use the default Andromeda theme", () => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Code code={code} lang={Language.tsx} size="s" />
        </ThemeProvider>,
      )
      const pre = container.querySelector("pre")
      expect(pre).toHaveStyleRule("color", codeTheme.plain.color)
      expect(pre).toHaveStyleRule(
        "background-color",
        codeTheme.plain.backgroundColor,
      )
      unmount()
    })

    it("should provide the generated spans with the corresponding theme token styling", () => {
      const themeAndromeda = convertor(codeTheme)
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Code code={code} lang={Language.typescript} size="s" />,
        </ThemeProvider>,
      )
      const codeEl = container.querySelector("code") as HTMLElement
      Array.from(codeEl.querySelectorAll("span")).forEach(
        (span: HTMLSpanElement) => {
          const styles = getComputedStyle(span)
          if (Boolean(styles.getPropertyValue("color"))) {
            expect(
              Array.from(themeAndromeda.values()).find(
                val => val.color === styles.getPropertyValue("color"),
              ),
            ).toBeTruthy()
          }
        },
      )
      unmount()
    })
  })

  describe("Font-Size", () => {
    it("should use the defined S font family", () => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Code code={code} lang={Language.typescript} size="s" />,
        </ThemeProvider>,
      )
      const pre = container.querySelector("pre")
      expect(pre).toHaveStyleRule("font-size", `${theme.fontSizes[0]}px`)
      unmount()
    })

    it("should use the defined M font family", () => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Code code={code} lang={Language.typescript} size="m" />,
        </ThemeProvider>,
      )
      const pre = container.querySelector("pre")
      expect(pre).toHaveStyleRule("font-size", `${theme.fontSizes[1]}px`)
      unmount()
    })

    it("should use the defined L font family", () => {
      const { container, unmount } = render(
        <ThemeProvider theme={theme}>
          <Code code={code} lang={Language.typescript} size="l" />,
        </ThemeProvider>,
      )
      const pre = container.querySelector("pre")
      expect(pre).toHaveStyleRule("font-size", `${theme.fontSizes[2]}px`)
      unmount()
    })
  })
})
