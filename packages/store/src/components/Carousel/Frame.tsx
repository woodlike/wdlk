/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

const stylesProp: SxStyleProp = {
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: 0,
  overflow: 'hidden',
};

export const Frame: React.FC = props => (
  <div sx={stylesProp}>{props.children}</div>
);

Frame.displayName = 'CarouselFrame';
