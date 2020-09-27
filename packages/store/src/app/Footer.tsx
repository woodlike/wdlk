import React from 'react';
import { Box, Columns, Link, Small } from '@wdlk/components';

import { FooterLayout, Icon, IconSize } from '..';
import { useFooterLinks, useSiteData, useSocialLinks } from '../hooks';

export const Footer: React.FC = () => {
  const { nodes, url } = useFooterLinks();
  const channels = useSocialLinks();
  const { siteMetadata } = useSiteData();
  const date = new Date();
  return (
    <FooterLayout
      menu={
        <>
          {nodes.map(node => (
            <Box as="ul" key={node.id} padding={[0, 0, 8, 0]}>
              {node.menuItems.map(item => (
                <Box as="li" key={item.id} padding={[0, 0, 3, 0]}>
                  <Link
                    href={`${url}/${item.handle}`}
                    size="m"
                    color="primary"
                    type="block">
                    {item.title}
                  </Link>
                </Box>
              ))}
            </Box>
          ))}
        </>
      }
      small={
        <Small size="s">
          © {siteMetadata.brand} {date.getFullYear()}
        </Small>
      }>
      {!!channels.length && (
        <Box padding={[0, 0, 6, 0]}>
          <Columns justifyContent="center" align="center">
            {channels.map((channel, idx) => (
              <Box key={channel.id} padding={[0, 5]}>
                <a target="_blank" rel="noopener noreferrer" href={channel.url}>
                  <Icon
                    name={channel.name}
                    size={idx === 0 ? IconSize.s : IconSize.xs}
                    color="primary"
                  />
                </a>
              </Box>
            ))}
          </Columns>
        </Box>
      )}
    </FooterLayout>
  );
};
