import { renderHook } from "@testing-library/react-hooks"
import { useMedia } from ".."

describe("useMedia", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === "(min-width: 1000px)" ? true : false,
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it("should not match any query and return the default value", () => {
    const queries = [
      "(min-width: 1500px)",
      "(min-width: 960px)",
      "(min-width: 600px)",
    ]
    const values = [5, 4, 3]
    const defaultValue = 666

    const { result } = renderHook(() =>
      useMedia<number>(queries, values, defaultValue),
    )
    expect(result.current).toBe(defaultValue)
  })

  it("should match the (min-width: 1000px) query and return the second value", () => {
    const queries = [
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 600px)",
    ]
    const values = [5, 4, 3]

    const { result } = renderHook(() => useMedia<number>(queries, values, 2))
    expect(result.current).toBe(values[1])
  })
})
