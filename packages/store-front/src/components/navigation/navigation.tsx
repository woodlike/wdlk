import * as React from 'react';
import {
  Navigation as Nav,
  NavBar,
  NavPanel,
  NavLink,
} from '@wdlk/component-library/src';
import { NavigationProps, NavDataProps, NavData } from './types';

export const Navigation: React.FunctionComponent<NavigationProps> = (
  props
): JSX.Element => {
  return (
    <Nav>
      <NavBar itemCount={props.items.length}>
        {props.items.map((item: NavDataProps, idx: number) => (
          <NavLink
            href={`${props.url}/${item.handle}`}
            key={`navigation-bar-item-${idx}`}
            current={false}
            isFocused={false}
            context="bar"
            text={item.title}>
            {item.menuItems.length > 0 && (
              <NavPanel isExpanded={true}>
                {item.menuItems.map((menuItem: NavData, i: number) => (
                  <NavLink
                    key={`menu-panel-item-${i}`}
                    href={`${props.url}/${menuItem.handle}`}
                    current={false}
                    isFocused={true}
                    context="panel"
                    text={menuItem.title}
                  />
                ))}
              </NavPanel>
            )}
          </NavLink>
        ))}
      </NavBar>
    </Nav>
  );
};
