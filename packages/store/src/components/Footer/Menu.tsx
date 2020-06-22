/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

const stylesMenu: SxStyleProp = {
  display: ['block', 'block', 'block', 'grid'],
  gridTemplateColumns: ['none', 'none', 'none', '1fr 1fr 1fr'],
  columnGap: ['normal', 'normal', 'normal', 3, 4],
  textAlign: ['center', 'center', 'center', 'left'],
};

export const Menu: React.FC = props => (
  <div sx={stylesMenu}>{props.children}</div>
);

Menu.displayName = 'FooterMenu';
