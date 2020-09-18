import React, { useContext, useState } from 'react';
import { useTheme } from 'emotion-theming';
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
  HeaderLayout,
  Logo,
  NavigationItem,
  NavigationLayout,
} from '..';
import {
  HeaderData,
  LinkNode,
  useHeaderData,
  useNavigationData,
  useSiteData,
} from '../hooks';

interface MobileNavigationProps {
  readonly header: HeaderData;
  readonly isExpanded: boolean;
  readonly items: LinkNode[];
  readonly url: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = props => {
  const site = useSiteData();

  const brandItem = props.items.find(item => item.title === 'The Brand');
  const date = new Date();
  return (
    <NavigationLayout isExpanded={props.isExpanded}>
      <Box as="ul" padding={[0, 0, 5, 0]}>
        {props.items.map(item => (
          <NavigationItem key={item.id} current={false} context="panel">
            <Link
              color="tertiary"
              isActive={false}
              size="xl"
              type="block"
              href={`${props.url}/${item.handle}`}>
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
                href={`${props.url}/${item.handle}`}>
                {item.title}
              </Link>
            </NavigationItem>
          ))}
        {props.header.miniCart.items.map(item => (
          <NavigationItem key={item.id} current={false} context="panel">
            <Link
              color="tertiary"
              isActive={false}
              size="m"
              type="block"
              href={`${props.url}/${item.handle}`}>
              {item.title}
            </Link>
          </NavigationItem>
        ))}
      </Box>
      <Small size="s" color="background">
        © {site.siteMetadata.brand} {date.getFullYear()}
      </Small>
    </NavigationLayout>
  );
};

export const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cart } = useContext(CartContext);
  const { breakpoints } = useTheme();
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();

  const isCompact = useMedia(
    [
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
      `(min-width: ${breakpoints[0]})`,
    ],
    [false, true, true],
    true,
  );
  return isCompact ? (
    <HeaderLayout
      firstSlot={
        <Burger
          onClick={() => setIsExpanded(!isExpanded)}
          isActive={isExpanded}
        />
      }
      midSlot={
        <Logo
          title={header.logo.title}
          desc={header.logo.desc}
          isFocused={false}
          href={url}
        />
      }
      lastSlot={
        <Cart
          href={`${url}/${header.cart.handle}`}
          isFocused={false}
          count={cart.lineItems.length}
          isFilled={!!cart.lineItems.length}
          title="Woodlike Ocean Shopping cart"
        />
      }>
      <MobileNavigation
        header={header}
        isExpanded={isExpanded}
        items={items}
        url={url}
      />
    </HeaderLayout>
  ) : (
    <HeaderLayout
      firstSlot={
        <Logo
          title={header.logo.title}
          desc={header.logo.desc}
          isFocused={false}
          href={url}
        />
      }
      midSlot={<Navigation />}
      lastSlot={
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
      }
    />
  );
};
