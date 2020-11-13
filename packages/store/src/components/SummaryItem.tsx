import React from 'react';
import styled from './styled';

export interface SummaryItemProps {
  readonly justify?: 'start' | 'end' | 'center' | 'stretch';
}

const StyledSummaryItem = styled.div<SummaryItemProps>`
  justify-self: ${props => props.justify ?? 'start'};
`;

export const SummaryItem: React.FC<SummaryItemProps> = props => (
  <StyledSummaryItem justify={props.justify}>
    {props.children}
  </StyledSummaryItem>
);
