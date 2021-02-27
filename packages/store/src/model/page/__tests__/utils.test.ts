import { FilterOnceApplied, ShopifyPage } from ".."
import { _filterPageByTitle, reduceToLanguage } from "../utils"

import { ShopifyNode } from "../../../gatsby"
import { legalIdMap } from "../constants"
import { shopifyPages } from "../../../../__mocks__"

describe("Pages Utils", () => {
  let filterLegalPages: FilterOnceApplied<ShopifyNode>
  let pages: ShopifyPage[]

  beforeEach(() => {
    filterLegalPages = _filterPageByTitle(legalIdMap)
    pages = shopifyPages.nodes as ShopifyPage[]
  })

  afterEach(() => {
    pages = (undefined as unknown) as ShopifyPage[]
    filterLegalPages = (undefined as unknown) as FilterOnceApplied<ShopifyNode>
  })

  it("should create an object containing page nodes by language - (_reduceToLanguage)", () => {
    const legalPages = filterLegalPages(pages)
    expect(reduceToLanguage(legalIdMap, legalPages)).toMatchSnapshot()
  })

  it("should return a filterd list of legal page nodes - (filterPageByTitle)", () => {
    expect(filterLegalPages(pages)).toMatchSnapshot()
  })
})
