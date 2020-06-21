/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt, Theme } from '@wdlk/components';
import { calcYPosition } from './utils';

export interface NavPanelProps {
  readonly isExpanded: boolean;
}

const styledPanelBase: SxStyleProp = {
  position: 'absolute',
  top: calcYPosition((qt('header')('all') as unknown) as string[]),
  left: 5,
  width: '100%',
  minWidth: '440px',
  padding: 3,
  zIndex: 2,
  transitionProperty: 'opacity',
  transitionDuration: ({ transition }: Theme) => transition.duration[0],
  transitionTimingFunction: 'ease-in-out',
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderColor: 'border',
    borderStyle: 'solid',
    borderWidth: '0 1px 1px',
    backgroundColor: 'background',
    opacity: 0.95,
    zIndex: -1,
  },
};

const stylesPanelList = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: 5,
  gridRowGap: 5,
  padding: (theme: Theme) => `${theme.space[4]}px ${theme.space[3]}px`,
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

export const Panel: React.FC<NavPanelProps> = props => {
  return (
    <div
      sx={createStylesNavPanel(props.isExpanded)}
      role="list"
      aria-hidden={!props.isExpanded}
      aria-expanded={props.isExpanded}>
      <ul sx={stylesPanelList}>{props.children}</ul>
    </div>
  );
};

Panel.displayName = 'NavigationPanel';
