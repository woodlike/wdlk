/**@jsx jsx */
import {jsx} from 'theme-ui';
import {NavigationProps} from './types';

export const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  return (
    <nav
      role="navigation"
      aria-label="Primary navigation"
      data-testid="navigation-panel-test-id"
    >
      {props.children}
    </nav>
  )
}
