import * as Lens from './lenses';
import { ShopifyCollection } from '.';

export function collectionResolver() {
  return {
    ShopifyCollection: {
      slug: {
        resolve(source: ShopifyCollection) {
          return Lens.setCollectionSlug('collections', source);
        },
      },
    },
  };
}
