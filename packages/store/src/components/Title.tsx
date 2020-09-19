import React from 'react';
import { useTheme } from 'emotion-theming';
import { Heading, HeadlineSize } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';

export const Title: React.FC = props => {
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
    <Heading as="h1" size={size} type="primary">
      {props.children}
    </Heading>
  );
};
