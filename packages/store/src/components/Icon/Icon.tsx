import React from 'react';
import { Facebook, Instagram, OnePercent } from '.';
import styled from '../styled';

export interface IconProps {
  readonly color: IconColor;
  readonly form: 'square' | 'rect';
  readonly height: string;
  readonly name: IconName;
  readonly size: IconSize;
  readonly width: string;
}

export interface StyledSVGIconProps {
  readonly color: IconColor;
  readonly form: 'square' | 'rect';
  readonly size: IconSize;
}

export enum IconSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type IconName = 'facebook' | 'instagram' | 'onepercent';

export type IconColor = 'primary' | 'secondary';

export const getRectIconSize = (size: IconSize): number => {
  switch (size) {
    case IconSize.s:
      return 70;
    case IconSize.m:
      return 90;
    case IconSize.l:
      return 120;
  }
};

export const getSquaredIconSize = (size: IconSize): number => {
  switch (size) {
    case IconSize.s:
      return 20;
    case IconSize.m:
      return 35;
    case IconSize.l:
      return 50;
  }
};

export const StyledSVGIcon = styled.svg<StyledSVGIconProps>`
  ${props =>
    props.form === 'square'
      ? `
      width: ${getSquaredIconSize(props.size)}px;
      height: ${getSquaredIconSize(props.size)}px;
    `
      : `
      width: ${getRectIconSize(props.size)}px;
      height: ${getRectIconSize(props.size) / 2}px;
    `};
  fill: ${props => props.theme.colors[props.color]};
  transition: fill 500ms ease;
  :hover {
    fill: ${props => props.theme.colors.secondary};
  }
`;

StyledSVGIcon.displayName = 'StyledSVGIcon';

export const Icon: React.FC<IconProps> = props => {
  switch (props.name) {
    case 'facebook':
      return <Facebook size={props.size} color={props.color} />;
    case 'instagram':
      return <Instagram size={props.size} color={props.color} />;
    case 'onepercent':
      return <OnePercent size={props.size} color={props.color} />;
  }
};
