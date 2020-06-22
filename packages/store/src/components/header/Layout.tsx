/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

const stylesItemSlot: SxStyleProp = {
  ':nth-of-type(2)': {
    justifySelf: 'center',
  },
  ':nth-of-type(3)': {
    justifySelf: 'end',
  },
};

export const Item: React.FC = props => (
  <div sx={stylesItemSlot}>{props.children}</div>
);

Item.displayName = 'HeaderItem';
