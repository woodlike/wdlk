import {
  collectionResolver,
  legalResolver,
  productVariantPriceFields,
  shopifyProductImagesField,
  shopifyProductResolver,
} from '../model';

import { Reporter } from 'gatsby';

export function createStoreResolvers(
  createResolvers: (schema: object) => void,
  reporter: Reporter,
): void {
  createResolvers({
    ...collectionResolver(),
    ...legalResolver(),
    ...shopifyProductResolver(),
    ...shopifyProductImagesField(),
    ...productVariantPriceFields(reporter),
  });
}
