import { useStaticQuery, graphql } from 'gatsby';

export function useHeaderData() {
  const {allDataJson, site } = useStaticQuery(graphql`
    query HeaderJson {
      allDataJson {
        nodes {
          logo {
            title
            desc
          }
          cart {
            handle
          }
          miniCart {
            items {
              handle
              title
              id
            }
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
    header: allDataJson.nodes[0],
    url: site.siteMetadata.siteUrl
  };
}
