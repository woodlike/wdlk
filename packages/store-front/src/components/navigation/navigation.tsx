import * as React from 'react';
import { Nav } from '@wdlk/component-library';

import { NavigationItem, NavigationProps, NavDataProps } from '.';


export const Navigation: React.FC<NavigationProps> = (props): JSX.Element => {
  return (
    <Nav.Frame>
      <Nav.Bar itemCount={props.items.length}>
        {props.items.map((item: NavDataProps, idx: number) => (
          <NavigationItem
            key={`navigation-item-${idx}`}
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
