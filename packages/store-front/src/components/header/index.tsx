import * as React from 'react';
import shortid from 'shortid';
import {
  Header as LibHeader,
  Logo,
  Nav,
  qt,
  Cart,
} from '@wdlk/component-library';

import { Navigation, NavigationLayer, MiniCart } from '..';
import { useNavigationData, useHeaderData, useBreakpoint } from '../../hooks';

const min = (qt('breakpoints')(0) as unknown) as string;
const max = (qt('breakpoints')(3) as unknown) as string;

export function Header(): JSX.Element {
  const [isExpanded, setIsExPanded] = React.useState(false);
  const { items, url } = useNavigationData();
  const { header } = useHeaderData();
  const { logo } = header;
  const isMobile = useBreakpoint(min, max);
  console.log(isMobile, '&&&&')
  return (
    <>
      <LibHeader
        areas={[
          isMobile ? (
            <Nav.Burger key={shortid.generate()} isExpanded={isExpanded} />
          ) : (
            <Logo
              key={shortid.generate()}
              title={logo.title}
              desc={logo.desc}
              isFocused={false}
              href={url}
            />
          ),
          isMobile ? (
            <Logo
              key={shortid.generate()}
              title={logo.title}
              desc={logo.desc}
              isFocused={false}
              href={url}
            />
          ) : (
            <Navigation key={shortid.generate()} url={url} items={items} />
          ),
          isMobile ? (
            <Cart
              key={shortid.generate()}
              href={`${url}/${header.cart.handle}`}
              isFocused={false}
              count={0}
              isFilled={false}
              title="Woodlike Ocean Shopping cart"
            />
          ) : (
            <MiniCart key={shortid.generate()} />
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
