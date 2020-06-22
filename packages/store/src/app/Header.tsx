import * as React from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';
import { Cart, Logo, Burger } from '@wdlk/components';

import {
  Header as HeaderUI,
  Navigation,
  CopyRight,
  MiniCart,
} from '../components';
import { useHeaderData, useNavigationData } from '../hooks';

const Compact: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
  const brandItem = items.find(item => item.title === 'The Brand');
  const login = header.miniCart.items[0];

  return (
    <>
      <HeaderUI.Frame>
        <HeaderUI.Item>
          <Burger
            onClick={(): void => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
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
            count={0}
            isFilled={false}
            title="Woodlike Ocean Shopping cart"
          />
        </HeaderUI.Item>
      </HeaderUI.Frame>
      <Navigation.Layer isExpanded={isExpanded}>
        <Navigation.LayerList>
          {items.map(item => (
            <Navigation.Link
              key={item.id}
              href={`${url}/${item.handle}`}
              current={false}
              isFocused={false}
              isInverted={true}
              context="panel"
              size="L"
              text={item.title}
            />
          ))}
        </Navigation.LayerList>
        <Navigation.LayerList>
          {brandItem &&
            brandItem.menuItems.map(item => (
              <Navigation.Link
                key={item.id}
                href={`${url}/${item.handle}`}
                current={false}
                isFocused={false}
                isInverted={true}
                context="panel"
                size="S"
                text={item.title}
              />
            ))}
          {login && (
            <Navigation.Link
              href={`${url}/${login.handle}`}
              current={false}
              isFocused={false}
              isInverted={true}
              context="panel"
              size="S"
              text={login.title}
            />
          )}
        </Navigation.LayerList>
        <Navigation.LayerFooter>
          <CopyRight color="inverted" />
        </Navigation.LayerFooter>
      </Navigation.Layer>
    </>
  );
};

export const Expanded: React.FC = () => {
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
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
        <Navigation.Frame>
          <Navigation.Bar itemCount={items.length}>
            {items.map(item => (
              <Navigation.Item
                key={item.id}
                handle={item.handle}
                menuItems={item.menuItems}
                title={item.title}
                url={url}
              />
            ))}
          </Navigation.Bar>
        </Navigation.Frame>
      </HeaderUI.Item>
      <HeaderUI.Item>
        <MiniCart />
      </HeaderUI.Item>
    </HeaderUI.Frame>
  );
};

export const Header: React.FC = () => {
  const { theme } = useThemeUI();
  const isCompact = useMedia(
    [
      `(min-width: ${(theme.breakpoints as string[])[2]})`,
      `(min-width: ${(theme.breakpoints as string[])[0]})`,
    ],
    [false, true],
    false,
  );
  return isCompact ? <Compact /> : <Expanded />;
};
