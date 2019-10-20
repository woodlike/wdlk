import * as React from 'react';
import styled from '@emotion/styled';
import { LogoPath, BrandPath } from './svg-paths';

const StyledSvg = styled.svg`
  fill: currentColor;
`;

export const Logo: React.FunctionComponent = (): JSX.Element => (
  <StyledSvg viewBox='0 0 135 46'>
    <LogoPath />
    <BrandPath />
  </StyledSvg>
);

Logo.displayName = 'Logo';
export default Logo;
