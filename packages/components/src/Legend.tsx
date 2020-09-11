import React from 'react';
import styled from './styled';

export interface LegendProps {
  readonly size: LegendSize;
  readonly as?: LegendTypes;
  readonly type?: 'primary' | 'secondary';
}

type LegendTypes =
  | 'figcaption'
  | 'legend'
  | 'strong'
  | 'small'
  | 'span'
  | 'div';

type LegendSize = 's' | 'm' | 'l';

const StyledLegend = styled.div<LegendProps>`
  color: ${({ theme }) => theme.legend.color};
  font-family: ${({ theme }) => theme.legend.fontFamily};
  font-size: ${({ size, theme }) => `${theme.legend[size].fontSize}px`};
  text-transform: ${({ type }) =>
    type === 'primary' ? 'uppercase' : 'lowercase'};
  font-kerning: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
`;

StyledLegend.displayName = 'StyledLegend';

export const Legend: React.FC<LegendProps> = props => (
  <StyledLegend
    as={props.as || 'div'}
    size={props.size}
    type={props.type || 'primary'}>
    {props.children}
  </StyledLegend>
);
