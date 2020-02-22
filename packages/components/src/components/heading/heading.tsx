/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Heading as ThemeHeading } from '@theme-ui/components';

import { qt } from '../../query';

export interface HeadingProps {
  tag: HeadingLevel;
  size: HeadlineSize;
  family?: HeadingFamily;
  inverted?: boolean;
}

export type HeadingFamily = 'display' | 'secondary' | 'campaign';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadlineSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

const stylesHeading: SxStyleProp = {
  margin: 0,
  color: qt('grays')(5),
  fontWeight: 500,
  letterSpacing: `${qt('spaces')(1)}px`,
};

const handleHeadingSizes = (size: HeadlineSize): string => {
  switch (size) {
    case 's':
      return qt('spaces')(4);
    case 'm':
      return qt('spaces')(5);
    case 'l':
      return qt('spaces')(7);
    case 'xl':
      return qt('spaces')(8);
    case 'xxl':
      return qt('spaces')(9);
  }
};

const createStylesSize = (size: HeadlineSize): SxStyleProp => ({
  fontSize: `${handleHeadingSizes(size)}px`,
});

const createStylesColor = (inverted: boolean): SxStyleProp => ({
  color: inverted ? qt('whites')(4) : qt('grays')(5),
  textShadow: inverted ? `0 0 2px ${qt('grays')(3)}` : 'unset',
});

const createStylesFamily = (family: HeadingFamily = 'display'): SxStyleProp => ({
  fontFamily: qt(`heading.${family}`),
  lineHeight: family === 'campaign' ? 2.5 : 1.4,
});

const createStylesHeading = (size: HeadlineSize, inverted: boolean, family?: HeadingFamily): SxStyleProp => ({
  ...stylesHeading,
  ...createStylesFamily(family),
  ...createStylesSize(size),
  ...createStylesColor(inverted),
});

export const Heading: React.FC<HeadingProps> = (props): JSX.Element => (
  <ThemeHeading
    sx={createStylesHeading(props.size, Boolean(props.inverted), props.family)}
    as={props.tag}
    size={props.size}>
    {props.children}
  </ThemeHeading>
);

Heading.displayName = 'Heading';
