import React from 'react';
import styled from './styled';

const StyledCartItemLayout = styled.li`
  display: grid;
  grid-template-columns: 30% 50% auto;
  justify-content: space-between;
  grid-column-gap: ${props => props.theme.space[3]}px;
`;

StyledCartItemLayout.displayName = 'StyledCartItemLayout';

export const CartItemLayout: React.FC = props => (
  <StyledCartItemLayout>{props.children}</StyledCartItemLayout>
);
