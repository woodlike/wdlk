import React from 'react';
import { Columns, Layer, Heading, Text, Box } from '@wdlk/components';
import { SizingTable } from '.';
import { IconSize, Icon } from '../..';
import { ShopifyPageNode } from '../../gatsby';

export interface SizingGuideLayerProps {
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly sizingPage: ShopifyPageNode;
}

export const SizingGuideLayer: React.FC<SizingGuideLayerProps> = props => {
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
          {props.sizingPage.title}
        </Heading>
        <Icon
          onClick={() => props.setIsOpen(!props.isOpen)}
          name="close"
          size={IconSize.xs}
          color="secondary"
        />
      </Columns>
      <Box padding={[0, 0, 4, 0]}>
        <Text size="s">{props.sizingPage.bodySummary}</Text>
      </Box>
      <SizingTable />
    </Layer>
  );
};
