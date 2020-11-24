import React from 'react';
import styled from '@emotion/styled';
import { PrismStyleProp } from '.';

export interface CSSConverterProps {
  readonly cssObject: PrismStyleProp | undefined;
  readonly as?: string;
}

function toCSSString(cssObject: PrismStyleProp | undefined): string {
  return !!cssObject
    ? Object.entries(cssObject)
        .reduce(
          (acc: string[], [key, val]) => [
            ...acc,
            `${key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}: ${val};`,
          ],
          [],
        )
        .join('')
    : '';
}

const StyledCSSContainer = styled.span<CSSConverterProps>`
  ${props => toCSSString(props.cssObject)};
`;

StyledCSSContainer.displayName = 'StyledCSSContainer';

export const CSSConverter: React.FC<CSSConverterProps> = props => (
  <StyledCSSContainer as={props.as || 'span'} cssObject={props.cssObject}>
    {props.children}
  </StyledCSSContainer>
);
