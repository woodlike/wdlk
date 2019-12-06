import { useStaticQuery, graphql } from 'gatsby';
import { NavigationProps } from '../components/navigation';

export function useNavigationData(): NavigationProps {
  const { allNavigationJson, site } = useStaticQuery(graphql`
    query SiteMetaDataAndAllNavigationJson {
      allNavigationJson {
        nodes {
          title
          handle
          menuItems {
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
    items: allNavigationJson.nodes,
    url: site.siteMetadata.siteUrl
  };
}
