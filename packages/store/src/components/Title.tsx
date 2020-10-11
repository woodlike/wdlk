import React from 'react';
import { useTheme } from 'emotion-theming';
import { Heading, HeadlineSize, HeadingLevel } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';

export interface TitleProps {
  readonly as?: HeadingLevel;
}

export const Title: React.FC<TitleProps> = props => {
  const { breakpoints } = useTheme();
  const size = useMedia<HeadlineSize>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
      `(min-width: ${breakpoints[0]})`,
    ],
    ['l', 'l', 'm', 'm'],
    'm',
  );

  return (
    <Heading as={props.as || 'h1'} size={size} type="primary">
      {props.children}
    </Heading>
  );
};
