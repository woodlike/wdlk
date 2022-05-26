import { renderHook } from '@testing-library/react'
import { useMediaQuery } from ".."

describe("useMedia", () => {
  let minWidth: number

  beforeEach(() => {
    minWidth = 1000
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => {
        return {
          matches: query === `(min-width: ${minWidth}px)` ? true : false,
          media: query,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        }
      }),
    })
  })

  afterEach(() => {
    minWidth = (undefined as unknown) as number
  })

  it("should match the media query", () => {
    const { result } = renderHook(() =>
      useMediaQuery(`(min-width: ${minWidth}px)`),
    )
    expect(result.current).toBeTruthy()
  })

  it("should not match the query", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 1500px)"))
    expect(result.current).toBeFalsy()
  })
})
