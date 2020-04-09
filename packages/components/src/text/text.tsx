/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Text as ThemeText } from '@theme-ui/components';

import { qt } from '../theme/query';

export interface TextProps {
  size: TextSize;
  tag: TextType;
  inverted?: boolean;
}
export type TextType = 'p' | 'div';
export type TextSize = 's' | 'm' | 'l' | 'xl';

const stylesText: SxStyleProp = {
  fontFamily: qt('body'),
};

const handleTextSizes = (size: TextSize): string => {
  switch (size) {
    case 's':
      return qt('fontSizes')(1);
    case 'm':
      return qt('fontSizes')(2);
    case 'l':
      return qt('fontSizes')(3);
    case 'xl':
      return qt('fontSizes')(4);
  }
};

const createDynamicStyles = (size: TextSize, inverted = false): SxStyleProp => ({
  fontSize: `${handleTextSizes(size)}px`,
  color: inverted ? qt('whites')(4) : qt('grays')(5),
  textShadow: inverted ? `0 0 2px ${qt('grays')(3)}` : 'unset',
});

const createStylesHeading = (size: TextSize, inverted: boolean): SxStyleProp => ({
  ...stylesText,
  ...createDynamicStyles(size, inverted),
});

export const Text: React.FC<TextProps> = (props): JSX.Element => (
  <ThemeText sx={createStylesHeading(props.size, Boolean(props.inverted))} as={props.tag}>
    {props.children}
  </ThemeText>
);

Text.displayName = 'Text';
