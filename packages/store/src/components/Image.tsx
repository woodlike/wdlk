/**@jsx jsx */
import { jsx } from 'theme-ui';

export interface ImageProps {
  readonly src: string;
  readonly alt: string;
  readonly sizes?: string;
  readonly srcSet?: string;
}

export const Image: React.FC<ImageProps> = props => (
  <img
    src={props.src}
    alt={props.alt}
    sizes={props.sizes}
    srcSet={props.srcSet}
  />
);
