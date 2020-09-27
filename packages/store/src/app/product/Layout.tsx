import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import { theme } from '@wdlk/components';

import { Content, StageCarousel, SizingGuideLayer } from '.';
import { Footer, Header } from '..';
import { CartProvider, ProductLayout } from '../..';
import { ShopifyProductNode } from '../../gatsby';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyProduct: ShopifyProductNode;
  };
}

export const App: React.FC<ProductLayoutProps> = ({ data }) => {
  const [sizingLayerIsOpen, setSizingLayerIsOpen] = useState(false);
  const {
    shopifyProduct: { description, images, shopifyId, tags, title, variants },
  } = data;
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Header />
        <main>
          <ProductLayout
            image={<StageCarousel images={images} />}
            content={
              <Content
                description={description}
                isOpen={sizingLayerIsOpen}
                shopifyId={shopifyId}
                setIsOpen={setSizingLayerIsOpen}
                tags={tags}
                title={title}
                variants={variants}
              />
            }
          />
        </main>
        <Footer />
        <SizingGuideLayer
          setIsOpen={setSizingLayerIsOpen}
          isOpen={sizingLayerIsOpen}
        />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;

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
