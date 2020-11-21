import { lensPath, set, view, Lens } from 'ramda';
import * as Number from '../number';
import { Cart } from '.';

export const subTotalLens = lensPath(['subtotalPriceV2', 'amount']);
export const subTotalPriceV2Lens = lensPath(['subtotalPriceV2']);

export const setSubTotal = set(subTotalLens);

export function formatPrice(lens: Lens, cart: Cart) {
  const value = view<Cart, string>(lens, cart);
  return set(lens, Number.fix(2, value), cart);
}
