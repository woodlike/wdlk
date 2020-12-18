import { Collection } from '.';

export function collectionResolver() {
  return {
    ShopifyCollection: {
      slug: {
        resolve(source: Collection) {
          return `/collections/${source.handle}`.replace(/\/\/+/g, '/');
        },
      },
    },
  };
}
