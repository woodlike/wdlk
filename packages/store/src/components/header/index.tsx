import * as React from 'react';
import { Header as LibHeader, Logo, qt, Cart, Burger } from '@wdlk/components';

import { Navigation, NavigationLayer, MiniCart } from '..';
import { useNavigationData, useHeaderData, useBreakpoint } from '../../hooks';
import { generateIds } from '../../utils';

const id = generateIds(6);
const min = (qt('breakpoints')(0) as unknown) as string;
const max = (qt('breakpoints')(3) as unknown) as string;

export function Header(): JSX.Element {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { items, url } = useNavigationData();
  const { header } = useHeaderData();
  const { logo } = header;
  const isMobile = useBreakpoint(min, max);
  return (
    <>
      <LibHeader
        areas={[
          isMobile ? (
            <Burger
              onClick={(): void => setIsExpanded(!isExpanded)}
              key={id[0]}
              isExpanded={isExpanded}
            />
          ) : (
            <Logo
              key={id[1]}
              title={logo.title}
              desc={logo.desc}
              isFocused={false}
              href={url}
            />
          ),
          isMobile ? (
            <Logo
              key={id[2]}
              title={logo.title}
              desc={logo.desc}
              isFocused={false}
              href={url}
            />
          ) : (
            <Navigation key={id[3]} url={url} items={items} />
          ),
          isMobile ? (
            <Cart
              key={id[4]}
              href={`${url}/${header.cart.handle}`}
              isFocused={false}
              count={0}
              isFilled={false}
              title="Woodlike Ocean Shopping cart"
            />
          ) : (
            <MiniCart key={id[5]} />
          ),
        ]}
      />
      {isMobile && (
        <NavigationLayer
          url={url}
          items={items}
          isExpanded={isExpanded}
          login={header.miniCart.items[0]}
        />
      )}
    </>
  );
}
