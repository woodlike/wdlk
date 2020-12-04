import * as Lens from '../lenses';
import { cartMock } from '../../../../__mocks__';

describe('lenses', () => {
  describe('setCurrencyFormatV2', () => {
    it('should return a formatted pricev2 object with two decimals digits amount', () => {
      const priceV2 = cartMock.lineItems[0].variant.priceV2;
      expect(Lens.formatCurrencyV2(priceV2)).toStrictEqual({
        currencyCode: priceV2.currencyCode,
        amount: '135.00',
      });
    });

    it('should return a formatted amount with two decimal digits', () => {
      cartMock.lineItems.forEach(item => {
        const priceV2 = item.variant.priceV2;
        const { amount } = Lens.formatCurrencyV2(priceV2);
        const decimal = amount.split('.')[1];
        expect(decimal.length).toBe(2);
      });
    });
  });
});
