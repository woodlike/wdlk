import { Content, Fabric, Features, SizingGuideLayer, StageCarousel } from '.';
import React, { useState } from 'react';
import { ShopifyPageNode, ShopifyProductNode } from '../../gatsby';

import { Layout } from '..';
import { ProductLayout } from '../..';
import { graphql } from 'gatsby';

export interface ProductLayoutProps {
  readonly data: {
    readonly shopifyProduct: ShopifyProductNode;
    readonly shopifyPage: ShopifyPageNode;
  };
}

export const Product: React.FC<ProductLayoutProps> = ({ data }) => {
  const [sizingLayerIsOpen, setSizingLayerIsOpen] = useState(false);
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
    <Layout
      layer={
        <SizingGuideLayer
          sizingPage={shopifyPage}
          setIsOpen={setSizingLayerIsOpen}
          isOpen={sizingLayerIsOpen}
        />
      }>
      <main>
        <ProductLayout
          image={<StageCarousel images={images} />}
          content={
            <Content
              currencyCode={variants[0].priceLocale.currencyCode}
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
    </Layout>
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
          currencyCode
        }
        compareAtLocalePrice {
          amount
          currencyCode
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
