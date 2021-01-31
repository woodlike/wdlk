import { PageProps } from '.';

export function createResolver() {
  return {
    ShopifyPage: {
      slug: {
        resolve(source: PageProps) {
          return `/legal/${source.handle}`.replace(/\/\/+/g, '/');
        },
      },
    },
  };
}
