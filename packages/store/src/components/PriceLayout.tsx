import { Box, Columns } from '@wdlk/components';

import React from 'react';

export interface PriceLayoutProps {
  readonly label: JSX.Element;
  readonly sale: JSX.Element | null;
}

export const PriceLayout: React.FC<PriceLayoutProps> = props => (
  <>
    {props.sale && props.sale}
    <Columns align="center">
      {props.children}
      <Box padding={[0, 0, 0, 4]}>{props.label}</Box>
    </Columns>
  </>
);
