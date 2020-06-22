import * as React from 'react';

import { Navigation, NavData } from '.';
import { LinkNode } from '../..';

export interface NavigationItemProps extends NavData {
  readonly menuItems: LinkNode[];
}

export const Item: React.FC<NavigationItemProps> = props => {
  const [isExpanded, setExpanded] = React.useState(false);
  return (
    <Navigation.Link
      href={`${props.url}/${props.handle}`}
      current={false}
      isFocused={false}
      context="bar"
      text={props.title}
      isActive={isExpanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}>
      {props.menuItems.length > 0 && (
        <Navigation.Panel isExpanded={isExpanded}>
          {props.menuItems.map(menuItem => (
            <Navigation.Link
              key={menuItem.id}
              href={`${props.url}/${menuItem.handle}`}
              current={false}
              // TODO: this prop is meant for the upcomming focus manager
              isFocused={false}
              context="panel"
              text={menuItem.title}
            />
          ))}
        </Navigation.Panel>
      )}
    </Navigation.Link>
  );
};

Item.displayName = 'NavigationItem';
