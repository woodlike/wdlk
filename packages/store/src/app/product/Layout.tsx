import * as React from 'react';
import { graphql } from 'gatsby';
import { Box, Theme, ScaleArea } from '@wdlk/components';

import { StageCarousel } from '.';
import { Footer, Header, Title } from '..';
import { Stage } from '../..';
import { ShopifyProductNode } from '../../../gatsby';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';

export interface ProductLayoutProps {
  readonly data: ShopifyProduct;
}

export interface ShopifyProduct {
  readonly shopifyProduct: ShopifyProductNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = query => {
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;
  const contentSpacing = useMedia<ScaleArea>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
    ],
    [
      [8, 8],
      [8, 7],
      [8, 4],
    ],
    [8, 4],
  );
  const {
    shopifyProduct: { images, title },
  } = query.data;
  return (
    <>
      <Header />
      <main>
        <Stage.Layout
          image={<StageCarousel images={images} />}
          content={
            <Box padding={contentSpacing}>
              <Title>{title}</Title>
            </Box>
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
        id
        altText
        originalSrc
        srcSet {
          id
          src
        }
      }
      title
    }
  }
`;
