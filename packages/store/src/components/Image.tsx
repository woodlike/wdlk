/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface ImageProps {
  readonly src: string;
  readonly alt: string;
  readonly fit: ImageFit;
  readonly width?: string;
  readonly height?: string;
  readonly sizes?: string;
  readonly srcSet?: string;
}

export type ImageFit = 'fill' | 'contain' | 'cover';

const createStylesImage = (
  fit: ImageFit,
  width = '100%',
  height = 'auto',
): SxStyleProp => ({
  objectFit: fit,
  width: width,
  height: height,
});

export const Image: React.FC<ImageProps> = props => (
  <img
    sx={createStylesImage(props.fit, props.width, props.height)}
    src={props.src}
    alt={props.alt}
    sizes={props.sizes}
    srcSet={props.srcSet}
  />
);
