/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box, Theme } from '@wdlk/components';

const stylesLayout: SxStyleProp = {
  position: 'relative',
  maxWidth: (theme: Theme): string => theme.breakpoints[2],
  margin: 'auto',
  backgroundColor: 'inherit',
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '50%',
    zIndex: -1,
    width: '100vw',
    height: '100%',
    borderTop: (theme: Theme): string => `1px solid ${theme.colors.border}`,
    transform: 'translateX(-50%)',
  },
};
export const Layout: React.FC = props => (
  <Box sx={stylesLayout} as="footer" padding={[9, 8, 7]}>
    {props.children}
  </Box>
);

Layout.displayName = 'FooterLayout';
