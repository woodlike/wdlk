import * as React from 'react';
import { graphql } from 'gatsby';
import { Box, Theme, ScaleArea } from '@wdlk/components';

import { StageCarousel } from '.';
import { Footer, Header, Title } from '..';
import { Price, Stage } from '../..';
import { ShopifyProductNode, Variant } from '../../gatsby';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';

export interface ProductLayoutProps {
  readonly data: ShopifyProduct;
}

export interface ShopifyProduct {
  readonly shopifyProduct: ShopifyProductNode;
}

const contestScales: ScaleArea[] = [
  [8, 8],
  [8, 7],
  [8, 4],
];

export const ProductLayout: React.FC<ProductLayoutProps> = ({ data }) => {
  const {
    shopifyProduct: { images, variants, title },
  } = data;
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;
  const scales = useMedia<ScaleArea>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
    ],
    contestScales,
    contestScales[contestScales.length - 1],
  );
  const [activeVariant] = React.useState<Variant>(variants[0]);

  return (
    <>
      <Header />
      <main>
        <Stage.Layout
          image={<StageCarousel images={images} />}
          content={
            <Box padding={scales}>
              <Title>{title}</Title>
              <Price.Layout
                //TODO: Make this value translatable
                label={<Price.Label>(VAT included)</Price.Label>}
                sale={
                  !!activeVariant.compareAtLocalePrice && (
                    <Price.Sale>
                      {activeVariant.compareAtLocalePrice.amount}
                    </Price.Sale>
                  )
                }>
                <Price.Total>{activeVariant.priceLocale.amount}</Price.Total>
              </Price.Layout>
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
      variants {
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
