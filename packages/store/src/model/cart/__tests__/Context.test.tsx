import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider, CartContext, CartActionsContext, CartState } from '..';

describe('<CartProvider />', () => {
  describe('CartContext', () => {
    it('should have an initialized shopify client', () => {
      const { getByText } = render(
        <CartProvider>
          <CartContext.Consumer>
            {(value: CartState) => (
              <div>
                Received: {JSON.stringify(value.client.checkout, null, 2)}
              </div>
            )}
          </CartContext.Consumer>
        </CartProvider>,
      );

      expect(getByText(/^Received:/).textContent).toMatchSnapshot();
    });
  });
  describe('CartDispatchContext', () => {
    it('should have the dispatch function as a provider value', () => {
      const fn = jest.fn();
      render(
        <CartProvider>
          <CartActionsContext.Consumer>{fn}</CartActionsContext.Consumer>
        </CartProvider>,
      );
      expect(fn).toHaveBeenCalled();
    });
  });
});
