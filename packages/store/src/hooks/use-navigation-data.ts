import { useStaticQuery, graphql } from 'gatsby';
import { NavigationProps } from '../components/Navigation';

export function useNavigationData(): NavigationProps {
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
