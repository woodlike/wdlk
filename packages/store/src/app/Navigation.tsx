import React from 'react';
import { Link } from '@wdlk/components';
import {
  LinkNode,
  NavData,
  NavigationItem,
  NavigationList,
  SubNavigation,
  useNavigationData,
} from '..';

export interface NavigationItemProps extends NavData {
  readonly menuItems: LinkNode[];
}

export const Item: React.FC<NavigationItemProps> = props => {
  const [isExpanded, setExpanded] = React.useState(false);
  return (
    <NavigationItem
      current={false}
      context="bar"
      isActive={isExpanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}>
      <>
        <Link
          color="secondary"
          isActive={false}
          size="s"
          type="block"
          href={`${props.url}/${props.handle}`}>
          {props.title}
        </Link>
        {props.menuItems.length > 0 && (
          <SubNavigation isExpanded={isExpanded}>
            {props.menuItems.map(menuItem => (
              <NavigationItem key={menuItem.id} current={false} context="panel">
                <Link
                  size="s"
                  isActive={false}
                  type="block"
                  href={`${props.url}/${menuItem.handle}`}>
                  {menuItem.title}
                </Link>
              </NavigationItem>
            ))}
          </SubNavigation>
        )}
      </>
    </NavigationItem>
  );
};

export const Navigation: React.FC = () => {
  const { items, url } = useNavigationData();
  return (
    <nav
      role="navigation"
      aria-label="Primary navigation"
      data-testid="navigation-panel-test-id">
      <NavigationList itemCount={items.length}>
        {items.map(item => (
          <Item
            key={item.id}
            handle={item.handle}
            menuItems={item.menuItems}
            title={item.title}
            url={url}
          />
        ))}
      </NavigationList>
    </nav>
  );
};
