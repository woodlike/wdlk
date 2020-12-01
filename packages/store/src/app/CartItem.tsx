import React, { useContext } from 'react';
import { Box, Link, Text } from '@wdlk/components';
import { Link as GatsbyLink } from 'gatsby';

import { GraphCMSCart } from '.';
import { CartItemLayout, Image, Label } from '../components';
import {
  LineItem,
  CartContext,
  CartActionsContext,
  ActionsContext,
  CartState,
} from '../model';

export interface CartItemProps {
  readonly altText: string;
  readonly lineItem: LineItem;
  readonly cmsCart: GraphCMSCart;
}

export const CartItem: React.FC<CartItemProps> = props => {
  const { removeLineItem } = useContext<ActionsContext>(CartActionsContext);
  const { client, cart } = useContext<CartState>(CartContext);
  const removeCartPayload = {
    client,
    cartId: cart.id,
    lineItemId: props.lineItem.id as string,
  };

  return (
    <CartItemLayout>
      <GatsbyLink to={props.lineItem.customAttributes[0].value}>
        <Image
          alt={props.altText}
          fit="cover"
          src={props.lineItem.variant.image.src}
        />
      </GatsbyLink>
      <div>
        <Text size="m">{props.lineItem.title}</Text>
        <Box padding={[2, 0]}>
          <Label size="s">
            {props.cmsCart.sizeLabel}: {props.lineItem.variant.title}
          </Label>
        </Box>
        <Link
          as="span"
          color="secondary"
          size="s"
          onClick={() => removeLineItem(removeCartPayload)}>
          {props.cmsCart.removeLabel}
        </Link>
      </div>
      <Text size="m">
        {props.lineItem.variant.priceV2.amount}{' '}
        {props.lineItem.variant.priceV2.currencyCode}
      </Text>
    </CartItemLayout>
  );
};
