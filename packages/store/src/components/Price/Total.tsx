/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { Heading, HeadlineSize, Theme } from '@wdlk/components';
import { useMedia } from '@wdlk/hooks';

export const Total: React.FC = props => {
  const { theme } = useThemeUI();
  const { breakpoints } = (theme as unknown) as Theme;
  const size = useMedia<HeadlineSize>(
    [
      `(min-width: ${breakpoints[3]})`,
      `(min-width: ${breakpoints[2]})`,
      `(min-width: ${breakpoints[1]})`,
      `(min-width: ${breakpoints[0]})`,
    ],
    ['m', 'm', 's', 's'],
    's',
  );
  return (
    <Heading as="h2" size={size}>
      {props.children}
    </Heading>
  );
};

Total.displayName = 'Price.Total';
