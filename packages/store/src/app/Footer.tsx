import { Small } from '@wdlk/components';
import * as React from 'react';

import { Footer as FooterUI, Icon, IconSize } from '../components';
import { useFooterLinks, useSiteData, useSocialLinks } from '../hooks';

export const Footer: React.FC = () => {
  const { nodes, url } = useFooterLinks();
  const channels = useSocialLinks();
  const { siteMetadata } = useSiteData();
  const date = new Date();
  return (
    <FooterUI.Frame
      small={
        <Small size="s">
          © {siteMetadata.brand} {date.getFullYear()}
        </Small>
      }>
      <FooterUI.Menu>
        {nodes.map(node => (
          <FooterUI.Row key={node.id}>
            {node.menuItems.map(item => (
              <FooterUI.RowItem handle={item.handle} key={item.id} url={url}>
                {item.title}
              </FooterUI.RowItem>
            ))}
          </FooterUI.Row>
        ))}
      </FooterUI.Menu>
      {!!channels.length && (
        <FooterUI.IconBar>
          {channels.map(channel => (
            <FooterUI.IconBarItem key={channel.id} href={channel.url}>
              <Icon name={channel.name} size={IconSize.s} color="primary" />
            </FooterUI.IconBarItem>
          ))}
        </FooterUI.IconBar>
      )}
    </FooterUI.Frame>
  );
};
