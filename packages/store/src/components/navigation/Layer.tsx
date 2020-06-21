/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt, Theme } from '@wdlk/components';

export interface NavLayerProps {
  readonly isExpanded: boolean;
}

const stylesLayer: SxStyleProp = {
  position: 'fixed',
  top: (qt('header')('all') as unknown) as string[],
  left: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  boxSizing: 'border-box',
  width: '100vw',
  height: `calc(100vh - ${qt('header')(0)})`,
  padding: ({ space }: Theme) => `${space[9]}px ${space[4]}px ${space[5]}px`,
  backgroundColor: 'primary',
};

const stylesLayerList: SxStyleProp = {
  padding: 0,
  margin: ({ space }: Theme) => `0 0 ${space[5]}px 0`,
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
