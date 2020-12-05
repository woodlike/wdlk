import { Reporter } from 'gatsby';

import {
  shopifyProductResolver,
  shopifyProductImagesField,
  productVariantPriceFields,
} from '../model';

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
  reporter: Reporter,
): void {
  createResolvers({
    ...shopifyProductResolver(),
    ...shopifyProductImagesField(),
    ...productVariantPriceFields(reporter),
  });
}
