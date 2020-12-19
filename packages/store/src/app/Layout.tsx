import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '@wdlk/components';

import { Header, CartLayer, Footer } from '.';
import { GlobalCss } from '..';
import { CartProvider } from '../model';

export interface LayoutProps {
  readonly layer?: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = props => {
  const [cartLayerIsOpen, setCartLayerIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalCss />
        <Header
          isCartOpen={cartLayerIsOpen}
          setIsCartOpen={setCartLayerIsOpen}
        />
        <>{props.children}</>
        <Footer />
        <CartLayer isOpen={cartLayerIsOpen} setIsOpen={setCartLayerIsOpen} />
        {!!props.layer && props.layer}
      </CartProvider>
    </ThemeProvider>
  );
};
