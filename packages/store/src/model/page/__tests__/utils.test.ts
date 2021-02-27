import { ShopifyPage } from ".."
import { _filterPageByTitle } from "../utils"
import { legalIds } from "../constants"
import { shopifyPages } from "../../../../__mocks__"

describe("Pages Utils", () => {
  it("should return a filterd list of legal page nodes - (filterPageByTitle)", () => {
    const filterLegalPages = _filterPageByTitle(legalIds)
    const pages = shopifyPages.nodes as ShopifyPage[]

    expect(filterLegalPages(pages)).toMatchSnapshot()
  })
})
