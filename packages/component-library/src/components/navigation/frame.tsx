/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { qt } from '../../query';

const stylesFrame: SxStyleProp = {
  height: qt('header')('all'),
};

export const Frame: React.FC = props => {
  return (
    <nav
      sx={stylesFrame}
      role="navigation"
      aria-label="Primary navigation"
      data-testid="navigation-panel-test-id">
      {props.children}
    </nav>
  );
};
