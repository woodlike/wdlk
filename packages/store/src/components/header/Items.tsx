import * as React from 'react';
import { Logo, Cart, Burger } from '@wdlk/components';

import { HeaderLayout } from '.';
import { MiniCart, Navigation, NavigationLayer } from '..';
import { useNavigationData, useHeaderData } from '../..';

export const HeaderItemsCompact: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { header } = useHeaderData();
  const { items, url } = useNavigationData();
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
      <NavigationLayer
        url={url}
        items={items}
        isExpanded={isExpanded}
        login={header.miniCart.items[0]}
      />
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
        <Navigation url={url} items={items} />
      </HeaderLayout.Item>
      <HeaderLayout.Item>
        <MiniCart />
      </HeaderLayout.Item>
    </HeaderLayout.Container>
  );
};
