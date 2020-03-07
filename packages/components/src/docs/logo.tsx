/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface DocsLogoProps {
  readonly size: LogoSize;
  readonly path: JSX.Element;
  readonly minX: number;
  readonly minY: number;
  readonly width: number;
  readonly height: number;
  readonly title: string;
  readonly desc: string;
  readonly base?: BaseSize;
  readonly isFocused?: boolean;
}

export interface BaseSize {
  readonly width: number;
  readonly height: number;
}

export type LogoSize = 'S' | 'M' | 'L' | 'XL';

export const intBaseSize = {
  width: 92,
  height: 46,
};

const stylesDocsLogo: SxStyleProp = {
  color: 'primary',
};

const createLogoSizes = (size: LogoSize, base: BaseSize): SxStyleProp => {
  switch (size) {
    case 'S':
      return base;
    case 'M':
      return {
        width: base.width * 2,
        height: base.height * 2,
      };
    case 'L':
      return {
        width: base.width * 3,
        height: base.height * 3,
      };
    case 'XL':
      return {
        width: base.width * 4,
        height: base.height * 4,
      };
  }
};

const createLogoStyles = (size: LogoSize, base: BaseSize = intBaseSize): SxStyleProp => ({
  ...stylesDocsLogo,
  ...createLogoSizes(size, base),
});

export const Logo: React.FC<DocsLogoProps> = (props): JSX.Element | null => {
  if (!props.path) {
    console.error('The Docs logo component requires of a SVG path component to render');
    return null;
  }

  return (
    <svg
      sx={createLogoStyles(props.size, props.base)}
      aria-labelledby={`docs-logo-${props.title.replace(/ /g, '')}`}
      viewBox={`${props.minX} ${props.minY} ${props.width} ${props.height}`}>
      <title id={`docs-logo-${props.title.replace(/ /g, '')}`}>{props.title}</title>
      <desc>{props.desc}</desc>
      {props.path}
    </svg>
  );
};

Logo.displayName = 'Docs.Logo';
