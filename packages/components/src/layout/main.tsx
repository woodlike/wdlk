/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { layoutConfig, SideBarPosition } from '.';
import { qt } from '../query';

export interface LayoutMainProps {
  readonly position?: SideBarPosition;
  readonly margin?: number;
}

const stylesMain: SxStyleProp = {
  boxSizing: 'border-box',
  padding: qt('spaces')(3),
  backgroundColor: 'background',
};

const createStyles = (margin = layoutConfig.width, position?: SideBarPosition): SxStyleProp => ({
  ...stylesMain,
  ...(position ? (position === 'left' ? { marginLeft: `${margin}px` } : { marginRight: `${margin}px` }) : undefined),
});

export const Main: React.FC<LayoutMainProps> = (props): JSX.Element => (
  <main sx={createStyles(props.margin, props.position)}>{props.children}</main>
);

Main.displayName = 'Layout.Main';
