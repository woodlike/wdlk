import React from 'react';
import { Small } from '@wdlk/components';
import { Navigation, useHeaderData, useNavigationData, useSiteData } from '..';

export interface NavigationLayerProps {
  readonly isExpanded: boolean;
}

export const NavigationLayer: React.FC<NavigationLayerProps> = props => {
  const { items, url } = useNavigationData();
  const { header } = useHeaderData();
  const site = useSiteData();

  const brandItem = items.find(item => item.title === 'The Brand');
  const date = new Date();

  const { isExpanded } = props;
  return (
    <Navigation.Layer isExpanded={isExpanded}>
      <Navigation.LayerList>
        {items.map(item => (
          <Navigation.Link
            key={item.id}
            href={`${url}/${item.handle}`}
            current={false}
            isFocused={false}
            isInverted={true}
            context="panel"
            size="L"
            text={item.title}
          />
        ))}
      </Navigation.LayerList>
      <Navigation.LayerList>
        {brandItem &&
          brandItem.menuItems.map(item => (
            <Navigation.Link
              key={item.id}
              href={`${url}/${item.handle}`}
              current={false}
              isFocused={false}
              isInverted={true}
              context="panel"
              size="S"
              text={item.title}
            />
          ))}
        {header.miniCart.items.map(item => (
          <Navigation.Link
            key={item.id}
            href={`${url}/${item.handle}`}
            current={false}
            isFocused={false}
            isInverted={true}
            context="panel"
            size="S"
            text={item.title}
          />
        ))}
      </Navigation.LayerList>
      <Navigation.LayerFooter>
        <Small size="s" color="background">
          © {site.siteMetadata.brand} {date.getFullYear()}
        </Small>
      </Navigation.LayerFooter>
    </Navigation.Layer>
  );
};
