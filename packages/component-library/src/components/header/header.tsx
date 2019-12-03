/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { HeaderProps } from './types';
import { qt } from '../query';

const styledHeader: SxStyleProp = {
  display: 'grid',
  gridTemplateColumns: '1fr 6fr 1fr',
  gridColumnGap: `${qt('spaces')(3)}px`,
  alignItems: 'center',
  padding: `${qt('spaces')(2)}px ${qt('spaces')(4)}px`,
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
