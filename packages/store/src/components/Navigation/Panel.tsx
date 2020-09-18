/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface NavPanelProps {
  readonly isExpanded: boolean;
}

const stylesPanelBase: SxStyleProp = {
  position: 'absolute',
  top: ({ header }: Theme) => `${header.height}px`,
  width: '100%',
  minWidth: '440px',
  padding: 3,
  zIndex: 2,
  pointerEvents: 'none',
  transform: 'translate(-20px, 0)',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'background',
    border: ({ colors }: Theme) => `solid 1px ${colors.border}`,
    transform: 'scale3d(1, 0, 1)',
    transformOrigin: 'top left',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    opacity: 0,
    borderTop: ({ colors }: Theme) => `solid 1px ${colors.border}`,
    borderLeft: ({ colors }: Theme) => `solid 1px ${colors.border}`,
    backgroundColor: 'background',
    transform: 'translate(250%,-50%) rotate(45deg)',
  },
};

const stylesPanelList = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: 5,
  gridRowGap: 5,
  padding: (theme: Theme) => `${theme.space[4]}px ${theme.space[3]}px`,
  opacity: 0,
};

const createStylesPanel = (expanded: boolean): SxStyleProp => ({
  ...stylesPanelBase,
  ...(expanded && {
    zIndex: 2,
    opacity: 1,
    pointerEvents: 'auto',
    ':before': {
      transform: 'scale3d(1, 1, 1)',
      transition: ({ transition }: Theme) =>
        `transform ${transition.duration[0]}s ${transition.timing[0]}`,
    },
    ':after': {
      opacity: 1,
    },
  }),
});

const createStylesPanelList = (expanded: boolean): SxStyleProp => ({
  ...stylesPanelList,
  ...(expanded && {
    opacity: 1,
    transition: ({ transition }: Theme) =>
      `opacity ${transition.duration[0] / 2}s ${
        transition.duration[0]
      }s ease-in-out`,
  }),
});

export const Panel: React.FC<NavPanelProps> = props => {
  const { children, isExpanded } = props;
  return (
    <div
      sx={createStylesPanel(isExpanded)}
      role="list"
      aria-hidden={!isExpanded}
      aria-expanded={isExpanded}>
      <ul sx={createStylesPanelList(isExpanded)}>{children}</ul>
    </div>
  );
};

Panel.displayName = 'NavigationPanel';
