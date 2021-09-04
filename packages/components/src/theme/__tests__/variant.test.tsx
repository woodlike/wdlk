import { getVariant, theme } from ".."

describe("Theme Variant", () => {
  it("should return null on missing variant key", () => {
    expect(getVariant(theme, "unknownKey" as "buttons", "primary")).toBeNull()
  })

  it("should return null on missing variant value", () => {
    expect(getVariant(theme, "buttons", "unknownKey" as "primary")).toBeNull()
  })

  it("should find the primary variant in the theme object", () => {
    expect(getVariant(theme, "buttons", "primary")).toMatchInlineSnapshot(`
      Object {
        "bg": "rgb(0, 0, 0)",
        "color": "rgb(255, 255, 255)",
      }
    `)
  })

  it("should find the secondary variant in the theme object", () => {
    expect(getVariant(theme, "buttons", "secondary")).toMatchInlineSnapshot(`
      Object {
        "bg": "rgb(255, 113, 99)",
        "color": "rgb(255, 255, 255)",
      }
    `)
  })
})
