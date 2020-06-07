import { useStaticQuery, graphql } from 'gatsby';
import { LinkNode } from './types';

export interface UserFooterLinks {
  nodes: LinkNode[];
  url: string;
}

export function useFooterLinks(): UserFooterLinks {
  const { allFooterJson, site } = useStaticQuery(graphql`
    query FooterLinksQuery {
      allFooterJson {
        nodes {
          id
          handle
          title
          menuItems {
            id
            handle
            title
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  return {
    nodes: allFooterJson.nodes,
    url: site.siteMetadata.siteUrl,
  };
}
