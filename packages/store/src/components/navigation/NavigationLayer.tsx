import * as React from 'react';
import { Nav } from '@wdlk/components';
import { LinkNode } from '../../hooks';
import { NavigationLayerProps } from '.';

export const NavigationLayer: React.FC<NavigationLayerProps> = (
  props,
): JSX.Element => {
  const brandItem = props.items.find(item => item.title === 'The Brand');
  return (
    <Nav.Layer isExpanded={props.isExpanded}>
      <Nav.LayerList>
        {props.items.map((item: LinkNode) => (
          <Nav.Link
            key={item.id}
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
          brandItem.menuItems.map(item => (
            <Nav.Link
              key={item.id}
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
