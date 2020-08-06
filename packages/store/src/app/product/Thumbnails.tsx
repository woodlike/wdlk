import React from 'react';
import { Carousel } from '../..';
import { ProductImage } from '../../../gatsby';

interface ThumbnailsProps {
  readonly active: boolean;
  readonly images: ProductImage[];
}

// Four images are the maximum amount to display.
// that is why we filter the first four statically.
export const Thumbnails: React.FC<ThumbnailsProps> = props => {
  return (
    <>
      {props.images
        .filter((_, idx) => idx <= 3)
        .map(img => (
          <Carousel.Thumbnail
            active={props.active}
            key={`thumbnail-${img.id}`}
            alt={img.altText}
            url={img.originalSrc}
          />
        ))}
    </>
  );
};
