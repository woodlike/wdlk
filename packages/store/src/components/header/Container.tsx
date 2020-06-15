/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface HeaderProps {
  areas: [JSX.Element, JSX.Element, JSX.Element];
}

const stylesHeader: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: '1fr 5fr 1fr',
  gridColumnGap: (theme: Theme) => theme.space[3] as never,
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: (theme: Theme) => theme.header,
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

const stylesItemSlot: SxStyleProp = {
  ':nth-of-type(2)': {
    justifySelf: 'center',
  },
  ':nth-of-type(3)': {
    justifySelf: 'end',
  },
};

export const HeaderContainer: React.FC<HeaderProps> = props => (
  <header sx={stylesHeader}>
    {props.areas.map((Component, i) => (
      <div sx={stylesItemSlot} key={`header-item-slot-${i}`}>
        {Component}
      </div>
    ))}
  </header>
);

HeaderContainer.displayName = 'HeaderContainer';
