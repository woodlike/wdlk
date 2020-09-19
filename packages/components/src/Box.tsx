import React from 'react';
import { Color, Scale, ScaleArea } from '.';
import styled from './styled';

export interface BoxProps {
  readonly padding: ScaleArea;
  readonly as?: BoxHTMLElement;
  readonly borderWidths?: ScaleArea;
  readonly borderStyles?: ScaleArea;
  readonly borderColors?: BorderColorProps;
  readonly backgroundColor?: string | BorderColorScale;
  readonly className?: string;
}

export interface BorderColorScale {
  readonly color: string;
  readonly idx: number;
}

export type BoxHTMLElement =
  | 'div'
  | 'span'
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
  | 'figure'
  | 'nav'
  | 'ul'
  | 'li'
  | 'aside';

export type BorderColorProps =
  | (string | BorderColorScale)
  | (string | BorderColorScale)[];

const StyledBox = styled.div<BoxProps>`
  padding: ${({ padding, theme }) =>
    Scale.toCSSPixel(Scale.create(padding, theme.space))};
  border-width: ${({ borderWidths, theme }) =>
    borderWidths &&
    Scale.toCSSPixel(
      Scale.create(borderWidths as ScaleArea, theme.borderWidths),
    )};
  border-style: ${({ borderStyles, theme }) =>
    borderStyles &&
    Scale.toCSSString(
      Scale.create(borderStyles as ScaleArea, theme.borderStyles),
    )};
  border-color: ${({ borderColors, theme }) => {
    if (Array.isArray(borderColors)) {
      const colors = borderColors.map(color => {
        return typeof color === 'object'
          ? Color.query(color.color, theme.colors, color.idx)
          : Color.query(color, theme.colors);
      }) as string[];

      return Scale.createBox(colors).join(' ');
    }

    return typeof borderColors === 'object'
      ? Color.query(borderColors.color, theme.colors, borderColors.idx)
      : Color.query(borderColors as string, theme.colors);
  }};
  background-color: ${({ backgroundColor, theme }) =>
    typeof backgroundColor === 'object'
      ? Color.query(backgroundColor.color, theme.colors, backgroundColor.idx)
      : Color.query(backgroundColor as string, theme.colors)};
  margin: 0;
  list-style: ${props => props.as === 'ul' && 'none'};
`;

StyledBox.displayName = 'StyledBox';

export const Box: React.FC<BoxProps> = props => (
  <StyledBox
    as={props.as || 'div'}
    backgroundColor={props.backgroundColor}
    borderColors={props.borderColors}
    borderStyles={props.borderStyles}
    borderWidths={props.borderWidths}
    padding={props.padding}>
    {props.children}
  </StyledBox>
);
