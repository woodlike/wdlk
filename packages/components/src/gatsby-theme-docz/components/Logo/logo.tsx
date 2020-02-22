/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Link } from 'docz';
import { LogoPath, BrandPath } from './svg-paths';
import { LogoProps } from './types';
import { qt } from 'gatsby-theme-query';

const logoSize = {
  width: 122,
  height: 46,
};

const styledSVG: SxStyleProp = {
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

export const Logo: React.FunctionComponent<LogoProps> = (props): JSX.Element => {
  return (
    <Link to="/">
      <svg
        sx={styledSVG}
        className={props.className}
        aria-labelledby="logo-title-aria-id"
        data-testid="logo-test-id"
        viewBox="0 0 135 46">
        <title id="logo-title-aria-id">{props.title}</title>
        <desc>{props.desc}</desc>
        <LogoPath />
        <BrandPath />
      </svg>
    </Link>
  );
};
