import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider, CartDispatchContext } from '.';

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
