import React from 'react';
import { graphql } from 'gatsby';

import { Content, StageCarousel } from '.';
import { Footer, Header } from '..';
import { CartProvider, Stage } from '../..';
import { ShopifyProductNode } from '../../gatsby';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyProduct: ShopifyProductNode;
  };
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ data }) => {
  const {
    shopifyProduct: { description, images, shopifyId, tags, title, variants },
  } = data;
  return (
    <CartProvider>
      <Header />
      <main>
        <Stage.Layout
          image={<StageCarousel images={images} />}
          content={
            <Content
              description={description}
              shopifyId={shopifyId}
              tags={tags}
              title={title}
              variants={variants}
            />
          }
        />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default ProductLayout;

export const query = graphql`
  query ProductQuery($id: String) {
    shopifyProduct(id: { eq: $id }) {
      description
      images {
        id
        altText
        originalSrc
        srcSet
      }
      shopifyId
      tags
      title
      updatedAt
      variants {
        shopifyId
        title
        priceLocale {
          amount
        }
        compareAtLocalePrice {
          amount
        }
      }
    }
  }
`;
