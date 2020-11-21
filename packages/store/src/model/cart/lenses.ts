import { lensPath } from 'ramda';

export const subTotalLens = lensPath(['subtotalPriceV2', 'amount']);
export const subTotalPriceV2Lens = lensPath(['subtotalPriceV2']);
