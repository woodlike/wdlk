/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface NavBarProps {
  readonly itemCount: number;
}

const styledNavBar: SxStyleProp = {
  display: 'grid',
  gridColumnGap: ['none', `24px`],
  gridRowGap: [`18px`, 'none'],
  paddingLeft: 0,
  margin: 0,
};

const generateColumns = (n: number): SxStyleProp => {
  const config = `repeat(${n}, 1fr [nav-item])`;
  return {
    gridTemplateColumns: ['none', config],
    gridTemplateRows: [config, 'none'],
  };
};

const themedNavBar = (n: number): SxStyleProp => {
  return {
    ...styledNavBar,
    ...generateColumns(n),
  };
};

export const Bar: React.FC<NavBarProps> = props => (
  <ul sx={themedNavBar(props.itemCount)}>{props.children}</ul>
);

Bar.displayName = 'NavigationBar';
