/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesSidebar: SxStyleProp = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '300px',
  padding: 4,
  boxSizing: 'border-box',
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: '0 1px 0 0',
  overflowY: 'auto',
  backgroundColor: (theme: Theme) => theme.colors.whites[1],
};

export const SideBar: React.FC = props => {
  return <aside sx={stylesSidebar}>{props.children}</aside>;
};

SideBar.displayName = 'Sidebar';
