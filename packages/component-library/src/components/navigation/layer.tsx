/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { NavLayerProps } from '.';
import { qt } from '../../query';

const stylesLayer: SxStyleProp = {
  position: 'absolute',
  padding: `${qt('spaces')(5)}px ${qt('spaces')(4)}px`,
  backgroundColor: qt('corals')(0),
}

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
