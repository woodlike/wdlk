import React from 'react';
import styled from './styled';

export interface LinkProps {
  readonly size: 's' | 'm' | 'l';
  readonly type?: 'primary' | 'secondary';
}

const StyledLink = styled.a<LinkProps>`
  font-family: ${props => props.theme.link.fontFamily};
  font-size: ${props => {
    const { size, theme } = props;
    return !!theme.link[size] ? `${theme.link[size].fontSize}px` : '';
  }};
  color: ${props => {
    const { type, theme } = props;
    return !!type
      ? theme.link.color[type].default
      : theme.link.color.primary.default;
  }};
  font-kerning: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  :hover {
    color: ${props => {
      const { type, theme } = props;
      return !!type
        ? theme.link.color[type].hover
        : theme.link.color.primary.hover;
    }};
  }
`;
StyledLink.displayName = 'StyledLink';

export const Link: React.FC<LinkProps> = props => (
  <StyledLink size={props.size} type={props.type}>
    {props.children}
  </StyledLink>
);
