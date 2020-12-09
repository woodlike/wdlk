import { Reporter } from 'gatsby';

import {
  collectionResolver,
  shopifyProductResolver,
  shopifyProductImagesField,
  productVariantPriceFields,
} from '../model';

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
  reporter: Reporter,
): void {
  createResolvers({
    ...collectionResolver(),
    ...shopifyProductResolver(),
    ...shopifyProductImagesField(),
    ...productVariantPriceFields(reporter),
  });
}
