/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

const stylesList: SxStyleProp = {
  paddingLeft: 0,
  margin: 0,
  listStyle: 'none',
};

export const Unordered: React.FC = props => <ul sx={stylesList}>{props.children}</ul>;
export const Item: React.FC = props => <li>{props.children}</li>;

Unordered.displayName = 'List.Unordered';
Item.displayName = 'List.Item';
