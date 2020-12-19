import React from 'react';
import styled from '../styled';

const StyledItem = styled.li``;

StyledItem.displayName = 'Collection.StyledItem';

export const Item: React.FC = props => (
  <StyledItem>{props.children}</StyledItem>
);
