import * as React from "react"

import { Cart, theme } from ".."
import { axe, toHaveNoViolations } from "jest-axe"
import { cleanup, render } from "@testing-library/react"

import { ThemeProvider } from '@emotion/react'
import { matchers } from "@emotion/jest"

expect.extend(matchers)
expect.extend(toHaveNoViolations)

describe("<MiniCart />", () => {
  it("should not have accessibility violations", async done => {
    const { container, unmount } = render(
      <ThemeProvider theme={theme}>
        <Cart
          href="#"
          isFocused={false}
          count={0}
          isFilled={true}
          title="Woodlike Ocean Shopping cart"
        />
      </ThemeProvider>,
    )

    const a11yResults = await axe(container)
    expect(a11yResults).toHaveNoViolations()
    cleanup()
    unmount()
    done()
  })

  it("shold have a title and a description according the SVG accessibility recommendations", () => {
    const count = 0
    const result = "Woodlike Ocean Shopping cart"
    const { getByTestId, unmount } = render(
      <ThemeProvider theme={theme}>
        <Cart
          href="#"
          isFocused={false}
          count={count}
          isFilled={false}
          title={result}
        />
      </ThemeProvider>,
    )
    const cart = getByTestId("cart-link-test-id")
    const title = cart.querySelector("title") as HTMLTitleElement
    const desc = cart.querySelector("desc") as SVGDescElement

    expect(title.innerHTML).toBe(result)
    expect(desc.innerHTML).toBe(
      `The shopping bag currently contains ${count} items`,
    )
    unmount()
  })

  it("should be filled and should contain 2 items", () => {
    const result = 2
    const { getByTestId, unmount } = render(
      <ThemeProvider theme={theme}>
        <Cart
          href="#"
          isFocused={false}
          count={result}
          isFilled={true}
          title="Woodlike Ocean Shopping cart"
        />
      </ThemeProvider>,
    )

    const cart = getByTestId("cart-link-test-id")
    const count = cart.querySelector("text") as SVGTextElement
    const desc = cart.querySelector("desc") as SVGDescElement

    expect(count.innerHTML).toBe(result.toString(10))
    expect(desc.innerHTML).toBe(
      `The shopping bag currently contains ${count.innerHTML} items`,
    )
    expect(cart).toHaveStyleRule("fill-opacity", "1")
    unmount()
  })

  it("should not be filled and should contain 0 items", () => {
    const { getByTestId, unmount } = render(
      <ThemeProvider theme={theme}>
        <Cart
          href="#"
          isFocused={false}
          count={0}
          isFilled={false}
          title="Woodlike Ocean Shopping cart"
        />
      </ThemeProvider>,
    )

    const cart = getByTestId("cart-link-test-id")
    const count = cart.querySelector("text") as SVGTextElement
    const result = 0
    expect(count.innerHTML).toBe(result.toString(10))
    expect(cart).toHaveStyleRule("fill-opacity", "0")
    unmount()
  })
})
