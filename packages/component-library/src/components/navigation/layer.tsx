/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { NavLayerProps } from '.';
import { headerYPosition } from './utils';
import { qt } from '../../query';

const stylesLayer: SxStyleProp = {
  position: 'fixed',
  top: headerYPosition,
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  boxSizing: 'border-box',
  width: '100vw',
  height: `calc(100vh - ${headerYPosition[0]})`,
  padding: `${qt('spaces')(9)}px ${qt('spaces')(4)}px ${qt('spaces')(5)}px`,
  backgroundColor: qt('corals')(1),
};

const stylesLayerList: SxStyleProp = {
  padding: 0,
  margin: `0 0 ${qt('spaces')(5)}px 0`,
};

const stylesLayerFooter: SxStyleProp = {
  color: qt('whites')(0),
  fontSize: `${qt('fontSizes')(0)}px`,
}

export const LayerList: React.FC = (props): JSX.Element => (
  <ul sx={stylesLayerList}>{props.children}</ul>
);

export const LayerFooter: React.FC = (props): JSX.Element => (
  <small sx={stylesLayerFooter}>{props.children}</small>
);

export const Layer: React.FC<NavLayerProps> = (props): JSX.Element => (
  <div
    sx={stylesLayer}
    role="list"
    aria-hidden={!props.isExpanded ? 'true' : 'false'}
    aria-expanded={props.isExpanded ? 'true' : 'false'}
    data-testid="navigation-layer-test-id">
    {props.children}
  </div>
);

Layer.displayName = 'NavLayer';
