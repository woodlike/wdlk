import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import { theme } from '@wdlk/components';

import { Content, StageCarousel, SizingGuideLayer } from '.';
import { Footer, Header } from '..';
import { CartProvider, GlobalCss, ProductLayout } from '../..';
import { ShopifyProductNode, ShopifyPageNode } from '../../gatsby';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyProduct: ShopifyProductNode;
    readonly shopifyPage: ShopifyPageNode;
  };
}

export const App: React.FC<ProductLayoutProps> = ({ data }) => {
  const [sizingLayerIsOpen, setSizingLayerIsOpen] = useState(false);
  const {
    shopifyProduct: { description, images, shopifyId, tags, title, variants },
    shopifyPage,
  } = data;
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalCss />
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
          sizingPage={shopifyPage}
          setIsOpen={setSizingLayerIsOpen}
          isOpen={sizingLayerIsOpen}
        />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;

export const query = graphql`
  query ProductQuery($id: String!, $layerId: String!) {
    shopifyProduct(id: { eq: $id }) {
      description
      features {
        title
        modelTitle
        modelDescription
        fitAndCoverageTitle
        fitAndCoverageDescription
      }
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
    shopifyPage(id: { eq: $layerId }) {
      body
      bodySummary
      title
    }
  }
`;
