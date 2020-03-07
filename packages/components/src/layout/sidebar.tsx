/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { layoutConfig } from '.';
import { qt } from '../query';

export interface SideBarProps {
  readonly tag: HTMLSectionType;
  readonly position: SideBarPosition;
  readonly bg?: string;
  readonly width?: number;
}

export type HTMLSectionType = 'aside' | 'section' | 'article' | 'nav' | 'div';
export type SideBarPosition = 'left' | 'right';

const stylesSidebar: SxStyleProp = {
  position: 'fixed',
  top: 0,
  height: '100vh',
  padding: qt('spaces')(3),
  boxSizing: 'border-box',
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: '0px',
};

const createStylesPosition = (position: SideBarPosition): SxStyleProp => ({
  ...(position === 'left' ? { left: 0, borderRightWidth: '1px' } : { right: 0, borderLeftWidth: '1px' }),
});

const createStyles = (position: SideBarPosition, width = layoutConfig.width, bg = layoutConfig.bg): SxStyleProp => ({
  ...stylesSidebar,
  ...createStylesPosition(position),
  width: `${width}px`,
  backgroundColor: bg,
});

export const SideBar: React.FC<SideBarProps> = (props): JSX.Element => {
  return <props.tag sx={createStyles(props.position, props.width)}>{props.children}</props.tag>;
};

SideBar.displayName = 'Layout.Sidebar';
