export function priceFormatter(
  srcPrice: string,
  locale: string,
  currency: string,
): string {
  return parseFloat(srcPrice).toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
}
