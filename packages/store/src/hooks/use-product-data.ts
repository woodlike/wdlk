import { useStaticQuery, graphql } from 'gatsby';

export function useProductData() {
  const { allProductJson } = useStaticQuery(graphql`
    query ProductDetailQuery {
      allProductJson {
        nodes {
          cartButton
          description {
            label
          }
          preOrder {
            label
            title
          }
          sizes {
            label
            link
            ariaLabel
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
