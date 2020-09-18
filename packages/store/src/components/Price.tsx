import React from 'react';
import { useTheme } from 'emotion-theming';
import { Heading, HeadlineSize } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';
import styled from './styled';

export interface PriceProps {
  readonly type: 'primary' | 'secondary';
}

const StyledSecondaryPrice = styled.strong`
  display: inline-block;
  color: ${props => props.theme.colors.grays[1]};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes[1]};
  font-weight: 300;
  line-height: 1;
  text-decoration: line-through;

  ${props => {
    const {
      theme: { breakpoints, fontSizes },
    } = props;
    return `
    @media (min-width: ${breakpoints[2]}) {
      font-size: ${fontSizes[2]};
    }
    @media (min-width: ${breakpoints[3]}) {
      font-size: ${fontSizes[3]};
    }
    `;
  }};
`;

StyledSecondaryPrice.displayName = 'StyledSecondaryPrice';

export const Price: React.FC<PriceProps> = props => {
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
