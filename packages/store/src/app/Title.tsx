import React from 'react';
import { useThemeUI } from 'theme-ui';
import { Heading, Theme, HeadlineSize } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';

export const Title: React.FC = props => {
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;
  const size = useMedia<HeadlineSize>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
      `(min-width: ${breakpoints[0]})`,
    ],
    ['xl', 'l', 'm', 'm'],
    'm',
  );

  return (
    <Heading as="h1" size={size}>
      {props.children}
    </Heading>
  );
};
