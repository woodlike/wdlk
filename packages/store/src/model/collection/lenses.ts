import { lensPath, set, view } from 'ramda';
import { ShopifyCollection } from '.';

export const collectionHandleLens = lensPath(['handle']);
export const collectionSlugLens = lensPath(['slug']);

export function setCollectionSlug(path: string, source: ShopifyCollection) {
  const handle = view<ShopifyCollection, string>(collectionHandleLens, source);
  return set(
    collectionSlugLens,
    `/${path}/${handle}`.replace(/\/\/+/g, '/'),
    source,
  );
}
