/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { LinkHighlight } from '../Link';
import { useFooterLinks, LinkNode } from '../../hooks';

export interface FooterMenuRowProps {
  node: LinkNode;
}

const stylesMenu: SxStyleProp = {
  listStyle: 'none',
  paddingTop: 0,
  paddingBottom: 8,
  paddingLeft: 0,
  margin: 0,
};

const stylesListItem: SxStyleProp = {
  paddingBottom: 3,
};

export const MenuRow: React.FC<FooterMenuRowProps> = props => {
  const { url } = useFooterLinks();
  return (
    <ul sx={stylesMenu}>
      {props.node.menuItems.map(item => (
        <li sx={stylesListItem} key={item.id}>
          <LinkHighlight href={`${url}/${item.handle}`} size={2} color="muted">
            {item.title}
          </LinkHighlight>
        </li>
      ))}
    </ul>
  );
};

MenuRow.displayName = 'FooterMenuRow';
