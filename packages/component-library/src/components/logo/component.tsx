/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { LogoPath, BrandPath } from './svg-paths';
import { qt } from '../../utils';

export interface LogoProps {
  readonly title: string;
  readonly desc: string;
}

const logoSize = {
  width: 122,
  height: 46,
};

const themedLogo: SxStyleProp = {
  width: `${logoSize.width}px`,
  height: `${logoSize.height}px`,
  fill: 'currentColor',
  color: qt('corals')(0),
  cursor: 'pointer',
  transition: 'fill .35s ease',
  ':hover': {
    color: qt('corals')(1),
  },
};

export const Logo: React.FunctionComponent<LogoProps> = (
  props
): JSX.Element => {
  return (
    <svg
      sx={themedLogo}
      aria-labelledby="logo-title-aria-id"
      data-testid="logo-test-id"
      viewBox="0 0 135 46">
      <title id="logo-title-aria-id">{props.title}</title>
      <desc>{props.desc}</desc>
      <LogoPath />
      <BrandPath />
    </svg>
  );
};

Logo.displayName = 'Logo';
export default Logo;
