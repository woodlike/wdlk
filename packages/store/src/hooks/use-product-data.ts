import { useStaticQuery, graphql } from 'gatsby';

export function useProductData() {
  const { allProductJson } = useStaticQuery(graphql`
    query ProductDetailQuery {
      allProductJson {
        nodes {
          ariaLabels {
            select
          }
          cartButton
          preOrder {
            label
            title
          }
          taxLabel
        }
      }
    }
  `);

  const { nodes } = allProductJson;
  const [node] = nodes;
  return node;
}
