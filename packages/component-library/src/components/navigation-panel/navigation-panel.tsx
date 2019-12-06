/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { NavPanelProps } from '.';
import { qt } from '../query';


const panelDimensions = {
  navHeight: `60px`,
  minWidth: '440px'
};

const styledPanelBase: SxStyleProp = {
  position: 'absolute',
  top: panelDimensions.navHeight,
  left: `-${qt('spaces')(5)}px`,
  width: '100%',
  minWidth: panelDimensions.minWidth,
  padding: `${qt('spaces')(3)}px`,
  pointerEvents: 'none',
  opacity: 0,
  zIndex: 2,
  transitionProperty: 'opacity',
  transitionDuration: `${qt('duration')(1)}s`,
  transitionTimingFunction: 'ease-in-out',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `${qt('whites')(0)}`,
    opacity: .95,
    zIndex: -1
  }
};

const createExpandedStyles = (expanded: boolean): SxStyleProp => (
  expanded
  ? {
      opacity: 1,
      pointerEvents: 'auto'
    }
  : {}
);

const createStyledNavPanel = (expanded: boolean): SxStyleProp => {
 return {
   ...styledPanelBase,
   ...createExpandedStyles(expanded)
 }
};

const styledPanelList: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: `${qt('spaces')(5)}px`,
  gridRowGap: `${qt('spaces')(5)}px`,
  padding: `${qt('spaces')(4)}px ${qt('spaces')(3)}px`,
};

export const NavPanel: React.FunctionComponent<NavPanelProps> = props => (
  <div
    sx={createStyledNavPanel(props.isExpanded)}
    role="list"
    aria-hidden={!props.isExpanded  ? 'true' : 'false'}
    aria-expanded={props.isExpanded ? 'true' : 'false'}
    data-testid="navigation-panel-test-id">
    <ul sx={styledPanelList}>{props.children}</ul>
  </div>
);
