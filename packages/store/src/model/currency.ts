import currencyJS from 'currency.js';

export interface CurrencyConfig {
  readonly decimal?: '.' | ',';
  readonly precision?: number;
  readonly symbol?: '€' | '$' | '';
}

export const currency = (
  value: string,
  config: CurrencyConfig = { decimal: '.', symbol: '' },
) => currencyJS(value, config).format();
