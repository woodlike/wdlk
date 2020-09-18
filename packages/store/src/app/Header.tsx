import React, { useContext, useState } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import { Cart, Burger, Link, Columns, Column } from '@wdlk/components';

import { Navigation, NavigationLayer } from '.';
import { CartContext } from '..';
import { Header as HeaderUI, Logo } from '../components';
import { useHeaderData, useNavigationData } from '../hooks';

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
        <Navigation />
      </HeaderUI.Item>
      <HeaderUI.Item>
        <Columns align="center">
          {header.miniCart.items.map(item => (
            <Column key={item.id}>
              <Link href={`${url}/${item.handle}`} size="s">
                {item.title}
              </Link>
            </Column>
          ))}
          <Column>
            <Cart
              href={`${url}/${header.cart.handle}`}
              isFocused={false}
              count={cart.lineItems.length}
              isFilled={!!cart.lineItems.length}
              title="Woodlike Ocean Shopping cart"
            />
          </Column>
        </Columns>
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
