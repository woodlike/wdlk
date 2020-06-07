import * as React from 'react';
import { Nav } from '@wdlk/components';

import { NavigationItem, NavigationProps, NavDataProps } from '.';

export const Navigation: React.FC<NavigationProps> = (props): JSX.Element => {
  return (
    <Nav.Frame>
      <Nav.Bar itemCount={props.items.length}>
        {props.items.map((item: NavDataProps) => (
          <NavigationItem
            key={item.id}
            handle={item.handle}
            menuItems={item.menuItems}
            title={item.title}
            url={props.url}
          />
        ))}
      </Nav.Bar>
    </Nav.Frame>
  );
};

Navigation.displayName = 'Navigation';
