/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface DocsLogoProps {
  path: SVGPathElement;
  minX: number;
  minY: number;
  width: number;
  height: number;
}

const stylesDocsLogo: SxStyleProp = {
  color: 'primary',
};

export const DocsLogo: React.FC<DocsLogoProps> = (props): JSX.Element => (
  <svg sx={stylesDocsLogo} viewBox={`${props.minX} ${props.minY} ${props.width} ${props.height}`}>
    {props.path}
  </svg>
);
