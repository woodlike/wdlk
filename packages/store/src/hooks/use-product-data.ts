import { useStaticQuery, graphql } from 'gatsby';

export interface ProductData {
  readonly cartButton: string;
  readonly description: {
    readonly label: string;
  };
  readonly preOrder: {
    readonly label: string;
    readonly title: string;
  };
  readonly sizes: {
    readonly label: string;
    readonly link: string;
    readonly ariaLabel: string;
  };
  readonly sizingLayer: SizingLayerData;
  readonly taxLabel: string;
}

export interface SizingLayerData {
  readonly sizeChart: {
    readonly id: string;
    readonly title: string;
    readonly values: string[];
  }[];
  readonly bodyMeasurement: {
    readonly id: string;
    readonly title: string;
    readonly values: string[];
  }[];
}

export function useProductData(): ProductData {
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
          sizingLayer {
            bodyMeasurement {
              id
              title
              values
            }
            sizeChart {
              id
              title
              values
            }
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
