import React from 'react';
import styled from './styled';

export interface ImageProps {
  readonly src: string;
  readonly alt: string;
  readonly fit: ImageFit;
  readonly width?: string;
  readonly height?: string;
  readonly sizes?: string;
  readonly srcSet?: string;
}

interface StyledImage {
  readonly fit: ImageFit;
  readonly width?: string;
  readonly height?: string;
}

export type ImageFit = 'fill' | 'contain' | 'cover';

const StyledImage = styled.img<StyledImage>`
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? 'auto'};
  object-fit: ${props => props.fit};
`;

export const Image: React.FC<ImageProps> = props => (
  <StyledImage
    width={props.width}
    height={props.height}
    alt={props.alt}
    fit={props.fit}
    sizes={props.sizes}
    src={props.src}
    srcSet={props.srcSet}
  />
);
