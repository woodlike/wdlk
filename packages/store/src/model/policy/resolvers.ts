import { Legal } from '.';

export function legalResolver() {
  return {
    ShopifyPage: {
      slug: {
        resolve(source: Legal) {
          return `/legal/${source.handle}`.replace(/\/\/+/g, '/');
        },
      },
    },
  };
}
