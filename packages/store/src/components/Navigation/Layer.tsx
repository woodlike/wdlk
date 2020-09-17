/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface NavLayerProps {
  readonly isExpanded: boolean;
}

const stylesLayer: SxStyleProp = {
  position: 'fixed',
  top: '70px',
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  boxSizing: 'border-box',
  width: '100vw',
  height: `calc(100vh - 70px)`,
  padding: `72px 18px 24px`,
  backgroundColor: 'primary',
};

const stylesLayerList: SxStyleProp = {
  padding: 0,
  margin: `0 0 24px 0`,
};

const stylesLayerFooter: SxStyleProp = {
  color: 'link',
  fontSize: 0,
};

const createStylesExpanded = (isExpanded: boolean): SxStyleProp => ({
  ...(isExpanded
    ? {
        transform: 'none',
        transition: ({ transition }: Theme) =>
          `transform ${transition.timing[0]} ${transition.duration[1]}s`,
      }
    : {
        transform: 'translate3d(-100%, 0, 0)',
        transition: ({ transition }: Theme) =>
          `transform ${transition.timing[4]} ${transition.duration[1]}s`,
      }),
});

const createStylesLayer = (isExpanded: boolean): SxStyleProp => ({
  ...stylesLayer,
  ...createStylesExpanded(isExpanded),
});

export const LayerList: React.FC = props => (
  <ul sx={stylesLayerList}>{props.children}</ul>
);

LayerList.displayName = 'NavigationLayerList';

export const LayerFooter: React.FC = props => (
  <small sx={stylesLayerFooter}>{props.children}</small>
);

LayerFooter.displayName = 'NavigationLayerFooter';

export const Layer: React.FC<NavLayerProps> = props => (
  <div
    sx={createStylesLayer(props.isExpanded)}
    role="list"
    aria-hidden={!props.isExpanded}
    aria-expanded={props.isExpanded}>
    {props.children}
  </div>
);

Layer.displayName = 'NavigationLayer';
