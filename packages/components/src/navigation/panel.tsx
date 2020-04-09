/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { headerYPosition } from '../utils/utils';
import { qt } from '../theme/query';

export interface NavPanelProps {
  isExpanded: boolean;
}

const panelDimensions = {
  y: headerYPosition,
  minWidth: '440px',
};

const styledPanelBase: SxStyleProp = {
  position: 'absolute',
  top: panelDimensions.y,
  left: `-${qt('spaces')(5)}px`,
  width: '100%',
  minWidth: panelDimensions.minWidth,
  padding: `${qt('spaces')(3)}px`,
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
    borderColor: qt('grays')(0),
    borderStyle: 'solid',
    borderWidth: '0 1px 1px',
    backgroundColor: `${qt('whites')(0)}`,
    opacity: 0.95,
    zIndex: -1,
  },
};

const createStylesExpanded = (expanded: boolean): SxStyleProp => ({
  ...(expanded
    ? {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
      }
    : {
        zIndex: -1,
        opacity: 0,
        pointerEvents: 'none',
      }),
});

const createStylesNavPanel = (expanded: boolean): SxStyleProp => ({
  ...styledPanelBase,
  ...createStylesExpanded(expanded),
});

const styledPanelList = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: `${qt('spaces')(5)}px`,
  gridRowGap: `${qt('spaces')(5)}px`,
  padding: `${qt('spaces')(4)}px ${qt('spaces')(3)}px`,
} as SxStyleProp;

export const Panel: React.FunctionComponent<NavPanelProps> = props => (
  <div
    sx={createStylesNavPanel(props.isExpanded)}
    role="list"
    aria-hidden={!props.isExpanded ? 'true' : 'false'}
    aria-expanded={props.isExpanded ? 'true' : 'false'}
    data-testid="navigation-panel-test-id">
    <ul sx={styledPanelList}>{props.children}</ul>
  </div>
);

Panel.displayName = 'NavPanel';
