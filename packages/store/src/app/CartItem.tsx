import React from 'react';
import { Text, Stack, Box } from '@wdlk/components';
import { Link } from 'gatsby';

import { CartItemLayout, Image, Label } from '..';

export interface CartItem {
  alt: string;
  src: string;
  title: string;
  size: string;
  slug: string;
  price: string;
}

export const CartItem: React.FC<CartItem> = props => {
  return (
    <CartItemLayout>
      <Link to={props.slug}>
        <Image alt={props.alt} fit="cover" src={props.src} />
      </Link>
      <div>
        <Box padding={[0, 0, 3, 0]}>
          <Text size="m">{props.title}</Text>
        </Box>
        <Label size="s">{props.size}</Label>
      </div>
      <Text size="m">{props.price}</Text>
    </CartItemLayout>
  );
};
