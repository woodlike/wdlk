import { useStaticQuery, graphql } from 'gatsby';

export function useProductData() {
  const { allDataJson, site } = useStaticQuery(graphql`
    query ProductJson {
      allDataJson {
        nodes {
          ariaLabels {
            select
          }
          cartButton
        }
      }
    }
  `);
  const result = allDataJson.nodes.filter(
    node => node.ariaLabels && node.cartButton,
  );
  return {
    header: allDataJson.nodes[0],
    url: site.siteMetadata.siteUrl,
  };
}
