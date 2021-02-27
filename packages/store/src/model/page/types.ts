import { Dictionary } from "ramda"

export interface ShopifyPage {
  readonly body: string
  readonly handle: string
  readonly id: string
  readonly shopifyId: string
  readonly slug: string
  readonly title: string
  readonly updatedAt: string
  readonly bodySummary: string
  readonly url: string
  readonly parent: Node
}

export type ResolverArgs = Record<string, unknown>

export type FilterOnceApplied<A> = <K extends A[] | Dictionary<A>>(
  source: K,
) => K extends Array<infer U>
  ? U[]
  : K extends Dictionary<infer U>
  ? Dictionary<U>
  : never
