import React, { useContext, useState } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import { Cart, Burger } from '@wdlk/components';

import { CartContext } from '..';
import {
  Header as HeaderUI,
  Logo,
  CartDisplay,
  CartDisplayItem,
  CartLink,
} from '../components';
import { useHeaderData, useNavigationData } from '../hooks';
import { NavigationBar, NavigationLayer } from '.';

const Compact: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { header } = useHeaderData();
  const { url } = useNavigationData();
  const { cart } = useContext(CartContext);

  return (
    <>
      <HeaderUI.Frame>
        <HeaderUI.Item>
          <Burger
            onClick={(): void => setIsExpanded(!isExpanded)}
            isActive={isExpanded}
          />
        </HeaderUI.Item>
        <HeaderUI.Item>
          <Logo
            title={header.logo.title}
            desc={header.logo.desc}
            isFocused={false}
            href={url}
          />
        </HeaderUI.Item>
        <HeaderUI.Item>
          <Cart
            href={`${url}/${header.cart.handle}`}
            isFocused={false}
            count={cart.lineItems.length}
            isFilled={!!cart.lineItems.length}
            title="Woodlike Ocean Shopping cart"
          />
        </HeaderUI.Item>
      </HeaderUI.Frame>
      <NavigationLayer isExpanded={isExpanded} />
    </>
  );
};

export const Expanded: React.FC = () => {
  const { header } = useHeaderData();
  const { url } = useNavigationData();
  const { cart } = useContext(CartContext);
  return (
    <HeaderUI.Frame>
      <HeaderUI.Item>
        <Logo
          title={header.logo.title}
          desc={header.logo.desc}
          isFocused={false}
          href={url}
        />
      </HeaderUI.Item>
      <HeaderUI.Item>
        <NavigationBar />
      </HeaderUI.Item>
      <HeaderUI.Item>
        <CartDisplay>
          {header.miniCart.items.map(item => (
            <CartDisplayItem key={item.id}>
              <CartLink href={`${url}/${item.handle}`} isFocused={false}>
                {item.title}
              </CartLink>
            </CartDisplayItem>
          ))}
          <CartDisplayItem>
            <Cart
              href={`${url}/${header.cart.handle}`}
              isFocused={false}
              count={cart.lineItems.length}
              isFilled={!!cart.lineItems.length}
              title="Woodlike Ocean Shopping cart"
            />
          </CartDisplayItem>
        </CartDisplay>
      </HeaderUI.Item>
    </HeaderUI.Frame>
  );
};

export const Header: React.FC = () => {
  const { theme } = useThemeUI();
  const isCompact = useMedia(
    [
      `(min-width: ${(theme.breakpoints as string[])[2]})`,
      `(min-width: ${(theme.breakpoints as string[])[1]})`,
      `(min-width: ${(theme.breakpoints as string[])[0]})`,
    ],
    [false, true, true],
    true,
  );
  return isCompact ? <Compact /> : <Expanded />;
};
