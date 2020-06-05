/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Box, Small, Theme } from '@wdlk/components';

export interface FooterLayoutProps {
  iconBar: JSX.Element;
}

const stylesLayout: SxStyleProp = {
  maxWidth: (theme: Theme): string => theme.breakpoints[2],
  margin: 'auto',
};
export const Layout: React.FC<FooterLayoutProps> = props => {
  return (
    <Box sx={stylesLayout} as="footer" padding={[9, 8, 7]}>
      {props.iconBar}
      <Small scaleIdx={1}>© Woodlike 2020</Small>
    </Box>
  );
};

Layout.displayName = 'FooterLayout';
