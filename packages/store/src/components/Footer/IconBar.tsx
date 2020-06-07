/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box, Rows } from '@wdlk/components';

import { Icon, IconSize } from '..';

const stylesIconBar: SxStyleProp = {
  paddingBottom: 7,
};

const stylesIcon: SxStyleProp = {
  alignSelf: 'center',
};

export const IconBar: React.FC = () => (
  <Rows sx={stylesIconBar} justifyContent="center">
    <Box sx={stylesIcon} padding={[0, 5]}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://directories.onepercentfortheplanet.org/business-members/woodlike">
        <Icon.OnePercent size={IconSize.s} color="primary" />
      </a>
    </Box>
    <Box sx={stylesIcon} padding={[0, 5]}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/wdlk/">
        <Icon.Instagram size={IconSize.s} color="primary" />
      </a>
    </Box>
    <Box sx={stylesIcon} padding={[0, 5]}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/woodlike">
        <Icon.Facebook size={IconSize.s} color="primary" />
      </a>
    </Box>
  </Rows>
);

IconBar.displayName = 'IconBar';
