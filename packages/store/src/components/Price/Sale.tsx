/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesSale: SxStyleProp = {
  display: 'inline-block',
  color: ({ colors }: Theme) => colors.grays[1],
  fontFamily: 'body',
  fontSize: ({ fontSizes }: Theme) => [
    fontSizes[1],
    fontSizes[1],
    fontSizes[2],
    fontSizes[3],
  ],
  fontWeight: 300,
  lineHeight: 1,
  textDecoration: 'line-through',
};

export const Sale: React.FC = props => (
  <strong sx={stylesSale} itemProp="price">
    {props.children}
  </strong>
);

Sale.displayName = 'Price.Sale';
