import React from 'react';
import styled from './styled';

const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: ${props => props.theme.space[3]}px;
  padding: ${props => `${props.theme.space[6]}px ${props.theme.space[4]}px`};
  align-items: center;
  background-color: ${props => props.theme.colors.beiges[1]};

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: ${props => `${props.theme.space[6]}px 0`};
    background-color: inherit;
    border-bottom: 1px solid ${props => props.theme.colors.grays[0]};
  }
`;

export const Summary: React.FC = props => (
  <StyledSummary>{props.children}</StyledSummary>
);
