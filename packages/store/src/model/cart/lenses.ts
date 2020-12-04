import { lensPath, set, view } from 'ramda';
import currencyJS from 'currency.js';
import { ShopifyPriceV2 } from '.';

export interface CurrencyConfig {
  readonly decimal?: '.' | ',';
  readonly precision?: number;
  readonly symbol?: '€' | '$' | '';
}

export const currency = (
  value: string,
  config: CurrencyConfig = { decimal: '.', symbol: '' },
) => currencyJS(value, config).format();

export const priceV2Lens = lensPath(['amount']);

export function formatCurrencyV2(priceV2: ShopifyPriceV2) {
  const amount = view<ShopifyPriceV2, string>(priceV2Lens, priceV2);
  return set(priceV2Lens, currency(amount), priceV2);
}
