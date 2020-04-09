/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../theme/query';

export interface HeaderProps {
  areas: [JSX.Element, JSX.Element, JSX.Element];
}

const styledHeader = {
  display: 'grid',
  gridTemplateColumns: '1fr 5fr 1fr',
  gridColumnGap: `${qt('spaces')(3)}px`,
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: qt('header')('all'),
  padding: `0 ${qt('spaces')(4)}px`,
  zIndex: 1,
  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
    borderBottom: `solid 1px ${qt('grays')(0)}`,
    backgroundColor: `${qt('whites')(0)}`,
    opacity: 0.94,
    zIndex: -1,
  },
} as SxStyleProp;

const styledHeaderItem: SxStyleProp = {
  ':nth-of-type(2)': {
    justifySelf: 'center',
  },
  ':nth-of-type(3)': {
    justifySelf: 'end',
  },
};

export const Header: React.FunctionComponent<HeaderProps> = (props): JSX.Element => {
  return (
    <header sx={styledHeader}>
      {props.areas.map((Component, i) => (
        <div sx={styledHeaderItem} key={`header-item-${i}`}>
          {Component}
        </div>
      ))}
    </header>
  );
};
