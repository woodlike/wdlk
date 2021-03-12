import { ProductNode, ShopifyProductNode } from "."

import { Actions } from "gatsby"
import { Collection } from "../model"
import { ShopifyPage } from "../model/page"
import { resolve } from "path"

export interface ProductQueryData {
  readonly allShopifyProduct: {
    readonly edges: ProductNode[]
  }
}

export interface CollectionQuery {
  readonly allShopifyCollection: {
    readonly nodes: Collection[]
  }
}

export interface PageQuery {
  readonly allShopifyPage: {
    readonly nodes: ShopifyPage[]
  }
}

const basePath = "./src/app"

interface Node {
  readonly id: string
  readonly slug: string
}

export function createPage<T extends Node>(
  actions: Actions,
  path: string,
  nodes: T[],
) {
  nodes.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: resolve(basePath, path),
      context: {
        id: node.id,
      },
    })
  })
}

export function createProduct(edges: ProductNode[], actions: Actions) {
  const layerId = "Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzEyNTg5NzAyOA=="
  const { createPage } = actions
  edges.forEach((edge: { readonly node: ShopifyProductNode }) => {
    createPage({
      path: edge.node.slug,
      component: resolve(`${basePath}/product/Layout.tsx`),
      context: {
        id: edge.node.id,
        layerId,
      },
    })
  })
}

export function createCollection(nodes: Collection[], actions: Actions) {
  const { createPage } = actions
  nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: resolve(`${basePath}/collection/Layout.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}

export function createLegalDe(nodes: ShopifyPage[], actions: Actions) {
  const { createPage } = actions

  nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: resolve(`${basePath}/legal/LayoutDe.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}

export function createLegalEn(nodes: ShopifyPage[], actions: Actions) {
  const { createPage } = actions

  nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: resolve(`${basePath}/legal/LayoutEn.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
