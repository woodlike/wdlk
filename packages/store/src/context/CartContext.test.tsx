import React from 'react';
import nock from 'nock';
import { render } from '@testing-library/react';
import { CartProvider, CartDispatchContext, SHOPIFY_CHECKOUT_ID_KEY } from '.';

describe('<CartProvider />', () => {
  describe('CartDispatchContext', () => {
    it('should have the dispatch function as a provider value', () => {
      const fn = jest.fn();
      render(
        <CartProvider>
          <CartDispatchContext.Consumer>{fn}</CartDispatchContext.Consumer>
        </CartProvider>,
      );
      expect(fn).toHaveBeenCalled();
    });
  });
});
