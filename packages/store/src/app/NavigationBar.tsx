import * as React from 'react';
import { LinkNode, NavData, Navigation, useNavigationData } from '..';

export interface NavigationItemProps extends NavData {
  readonly menuItems: LinkNode[];
}

export const NavigationItem: React.FC<NavigationItemProps> = props => {
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

export const NavigationBar: React.FC = () => {
  const { items, url } = useNavigationData();
  return (
    <Navigation.Frame>
      <Navigation.Bar itemCount={items.length}>
        {items.map(item => (
          <NavigationItem
            key={item.id}
            handle={item.handle}
            menuItems={item.menuItems}
            title={item.title}
            url={url}
          />
        ))}
      </Navigation.Bar>
    </Navigation.Frame>
  );
};
