/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesMain: SxStyleProp = {
  boxSizing: 'border-box',
  padding: (theme: Theme) => `${theme.space[4]}px ${theme.space[4]}px ${theme.space[4]}px ${theme.space[4] + 300}px`,
  margin: 0,
  backgroundColor: 'background',
};

export const Main: React.FC = props => <main sx={stylesMain}>{props.children}</main>;

Main.displayName = 'Layout.Main';
