import { FC } from 'react';

import * as Label from './Label';
import * as Layout from './Layout';
import * as Sale from './Sale';
import * as Total from './Total';

export interface PriceProps {
  readonly Label: FC<{}>;
  readonly Layout: FC<Layout.PriceLayoutProps>;
  readonly Sale: FC<{}>;
  readonly Total: FC<{}>;
}

export const Price: PriceProps = {
  ...Label,
  ...Layout,
  ...Sale,
  ...Total,
};
