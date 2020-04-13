/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

const stylesMain: SxStyleProp = {
  boxSizing: 'border-box',
  paddingLeft: '300px',
  margin: 0,
  backgroundColor: 'background',
};

export const Main: React.FC = props => <main sx={stylesMain}>{props.children}</main>;

Main.displayName = 'Layout.Main';
