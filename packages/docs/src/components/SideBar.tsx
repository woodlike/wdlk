/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesSidebar: SxStyleProp = {
  height: '100%',
  padding: 4,
  boxSizing: 'border-box',
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: '0 1px 0 0',
  overflowY: 'auto',
  backgroundColor: (theme: Theme) => theme.colors.whites[1],
};

export const SideBar: React.FC = props => {
  return <div sx={stylesSidebar}>{props.children}</div>;
};

SideBar.displayName = 'Sidebar';
