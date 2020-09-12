import React from 'react';
import styled from './styled';

export interface HeadingProps {
  readonly size: HeadlineSize;
  readonly as?: HeadingLevel;
  readonly isInverted?: boolean;
}

export type HeadingFamily = 'display' | 'secondary' | 'campaign';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
export type HeadlineSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const StyledHeading = styled.h1<HeadingProps>`
  margin: 0;
  font-family: ${props => props.theme.heading.fontFamily};
  font-kerning: normal;
  font-size: ${props => {
    const { size, theme } = props;
    return !!theme.heading[size] ? `${theme.heading[size].fontSize}px` : '';
  }};
  color: ${props => {
    const { isInverted, theme } = props;
    return isInverted ? theme.heading.modes.color : theme.heading.color;
  }};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`;

StyledHeading.displayName = 'StyledHeading';

export const Heading: React.FC<HeadingProps> = props => (
  <StyledHeading
    as={props.as || 'h1'}
    isInverted={!!props.isInverted}
    size={props.size}>
    {props.children}
  </StyledHeading>
);
