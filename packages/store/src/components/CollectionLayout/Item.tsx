import { Link } from 'gatsby';
import React from 'react';
import styled from '../styled';

export interface CollectionItemProps {
  readonly caption: JSX.Element;
  readonly slug: string;
}

// TODO: should be fixed with a Gatsby update
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledLink = styled(Link as any)`
  text-decoration: none;
`;

const StyledCaptionSlot = styled.div`
  padding: ${props => props.theme.space[2]}px;
`;

StyledCaptionSlot.displayName = 'StyledCaptionSlot';

export const Item: React.FC<CollectionItemProps> = props => (
  <li>
    <StyledLink to={props.slug}>
      {props.children}
      <StyledCaptionSlot>{props.caption}</StyledCaptionSlot>
    </StyledLink>
  </li>
);
