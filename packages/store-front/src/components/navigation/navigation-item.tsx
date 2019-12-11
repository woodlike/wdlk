import * as React from 'react';
import { NavPanel, NavLink } from '@wdlk/component-library';

import { NavDataProps, NavData } from '.';

export const NavigationItem: React.FC<NavDataProps> = (props): JSX.Element => {
    const [isExpanded, setExpanded] = React.useState(false);
    return (
        <NavLink
        href={`${props.url}/${props.handle}`}
        current={false}
        isFocused={false}
        context="bar"
        text={props.title}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}>
        {props.menuItems.length > 0 && (
            <NavPanel isExpanded={isExpanded}>
            {props.menuItems.map((menuItem: NavData, i: number) => (
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
  );
};
