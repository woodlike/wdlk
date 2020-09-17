import { useStaticQuery, graphql } from 'gatsby';

export function useSiteData() {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          brand
        }
      }
    }
  `);
  return site;
}
