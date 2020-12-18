import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import { theme } from '@wdlk/components';

import { Content, Features, StageCarousel, SizingGuideLayer, Fabric } from '.';
import { Footer, Header } from '..';
import { CartProvider, GlobalCss, ProductLayout } from '../..';
import { ShopifyProductNode, ShopifyPageNode } from '../../gatsby';
import { CartLayer } from '../CartLayer';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyProduct: ShopifyProductNode;
    readonly shopifyPage: ShopifyPageNode;
  };
}

export const Product: React.FC<ProductLayoutProps> = ({ data }) => {
  const [sizingLayerIsOpen, setSizingLayerIsOpen] = useState(false);
  const [cartLayerIsOpen, setCartLayerIsOpen] = useState(false);
  const {
    shopifyProduct: {
      description,
      features,
      images,
      shopifyId,
      tags,
      title,
      variants,
      slug,
    },
    shopifyPage,
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalCss />
        <Header
          isCartOpen={cartLayerIsOpen}
          setIsCartOpen={setCartLayerIsOpen}
        />
        <main>
          <ProductLayout
            image={<StageCarousel images={images} />}
            content={
              <Content
                description={description}
                isOpen={sizingLayerIsOpen}
                shopifyId={shopifyId}
                setIsOpen={setSizingLayerIsOpen}
                slug={slug}
                tags={tags}
                title={title}
                variants={variants}
              />
            }
          />
        </main>
        {!!features && <Features features={features} images={images} />}
        {!!features?.fabricFeature && (
          <Fabric
            productName={title}
            fabricFeature={features.fabricFeature}
            images={images}
          />
        )}
        <Footer />
        <SizingGuideLayer
          sizingPage={shopifyPage}
          setIsOpen={setSizingLayerIsOpen}
          isOpen={sizingLayerIsOpen}
        />
        <CartLayer isOpen={cartLayerIsOpen} setIsOpen={setCartLayerIsOpen} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default Product;

export const query = graphql`
  query ProductQuery($id: String!, $layerId: String!) {
    shopifyProduct(id: { eq: $id }) {
      description
      features {
        remoteId
        title
        name
        modelTitle
        features
        fitAndCoverageTitle
        fitAndCoverageFeatureList
        fabricFeature {
          title
          materialTitle
          description
          features
          compositionTitle
          compositionFeatureList
        }
        productMarineProtection {
          title
          features
        }
      }
      images {
        id
        altText
        originalSrc
        srcSet
      }
      shopifyId
      slug
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
