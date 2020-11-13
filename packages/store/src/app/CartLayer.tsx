import React from 'react';
import { LayerAside, LayerShim } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';

export interface CartLayer {
  readonly isOpen: boolean;
}

export const CartLayer: React.FC<CartLayer> = props => {
  const { breakpoints } = useTheme();
  const isVisible = useMedia(
    [`(min-width: ${breakpoints[2]})`, `(min-width: ${breakpoints[1]})`],
    [true, false],
    false,
  );
  return (
    <>
      <LayerAside padding={[6, 8]} isOpen={props.isOpen}>
        Hi Mom
      </LayerAside>
      {isVisible && <LayerShim isOpen={props.isOpen} />}
    </>
  );
};
