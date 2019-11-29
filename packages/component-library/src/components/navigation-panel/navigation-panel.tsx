/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { NavPanelProps } from '.';
import { qt } from '../query';

const panelHeight = '220px';

const styledPanelBase: SxStyleProp = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: panelHeight,
  pointerEvents: 'none',
  opacity: 0,
  backgroundColor: qt('whites')(0),
  zIndex: 2,
};

const createExpandedStyles = (expanded: boolean): SxStyleProp => (
  expanded
  ? {
      opacity: 1,
      pointerEvents: 'auto'
    }
  : {}
)

const createStyledNavPanel = (expanded: boolean): SxStyleProp => {
 return {
   ...styledPanelBase,
   ...createExpandedStyles(expanded)
 }
}

const styledPanelList: SxStyleProp = {
  paddingLeft: 0
}

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
