/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { LogoPath, BrandPath } from './svg-paths';
import { qt } from '../theme/query';
import { withFocusStyle } from '../with-focus-style';

export interface LogoProps {
  readonly href: string;
  readonly title: string;
  readonly desc: string;
  readonly isFocused: boolean;
  readonly className?: string;
}

const logoSize = {
  width: 185,
  height: 42,
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

export const LogoBase: React.FunctionComponent<LogoProps> = (props): JSX.Element => {
  return (
    <a data-testid="logo-test-id" href={props.href}>
      <svg sx={styledSVG} className={props.className} aria-labelledby="logo-title-aria-id" viewBox="0 0 194 46">
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
