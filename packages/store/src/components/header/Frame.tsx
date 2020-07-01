/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

const stylesHeaderLayout: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: '1fr 5fr 1fr',
  gridColumnGap: (theme: Theme) => theme.space[3] as never,
  alignItems: 'center',
  alignContent: 'center',
  boxSizing: 'border-box',
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  height: ({ header }: Theme) => header,
  padding: (theme: Theme) => theme.space[4],
  zIndex: 1,
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
    borderBottom: ({ colors }: Theme) => `solid 1px ${colors.border}`,
    backgroundColor: ({ colors }: Theme) => colors.background,
    opacity: 0.94,
    zIndex: -1,
  },
};

export const Frame: React.FC = props => (
  <header sx={stylesHeaderLayout}>{props.children}</header>
);

Frame.displayName = 'HeaderFrame';
