import { useStaticQuery, graphql } from 'gatsby';
import { LinkNode } from '.';

export interface UseNavigationData {
  readonly items: LinkNode[];
  readonly url: string;
}

export function useNavigationData(): UseNavigationData {
  const { allNavigationJson, site } = useStaticQuery(graphql`
    query SiteMetaDataAndAllNavigationJson {
      allNavigationJson {
        nodes {
          title
          handle
          id
          menuItems {
            handle
            title
            id
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
    items: allNavigationJson.nodes,
    url: site.siteMetadata.siteUrl,
  };
}
