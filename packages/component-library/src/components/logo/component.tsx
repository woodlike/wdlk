import * as React from 'react';
import styled from '@emotion/styled';

import { LogoPath, BrandPath } from './svg-paths';
import { recipe, toRGBString } from '../../tokens';

export interface LogoProps {
  readonly inverted: boolean;
  readonly title: string;
  readonly desc: string;
}

interface StyledSvgProps {
  readonly color: string;
  readonly hover: string;
}

const logoSize = {
  width: 122,
  height: 46,
};

const StyledSvg = styled.svg<StyledSvgProps>`
  width: ${logoSize.width}px;
  height: ${logoSize.height}px;
  fill: currentColor;
  color: ${props => `rgb(${props.color})`};
  transition: fill .35s ease;
  :hover {
    color: ${props => `rgb(${props.hover})`};
  }
`;

export const Logo: React.FunctionComponent<LogoProps> = (
  props
): JSX.Element => {
  const color = props.inverted ? recipe.logo.inverted : recipe.logo.default;
  const hover = props.inverted ? recipe.logo.hoverInverted : recipe.logo.hover;
  return (
    <StyledSvg viewBox="0 0 135 46" color={toRGBString(color)} hover={toRGBString(hover)} aria-labelledby="logo-title-aria-id">
      <title id="logo-title-aria-id">{props.title}</title>
      <desc>{props.desc}</desc>
      <LogoPath />
      <BrandPath />
    </StyledSvg>
  );
};

Logo.displayName = 'Logo';
export default Logo;
