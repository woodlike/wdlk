import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import { Theme } from '.';
import styled from './styled';

export interface LinkProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: 'a' | 'span' | 'button';
  readonly color?: 'primary' | 'secondary';
  readonly href?: string;
  readonly isActive?: boolean;
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
  readonly type?: 'inline' | 'block';
}

interface StyledLinkProps {
  readonly size: 's' | 'm' | 'l';
  readonly as?: 'a' | 'span' | 'button';
  readonly isActive?: boolean;
  readonly color?: 'primary' | 'secondary';
  readonly onClick?: React.MouseEventHandler<HTMLElement>;
  readonly type?: 'inline' | 'block';
}

const stylesUnderline = (
  props: {
    readonly theme: Theme;
  } & StyledLinkProps,
): SerializedStyles => css`
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 100%;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: ${props.type === 'inline' || props.isActive
      ? 'translate3d(100%, 0, 0)'
      : 'none'};
    transition: transform ${props.theme.transition.duration[0]}s
      ${props.theme.transition.timing[0]};
  }
  ${!props.isActive &&
    `:hover {
    ::after {
      transform: ${
        props.type === 'inline' ? 'none' : 'translate3d(100%, 0, 0)'
      };
    }
  }`}
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
    const { color, theme } = props;
    return !!color
      ? theme.link.color[color].default
      : theme.link.color.primary.default;
  }};
  font-kerning: normal;
  text-decoration: none;
  line-height: ${props => props.theme.lineHeights[1]};
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  ${props => stylesUnderline(props)};

  :hover {
    color: ${props => {
      const { color, theme } = props;
      return !!color
        ? theme.link.color[color].hover
        : theme.link.color.primary.hover;
    }};
  }
`;
StyledLink.displayName = 'StyledLink';

export const Link: React.FC<LinkProps> = props => (
  <StyledLink
    as={props.as || 'a'}
    color={props.color || 'primary'}
    href={props.href}
    isActive={props.isActive}
    onClick={props.onClick}
    size={props.size}
    type={props.type || 'inline'}>
    {props.children}
  </StyledLink>
);
