/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box } from '@wdlk/components';
import { Fragment } from 'react';

export interface PriceLayoutProps {
  readonly label: JSX.Element;
  readonly sale: JSX.Element | boolean;
}

const stylesTotalSlot: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
};

export const Layout: React.FC<PriceLayoutProps> = props => (
  <Fragment>
    {props.sale ?? <Box padding={[0, 2]}>{props.sale}</Box>}
    <div sx={stylesTotalSlot}>
      {props.children}
      <Box padding={[0, 0, 0, 4]}>{props.label}</Box>
    </div>
  </Fragment>
);
