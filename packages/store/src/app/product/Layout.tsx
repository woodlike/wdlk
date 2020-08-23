import React from 'react';
import { graphql } from 'gatsby';

import { Footer, Header } from '..';
import { ShopifyProductNode, Variant } from '../../gatsby';
import { CartProvider } from '../../context';
import { ProductStage } from './Stage';

export interface ProductLayoutProps {
  readonly data: ShopifyProduct;
}

export interface ShopifyProduct {
  readonly shopifyProduct: ShopifyProductNode;
}

export interface SelectItem {
  readonly isActive: boolean;
  setActive(variant: Variant): void;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ data }) => {
  const {
    shopifyProduct: { images, title, variants },
  } = data;

  return (
    <CartProvider>
      <Header />
      <main>
        <ProductStage images={images} title={title} variants={variants} />
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
      title
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
