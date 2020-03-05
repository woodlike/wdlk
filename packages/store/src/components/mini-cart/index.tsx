import * as React from 'react';
import { Cart, CartLink, MiniCart as LibMiniCart, MiniCartLink } from '@wdlk/components';

import { MiniCardItem } from './types';
import { useHeaderData } from '../../hooks';

export function MiniCart(): JSX.Element {
  const { header, url } = useHeaderData();
  return (
    <LibMiniCart>
      {header.miniCart.items.map((item: MiniCardItem) => (
        <MiniCartLink key={item.id}>
          <CartLink href={`${url}/${item.handle}`} isFocused={false}>
            {item.title}
          </CartLink>
        </MiniCartLink>
      ))}
      <MiniCartLink>
        <Cart
          href={`${url}/${header.cart.handle}`}
          isFocused={false}
          count={0}
          isFilled={false}
          title="Woodlike Ocean Shopping cart"
        />
      </MiniCartLink>
    </LibMiniCart>
  );
}
