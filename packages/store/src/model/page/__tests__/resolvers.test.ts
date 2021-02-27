import * as Page from ".."

import { ResolverArgs, ShopifyPage } from ".."

import { GatsbyCtx } from "../../../gatsby"
import { shopifyPages } from "../../../../__mocks__"

describe("Page Resolvers", () => {
  let resolverSrc: Record<string, string>
  let resolverArgs: ResolverArgs
  let resolverContext: GatsbyCtx<ShopifyPage>

  beforeEach(() => {
    resolverContext = Object.create({
      nodeModel: {
        getAllNodes: jest.fn().mockImplementation(() => shopifyPages.nodes),
      },
    })

    resolverSrc = {}
    resolverArgs = {}
  })

  afterEach(() => {
    jest.clearAllMocks()
    resolverSrc = (undefined as unknown) as Record<string, string>
    resolverArgs = (undefined as unknown) as ResolverArgs
    resolverContext = (undefined as unknown) as GatsbyCtx<ShopifyPage>
  })

  describe("Legal Pages", () => {
    it("should return an Array containing all the legal pages", () => {
      expect(
        Page.legal().allLegalPages.resolve(
          resolverSrc,
          resolverArgs,
          resolverContext,
        ),
      ).toMatchSnapshot()
    })
  })
})
