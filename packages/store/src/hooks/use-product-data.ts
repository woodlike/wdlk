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
            description
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
