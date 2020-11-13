import React from 'react';
import styled from './styled';

export interface LabelProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: TextType;
  readonly highlight?: boolean;
}

export type TextType = 'label' | 'span' | 'legend' | 'small';

const StyledLabel = styled.span<LabelProps>`
  margin: 0;
  display: inline-block;
  font-family: ${props => props.theme.text.fontFamily};
  font-kerning: normal;
  font-size: ${props => `${props.theme.fontSizes[1]}px`};
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 0.2px;
  color: ${props =>
    props.highlight ? props.theme.colors.text : props.theme.colors.grays[2]};
  -webkit-font-smoothing: antialiased;
`;

StyledLabel.displayName = 'StyledLabel';

export const Label: React.FC<LabelProps> = props => (
  <StyledLabel as={props.as} highlight={props.highlight} size={props.size}>
    {props.children}
  </StyledLabel>
);
