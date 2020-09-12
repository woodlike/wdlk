import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import { Theme } from '.';
import styled from './styled';

export interface LinkProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: 'a' | 'span' | 'button';
  readonly href?: string;
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
  readonly type?: 'primary' | 'secondary';
}

interface StyledLinkProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: 'a' | 'span' | 'button';
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
  readonly type?: 'primary' | 'secondary';
}

const stylesUnderline = (theme: Theme): SerializedStyles => css`
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 100%;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: translate3d(100%, 0, 0);
    transition: transform ${theme.transition.duration[0]}s ${theme.transition.timing[0]};
  }
  }
  :hover {
    ::after {
      transform: none;
    }
  }
`;

const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
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
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  ${props => stylesUnderline(props.theme)};
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
  <StyledLink
    as={props.as || 'a'}
    href={props.href}
    onClick={props.onClick}
    size={props.size}
    type={props.type}>
    {props.children}
  </StyledLink>
);
