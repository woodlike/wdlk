/** @jsx jsx */
import { jsx } from 'theme-ui';

export const DemoBox: React.FC = (props): JSX.Element => <div sx={{ height: '400px' }}>{props.children}</div>;
