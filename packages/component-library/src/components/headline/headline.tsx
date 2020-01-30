/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Heading } from '@theme-ui/components';

import { HeadlineProps } from '.';
import { qt } from '../..';
import { HeadlineSize } from './types';

const stylesHeadline: SxStyleProp = {
  marginBottom: `${qt('spaces')(5)}px`,
  color: qt('grays')(5),
  fontFamily: qt('display'),
  fontWeight: 'normal',
  letterSpacing: `${qt('spaces')(1)}px`,
  lineHeight: '1.5',
};

const handleHeadlineSizes = (size: HeadlineSize): string => {
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
  fontSize: `${handleHeadlineSizes(size)}px`,
});

const createStylesHeadline = (size: HeadlineSize): SxStyleProp => ({
  ...stylesHeadline,
  ...createStylesSize(size),
});

export const Headline: React.FC<HeadlineProps> = (props): JSX.Element => (
  <Heading
    sx={createStylesHeadline(props.size)}
    as={props.tag}
    size={props.size}>
    {props.children}
  </Heading>
);

Headline.displayName = 'Headline';
