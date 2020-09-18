import React from 'react';
import { Box, Columns } from '@wdlk/components';

export interface PriceLayoutProps {
  readonly label: JSX.Element;
  readonly sale: JSX.Element | null;
}

export const PriceLayout: React.FC<PriceLayoutProps> = props => (
  <>
    {props.sale && <Box padding={[0, 2]}>{props.sale}</Box>}
    <Columns align="center">
      {props.children}
      <Box padding={[0, 0, 0, 4]}>{props.label}</Box>
    </Columns>
  </>
);
