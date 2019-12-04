/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { HeaderProps } from './types';
import { qt } from '../query';

const styledHeader: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: '1fr 5fr 1fr',
  gridColumnGap: `${qt('spaces')(3)}px`,
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: `${qt('spaces')(2)}px ${qt('spaces')(4)}px`,
  borderBottom: `solid 1px ${qt('grays')(0)}`,
  backgroundColor: `${qt('whites')(0)}`,
  zIndex: 1,
};

const styledHeaderItem: SxStyleProp = {
  ':last-child': {
    justifySelf: 'end'
  }
};

export const Header: React.FunctionComponent<HeaderProps> = (
  props
): JSX.Element => {
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
