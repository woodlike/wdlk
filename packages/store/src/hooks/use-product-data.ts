import { useStaticQuery, graphql } from 'gatsby';

export function useProductData() {
  const { allProductJson } = useStaticQuery(graphql`
    query ProductDetailQuery {
      allProductJson {
        nodes {
          cartButton
          ariaLabels {
            select
          }
        }
      }
    }
  `);

  const { nodes } = allProductJson;
  const [node] = nodes;
  return node;
}
