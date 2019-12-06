/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { LogoPath, BrandPath } from './svg-paths';
import { LogoProps } from '.';
import { qt } from '../query';
import { withFocusStyle } from '../with-focus-style';

const logoSize = {
  width: 122,
  height: 46,
};

const styledSVG: SxStyleProp = {
  display: 'block',
  width: `${logoSize.width}px`,
  height: `${logoSize.height}px`,
  fill: 'currentColor',
  color: qt('corals')(0),
  cursor: 'pointer',
  transition: `color ${qt('duration')(1)}s ${qt('timing')(0)}`,
  ':hover': {
    color: qt('corals')(1),
  },
};

export const LogoBase: React.FunctionComponent<LogoProps> = (
  props
): JSX.Element => {

  return (
    <a
      data-testid="logo-test-id"
      href={props.href}>
    <svg
      sx={styledSVG}
      className={props.className}
      aria-labelledby="logo-title-aria-id"
      viewBox="0 0 135 46"
      >
      <title id="logo-title-aria-id">{props.title}</title>
      <desc>{props.desc}</desc>
      <LogoPath />
      <BrandPath />
    </svg>
    </a>
  );
};


export const Logo = withFocusStyle<LogoProps>(LogoBase);
export default Logo;
