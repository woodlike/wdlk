import { Heading, HeadlineSize } from '@wdlk/components';

import React from 'react';
import styled from './styled';
import { useMedia } from '@wdlk/hooks';
import { useTheme } from 'emotion-theming';

export interface ProductPriceProps {
  readonly type: 'primary' | 'secondary';
}

const StyledSecondaryPrice = styled.strong`
  display: inline-block;
  color: ${props => props.theme.colors.grays[1]};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: 300;
  line-height: 1;
  text-decoration: line-through;
  -webkit-font-smoothing: antialiased;
  
  ${props => {
    const {
      theme: { breakpoints, fontSizes },
    } = props;
    return `
    @media (min-width: ${breakpoints[2]}) {
      font-size: ${fontSizes[2]}px;
    }
    @media (min-width: ${breakpoints[3]}) {
      font-size: ${fontSizes[3]}px;
    }
    `;
  }};
`;

StyledSecondaryPrice.displayName = 'StyledSecondaryPrice';

export const ProductPrice: React.FC<ProductPriceProps> = props => {
  const { breakpoints } = useTheme();
  const size = useMedia<HeadlineSize>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
      `(min-width: ${breakpoints[0]})`,
    ],
    ['m', 'm', 's', 's'],
    's',
  );
  return props.type === 'primary' ? (
    <Heading as="h2" size={size} type="primary">
      {props.children}
    </Heading>
  ) : (
    <StyledSecondaryPrice itemProp="price">
      {props.children}
    </StyledSecondaryPrice>
  );
};
