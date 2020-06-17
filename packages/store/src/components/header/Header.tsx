import * as React from 'react';
import { useThemeUI } from 'theme-ui';
import { useMedia } from '@wdlk/hooks';

import { HeaderItemsCompact, HeaderItems } from '.';

export const Header: React.FC = () => {
  const { theme } = useThemeUI();
  const isCompactScreen = useMedia<boolean>(
    [
      `(min-width: ${(theme.breakpoints as string[])[2]})`,
      `(min-width: ${(theme.breakpoints as string[])[0]})`,
    ],
    [false, true],
    false,
  );
  return isCompactScreen ? <HeaderItemsCompact /> : <HeaderItems />;
};
