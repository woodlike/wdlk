import React from 'react';
import styled from './styled';

export interface TextProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: TextType;
  readonly isInverted?: boolean;
}

export type TextType = 'p' | 'div';

const StyledText = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.text.fontFamily};
  font-kerning: normal;
  font-size: ${({ size, theme }) => `${theme.text[size].fontSize}px`};
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 0.2px;
  color: ${({ isInverted, theme }) =>
    !!isInverted ? theme.text.modes.color : theme.text.color};
  -webkit-font-smoothing: antialiased;
`;

StyledText.displayName = 'StyledText';

export const Text: React.FC<TextProps> = props => (
  <StyledText
    as={props.as || 'p'}
    isInverted={props.isInverted}
    size={props.size}>
    {props.children}
  </StyledText>
);
