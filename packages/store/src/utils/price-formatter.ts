export function priceFormatter(
  srcPrice: string,
  locale: string,
  currency: string,
): string {
  const value = parseFloat(srcPrice)
    .toLocaleString(locale, {
      style: 'currency',
      currency: currency,
    })
    .split('');

  const sign = value.splice(0, 1);

  return [...value, ' ', ...sign].join('');
}
