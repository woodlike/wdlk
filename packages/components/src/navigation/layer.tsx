/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../theme/query';

export interface NavLayerProps {
  isExpanded: boolean;
}

const headerScales = (qt('header')('all') as unknown) as string[];

const stylesLayer: SxStyleProp = {
  position: 'fixed',
  top: headerScales,
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  boxSizing: 'border-box',
  width: '100vw',
  height: `calc(100vh - ${headerScales[0]})`,
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
};

const createStylesExpanded = (isExpanded: boolean): SxStyleProp => ({
  ...(isExpanded
    ? {
        transform: 'none',
        transition: `transform ${qt('timing')(3)} ${qt('duration')(1)}s`,
      }
    : {
        transform: 'translate3d(-100%, 0, 0)',
        transition: `transform ${qt('timing')(4)} ${qt('duration')(1)}s`,
      }),
});

const createStylesLayer = (isExpanded: boolean): SxStyleProp => ({
  ...stylesLayer,
  ...createStylesExpanded(isExpanded),
});

export const LayerList: React.FC = (props): JSX.Element => <ul sx={stylesLayerList}>{props.children}</ul>;

export const LayerFooter: React.FC = (props): JSX.Element => <small sx={stylesLayerFooter}>{props.children}</small>;

export const Layer: React.FC<NavLayerProps> = (props): JSX.Element => (
  <div
    sx={createStylesLayer(props.isExpanded)}
    role="list"
    aria-hidden={!props.isExpanded ? 'true' : 'false'}
    aria-expanded={props.isExpanded ? 'true' : 'false'}
    data-testid="navigation-layer-test-id">
    {props.children}
  </div>
);

Layer.displayName = 'NavLayer';
