/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { NavPanelProps } from '.';
import { calcYPosition } from './utils';
import { qt } from '../../query';

const headerScales = qt('header')('all') as unknown as string[];
const fontSizeS = qt('fontSizes')(2) as unknown as number;
const fontSizeM = qt('fontSizes')(3) as unknown as number;

const panelDimensions = {
  y: calcYPosition(headerScales, fontSizeS, fontSizeM),
  minWidth: '440px'
};

const styledPanelBase: SxStyleProp = {
  position: 'absolute',
  top: panelDimensions.y,
  left: `-${qt('spaces')(5)}px`,
  width: '100%',
  minWidth: panelDimensions.minWidth,
  padding: `${qt('spaces')(3)}px`,
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

export const Panel: React.FunctionComponent<NavPanelProps> = props => (
  <div
    sx={createStyledNavPanel(props.isExpanded)}
    role="list"
    aria-hidden={!props.isExpanded  ? 'true' : 'false'}
    aria-expanded={props.isExpanded ? 'true' : 'false'}
    data-testid="navigation-panel-test-id">
    <ul sx={styledPanelList}>{props.children}</ul>
  </div>
);

Panel.displayName = 'NavPanel';