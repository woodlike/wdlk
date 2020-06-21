import * as React from 'react';
import { Logo, Cart, Burger } from '@wdlk/components';

import { HeaderLayout } from '.';
import { MiniCart, Navigation, CopyRight } from '..';
import { useNavigationData, useHeaderData } from '../..';

export const HeaderItemsCompact: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
  const brandItem = items.find(item => item.title === 'The Brand');
  const login = header.miniCart.items[0];
  return (
    <>
      <HeaderLayout.Container>
        <HeaderLayout.Item>
          <Burger
            onClick={(): void => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          />
        </HeaderLayout.Item>
        <HeaderLayout.Item>
          <Logo
            title={header.logo.title}
            desc={header.logo.desc}
            isFocused={false}
            href={url}
          />
        </HeaderLayout.Item>
        <HeaderLayout.Item>
          <Cart
            href={`${url}/${header.cart.handle}`}
            isFocused={false}
            count={0}
            isFilled={false}
            title="Woodlike Ocean Shopping cart"
          />
        </HeaderLayout.Item>
      </HeaderLayout.Container>
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

export const HeaderItems: React.FC = () => {
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
  return (
    <HeaderLayout.Container>
      <HeaderLayout.Item>
        <Logo
          title={header.logo.title}
          desc={header.logo.desc}
          isFocused={false}
          href={url}
        />
      </HeaderLayout.Item>
      <HeaderLayout.Item>
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
      </HeaderLayout.Item>
      <HeaderLayout.Item>
        <MiniCart />
      </HeaderLayout.Item>
    </HeaderLayout.Container>
  );
};
