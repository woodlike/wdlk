import { Box, Text } from '@wdlk/components';
import { CollectionImg, CollectionLayout, Price } from '../../';

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
    shopifyCollection: { products },
  } = data;
  return (
    <Layout>
      {!!products.length && (
        <CollectionLayout.Frame>
          {products.map(product => (
            <CollectionLayout.Item
              key={product.shopifyId}
              slug={product.slug}
              caption={
                <>
                  <Box padding={[0, 0, 1, 0]}>
                  <Text as="div" size="s">{product.title}</Text>
                  </Box>
                  <Price size="s">
                    {product.variants[0].priceLocale?.amount}
                    {product.variants[0].priceLocale?.currencyCode}
                  </Price>
                  {product.variants[0].compareAtLocalePrice && (
                    <>
                    {' '}
                    <Price size="s" isStrikethrough>
                      {product.variants[0].compareAtLocalePrice?.amount}
                      {product.variants[0].compareAtLocalePrice?.currencyCode}
                    </Price>
                    </>
                  )}
                </>
              }>
              {/* TODO: Collection images should be taken care by Gatsby on build time */}
              <CollectionImg
                isActive={false}
                images={[product.images[0], product.images[2]]}
              />
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
