import { CollectionImg, CollectionLayout, } from '../../';

import { Collection } from '../../model';
import { Layout } from '..';
import React from 'react';
import { graphql } from 'gatsby';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyCollection: Collection;
  };
}

export const CollectionLayoutPage: React.FC<ProductLayoutProps> = ({
  data,
}) => {
  const {
    shopifyCollection: { products},
  } = data;
  return (
    <Layout>
      {!!products.length && (
        <CollectionLayout.Frame>
          {products.map(product => (
            <CollectionLayout.Item key={product.shopifyId}>
              
              {/* TODO: Collection images should be taken care by Gatsby on build time */}
              <CollectionImg isActive={false} images={[product.images[0], product.images[2]]}/>
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
