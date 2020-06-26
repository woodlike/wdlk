import * as React from 'react';
import { graphql } from 'gatsby';

import { Footer, Header } from '..';
import { ShopifyProductNode } from '../../../gatsby';

export interface ProductLayoutProps {
  readonly data: ShopifyProduct;
}

export interface ShopifyProduct {
  readonly shopifyProduct: ShopifyProductNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = props => {
  const { data } = props;
  const { shopifyProduct } = data;
  const { title } = shopifyProduct;
  return (
    <>
      <Header />
      <main>{title}</main>
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
        localFile {
          name
        }
      }
      title
    }
  }
`;