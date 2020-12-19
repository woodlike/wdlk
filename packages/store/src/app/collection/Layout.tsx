import React from 'react';
import { Layout } from '..';
import { graphql } from 'gatsby';
import { Collection } from '../../model';
import { CollectionLayout } from '../../';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyCollection: Collection;
  };
}

export const CollectionLayoutPage: React.FC<ProductLayoutProps> = ({
  data,
}) => {
  const {
    shopifyCollection: { products },
  } = data;
  return (
    <Layout>
      {!!products.length && (
        <CollectionLayout.Frame>
          {products.map(product => (
            <CollectionLayout.Item key={product.shopifyId}>
              <h2>{product.title}</h2>
            </CollectionLayout.Item>
          ))}
        </CollectionLayout.Frame>
      )}
    </Layout>
  );
};

export default CollectionLayoutPage;

export const query = graphql`
  query CollectionQuery($id: String!) {
    shopifyCollection(id: { eq: $id }) {
      products {
        title
        variants {
          priceLocale {
            amount
            currencyCode
          }
          compareAtLocalePrice {
            amount
            currencyCode
          }
        }
        shopifyId
        slug
        images {
          id
          altText
          srcSet
        }
      }
      slug
    }
  }
`;
