import React from 'react';
import styled from './styled';

export interface ListItemProps {
  readonly isInverted?: boolean;
}

const StyledListItem = styled.li<ListItemProps>`
  font-family: ${props => props.theme.fonts.body};
  line-height: 1.5;
  color: ${({ isInverted, theme }) =>
    !!isInverted ? theme.text.modes.color : theme.text.color};
  -webkit-font-smoothing: antialiased;
`;

StyledListItem.displayName = 'StyledListItem';

export const ListItem: React.FC<ListItemProps> = props => (
  <StyledListItem isInverted={props.isInverted}>
    {props.children}
  </StyledListItem>
);
