import React, { Dispatch, SetStateAction } from 'react';
import { LayerAside, LayerShim, Columns, Heading } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';
import { Icon, IconSize } from '..';
import { useStaticQuery, graphql } from 'gatsby';

export interface CartLayer {
  readonly isOpen: boolean;
  readonly setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartLayer: React.FC<CartLayer> = props => {
  const { graphCmsCart } = useStaticQuery(graphql`
    query CartQuery {
      graphCmsCart {
        title
        vatValueLabel
        totalLabel
        shippingLabel
        itemsLabel
      }
    }
  `);
  const { breakpoints } = useTheme();
  const isVisible = useMedia(
    [`(min-width: ${breakpoints[2]})`, `(min-width: ${breakpoints[1]})`],
    [true, false],
    false,
  );
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <LayerAside padding={[6, 8]} isOpen={isOpen}>
        <Columns
          align="center"
          justifyContent="space-between"
          padding={[0, 0, 8, 0]}>
          <Heading type="secondary" size="xs">
            {graphCmsCart.title}
          </Heading>
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            name="close"
            size={IconSize.xs}
            color="secondary"
          />
        </Columns>
      </LayerAside>
      {isVisible && (
        <LayerShim isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};
