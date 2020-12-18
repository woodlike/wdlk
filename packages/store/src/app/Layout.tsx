import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '@wdlk/components';

import { Header, CartLayer } from '.';
import { GlobalCss } from '..';
import { CartProvider } from '../model';

export const Layout: React.FC = props => {
  const [cartLayerIsOpen, setCartLayerIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalCss />
        <Header
          isCartOpen={cartLayerIsOpen}
          setIsCartOpen={setCartLayerIsOpen}
        />
        <main>{props.children}</main>
        <CartLayer isOpen={cartLayerIsOpen} setIsOpen={setCartLayerIsOpen} />
      </CartProvider>
    </ThemeProvider>
  );
};
