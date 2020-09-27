import React from 'react';
import { Columns, Layer, Heading } from '@wdlk/components';
import { useProductData, IconSize, Icon } from '../..';

export interface SizingGuideLayerProps {
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SizingGuideLayer: React.FC<SizingGuideLayerProps> = props => {
  const { sizes } = useProductData();
  return (
    <Layer
      isOpen={props.isOpen}
      padding={[6, 8]}
      onClickShim={() => props.setIsOpen(!props.isOpen)}>
      <Columns
        align="center"
        justifyContent="space-between"
        padding={[0, 0, 8, 0]}>
        <Heading type="secondary" size="xs">
          {sizes.link}
        </Heading>
        <Icon
          onClick={() => props.setIsOpen(!props.isOpen)}
          name="close"
          size={IconSize.xs}
          color="secondary"
        />
      </Columns>
      {props.children}
    </Layer>
  );
};
