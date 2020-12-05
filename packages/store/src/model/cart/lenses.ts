import { lensPath, set, view, Lens } from 'ramda';
import { ShopifyPriceV2, LineItem, Variant, Cart } from '.';
import { currency } from '..';

export const variantLens = lensPath(['variant']);
export const subtotalPriceV2Lens = lensPath(['amount']);
export const priceV2Lens = lensPath(['amount']);

export function formatCurrencyV2(lens: Lens, priceV2: ShopifyPriceV2) {
  const amount = view<ShopifyPriceV2, string>(lens, priceV2);
  return set(lens, currency(amount), priceV2);
}

export function reduceVariant(variant: Variant) {
  return {
    ...variant,
    priceV2: formatCurrencyV2(priceV2Lens, variant.priceV2),
  };
}

export function reduceLineItems(lineItems: LineItem[]): LineItem[] {
  return lineItems.map(lineItem => {
    const prevVariant = view<LineItem, Variant>(variantLens, lineItem);
    const variant = reduceVariant(prevVariant);
    return { ...lineItem, variant };
  });
}

export function reduceCart(cart: Cart) {
  const subtotalPriceV2 = formatCurrencyV2(
    subtotalPriceV2Lens,
    cart.subtotalPriceV2,
  );

  return {
    ...cart,
    subtotalPriceV2,
    lineItems: reduceLineItems(cart.lineItems),
  };
}
