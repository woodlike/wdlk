/** @jsx jsx */
import { jsx } from 'theme-ui';

export const DemoBox: React.FunctionComponent<{ children: React.ReactNode }> = (
  props
): JSX.Element => <div sx={{ height: '400px' }}>{props.children}</div>;
