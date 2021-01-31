import * as Page from '../model/page';

import {
  collectionResolver,
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
    ...Page.createResolver(),
    ...shopifyProductResolver(),
    ...shopifyProductImagesField(),
    ...productVariantPriceFields(reporter),
  });
}
