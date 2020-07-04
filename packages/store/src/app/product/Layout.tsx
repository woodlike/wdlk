import * as React from 'react';
import { graphql } from 'gatsby';

import { StageCarousel } from '.';
import { Footer, Header } from '..';
import { Stage } from '../..';
import { ShopifyProductNode } from '../../../gatsby';

export interface ProductLayoutProps {
  readonly data: ShopifyProduct;
}

export interface ShopifyProduct {
  readonly shopifyProduct: ShopifyProductNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = query => {
  const { data } = query;
  const { shopifyProduct } = data;
  return (
    <>
      <Header />
      <main>
        <Stage.Layout
          image={<StageCarousel images={shopifyProduct.images} />}
          content={
            <div
              style={{
                backgroundColor: 'red',
                width: '100%',
                height: '180vh',
              }}></div>
          }
        />
      </main>
      <Footer />
    </>
  );
};

export default ProductLayout;

export const query = graphql`
  query ProductQuery($id: String) {
    shopifyProduct(id: { eq: $id }) {
      id
      description
      images {
        altText
        id
        originalSrc
        localFile {
          name
        }
      }
      title
    }
  }
`;
