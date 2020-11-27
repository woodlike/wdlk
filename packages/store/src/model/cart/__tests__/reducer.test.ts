import { view } from 'ramda';
import { cartMock } from '../../../../__mocks__';
import { subTotalPriceV2Lens, ShopifyPriceV2, Cart } from '..';

describe.skip('Cart workflows', () => {
  describe('Format Subtotal', () => {
    it('should return a cart with a formatted subtotal', () => {
      const subtotalPrice = view<Cart, ShopifyPriceV2>(
        subTotalPriceV2Lens,
        cartMock,
      );
      expect(1).toEqual(
        expect.objectContaining({
          subtotalPriceV2: {
            ...subtotalPrice,
            amount: '135.00',
          },
        }),
      );
    });
  });
});
