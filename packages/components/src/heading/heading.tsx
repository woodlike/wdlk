/** @jsx jsx */
import { ThemeQuery } from 'theme-query';
import { jsx, SxStyleProp } from 'theme-ui';

import { useThemeQuery } from '../theme/query';

export interface HeadingProps {
  as: HeadingLevel;
  size: HeadlineSize;
  family?: HeadingFamily;
  inverted?: boolean;
}

export type HeadingFamily = 'display' | 'secondary' | 'campaign';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong';
export type HeadlineSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const stylesHeading: SxStyleProp = {
  display: 'block',
  margin: 0,
  color: 'headline',
  fontWeight: 500,
};

const handleHeadingSizes = (size: HeadlineSize, qt: ThemeQuery): string => {
  switch (size) {
    case 'xs':
      return qt('fontSizes')(3);
    case 's':
      return qt('fontSizes')(4);
    case 'm':
      return qt('fontSizes')(5);
    case 'l':
      return qt('fontSizes')(6);
    case 'xl':
      return qt('fontSizes')(7);
    case 'xxl':
      return qt('fontSizes')(8);
  }
};

const createStylesColor = (inverted: boolean, qt: ThemeQuery): SxStyleProp => ({
  color: inverted ? qt('whites')(4) : qt('grays')(5),
  textShadow: inverted ? `0 0 2px ${qt('grays')(3)}` : 'unset',
});

const createStylesFamily = (qt: ThemeQuery, family: HeadingFamily = 'display'): SxStyleProp => ({
  fontFamily: qt(`heading.${family}`),
  lineHeight: family === 'campaign' ? 2.5 : 1.4,
});

const createStylesHeading = (
  size: HeadlineSize,
  inverted: boolean,
  qt: ThemeQuery,
  family?: HeadingFamily,
): SxStyleProp => ({
  ...stylesHeading,
  ...createStylesFamily(qt, family),
  ...createStylesColor(inverted, qt),
  fontSize: `${handleHeadingSizes(size, qt)}px`,
});

export const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
  const { qt } = useThemeQuery();
  return (
    <props.as sx={createStylesHeading(props.size, Boolean(props.inverted), qt, props.family)}>
      {props.children}
    </props.as>
  );
};

Heading.displayName = 'Heading';
