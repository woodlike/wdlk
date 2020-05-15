/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Fragment } from 'react';

export interface LayoutSlot {
  document: JSX.Element;
  sidebar: JSX.Element;
}

const SIDEBAR_WIDTH = '300px';

const stylesDocSlot: SxStyleProp = {
  paddingLeft: SIDEBAR_WIDTH,
};

const stylesSidebarSlot: SxStyleProp = {
  width: SIDEBAR_WIDTH,
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
};

export const LayoutSlot: React.FC<LayoutSlot> = props => (
  <Fragment>
    <main sx={stylesDocSlot}>{props.document}</main>
    <aside sx={stylesSidebarSlot}>{props.sidebar}</aside>
  </Fragment>
);

LayoutSlot.displayName = 'LayoutSlot';
