/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { MenuRow } from './MenuRow';
import { useFooterLinks } from '../../hooks';

const stylesMenu: SxStyleProp = {
  display: ['block', 'block', 'block', 'grid'],
  gridTemplateColumns: ['none', 'none', 'none', '1fr 1fr 1fr'],
  columnGap: ['normal', 'normal', 'normal', 3, 4],
  textAlign: ['center', 'center', 'center', 'left'],
};

export const Menu: React.FC = () => {
  const { nodes } = useFooterLinks();
  return (
    <div sx={stylesMenu}>
      {nodes.map(node => (
        <MenuRow key={node.id} node={node} />
      ))}
    </div>
  );
};

Menu.displayName = 'FooterMenu';
