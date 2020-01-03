import * as React from 'react';
import { Nav } from '@wdlk/component-library';
import { NavigationLayerProps, NavDataProps } from '.';

export const NavigationLayer: React.FC<NavigationLayerProps> = (
  props
): JSX.Element => {
  const brandItem = props.items.find(item => item.title === 'The Brand');
  return (
    <Nav.Layer isExpanded={false}>
      <Nav.LayerList>
        {props.items.map((item: NavDataProps, idx: number) => (
          <Nav.Link
            key={idx}
            href={`${props.url}/${item.handle}`}
            current={false}
            isFocused={false}
            isInverted={true}
            context="panel"
            size="L"
            text={item.title}
          />
        ))}
      </Nav.LayerList>
      <Nav.LayerList>
        {brandItem &&
          brandItem.menuItems.map((item, idx: number) => (
            <Nav.Link
              key={idx}
              href={`${props.url}/${item.handle}`}
              current={false}
              isFocused={false}
              isInverted={true}
              context="panel"
              size="S"
              text={item.title}
            />
          ))}
          {props.login && (
            <Nav.Link
            href={`${props.url}/${props.login.handle}`}
            current={false}
            isFocused={false}
            isInverted={true}
            context="panel"
            size="S"
            text={props.login.title}
          />
          )}
      </Nav.LayerList>
      <Nav.LayerFooter>®Woodlike 2020</Nav.LayerFooter>
    </Nav.Layer>
  );
};
NavigationLayer.displayName = 'NavigationLayer';
