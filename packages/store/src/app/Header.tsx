import React, { useContext, useState } from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import {
  Cart,
  Burger,
  Link,
  Columns,
  Column,
  Box,
  Small,
} from '@wdlk/components';

import { Navigation } from '.';
import {
  CartContext,
  Header as HeaderUI,
  Logo,
  NavigationItem,
  NavigationLayout,
} from '..';
import { useHeaderData, useNavigationData, useSiteData } from '../hooks';

const MobileHeader: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
  const { cart } = useContext(CartContext);
  const site = useSiteData();

  const brandItem = items.find(item => item.title === 'The Brand');
  const date = new Date();

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
      <NavigationLayout isExpanded={isExpanded}>
        <Box as="ul" padding={[0, 0, 5, 0]}>
          {items.map(item => (
            <NavigationItem key={item.id} current={false} context="panel">
              <Link
                color="tertiary"
                isActive={false}
                size="xl"
                type="block"
                href={`${url}/${item.handle}`}>
                {item.title}
              </Link>
            </NavigationItem>
          ))}
        </Box>
        <Box as="ul" padding={[0, 0, 5, 0]}>
          {brandItem &&
            brandItem.menuItems.map(item => (
              <NavigationItem key={item.id} current={false} context="panel">
                <Link
                  color="tertiary"
                  isActive={false}
                  size="m"
                  type="block"
                  href={`${url}/${item.handle}`}>
                  {item.title}
                </Link>
              </NavigationItem>
            ))}
          {header.miniCart.items.map(item => (
            <NavigationItem key={item.id} current={false} context="panel">
              <Link
                color="tertiary"
                isActive={false}
                size="m"
                type="block"
                href={`${url}/${item.handle}`}>
                {item.title}
              </Link>
            </NavigationItem>
          ))}
        </Box>
        <Small size="s" color="background">
          © {site.siteMetadata.brand} {date.getFullYear()}
        </Small>
      </NavigationLayout>
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
  return isCompact ? <MobileHeader /> : <Expanded />;
};
