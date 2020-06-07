import * as React from 'react';
import { Nav } from '@wdlk/components';

import { NavDataProps } from '.';

export const NavigationItem: React.FC<NavDataProps> = (props): JSX.Element => {
  const [isExpanded, setExpanded] = React.useState(false);
  return (
    <Nav.Link
      href={`${props.url}/${props.handle}`}
      current={false}
      isFocused={false}
      context="bar"
      text={props.title}
      isActive={isExpanded}
      onMouseEnter={(): void => setExpanded(true)}
      onMouseLeave={(): void => setExpanded(false)}>
      {props.menuItems.length > 0 && (
        <Nav.Panel isExpanded={isExpanded}>
          {props.menuItems.map(menuItem => (
            <Nav.Link
              key={menuItem.id}
              href={`${props.url}/${menuItem.handle}`}
              current={false}
              isFocused={true}
              context="panel"
              text={menuItem.title}
            />
          ))}
        </Nav.Panel>
      )}
    </Nav.Link>
  );
};
