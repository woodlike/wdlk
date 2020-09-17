/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box, Theme } from '@wdlk/components';

export interface FooterFrameProps {
  readonly small: JSX.Element;
}

const stylesCopyRight: SxStyleProp = {
  textAlign: 'center',
};

const stylesFrame: SxStyleProp = {
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
export const Frame: React.FC<FooterFrameProps> = props => (
  <Box sx={stylesFrame} as="footer" padding={[9, 8, 7]}>
    {props.children}
    <div sx={stylesCopyRight}>{props.small}</div>
  </Box>
);

Frame.displayName = 'FooterFrame';
