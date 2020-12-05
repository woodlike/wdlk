import * as Lens from '../lenses';
import { cartMock } from '../../../../__mocks__';

describe('lenses', () => {
  let variantFormattedAmount: string;

  beforeEach(() => {
    variantFormattedAmount = '135.00';
  });

  afterEach(() => {
    variantFormattedAmount = (undefined as unknown) as string;
  });

  describe('setCurrencyFormatV2', () => {
    it('should return a formatted pricev2 object with two decimals digits amount', () => {
      const priceV2 = cartMock.lineItems[0].variant.priceV2;
      expect(Lens.formatCurrencyV2(Lens.priceV2Lens, priceV2)).toStrictEqual({
        currencyCode: priceV2.currencyCode,
        amount: variantFormattedAmount,
      });
    });

    it('should return a formatted amount with two decimal digits', () => {
      cartMock.lineItems.forEach(item => {
        const priceV2 = item.variant.priceV2;
        const { amount } = Lens.formatCurrencyV2(Lens.priceV2Lens, priceV2);
        const decimal = amount.split('.')[1];
        expect(decimal.length).toBe(2);
      });
    });
  });

  describe('reduceVariant', () => {
    it('should return a new variant with formatted priceV2 amount', () => {
      const prevVariant = cartMock.lineItems[0].variant;
      const variant = Lens.reduceVariant(prevVariant);
      expect(prevVariant).not.toBe(variant);
      expect(variant.priceV2.amount).toBe(variantFormattedAmount);
    });
  });

  describe('reduceLineItems', () => {
    it('should return an array of line items each with formatted priceV2 amounts', () => {
      const lineItems = Lens.reduceLineItems(cartMock.lineItems);
      expect(lineItems[0].variant.priceV2.amount).toBe(variantFormattedAmount);
    });
  });

  describe('reduceCart', () => {
    expect(Lens.reduceCart(cartMock)).toMatchSnapshot();
  });
});
