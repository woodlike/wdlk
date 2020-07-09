import React from 'react';
import { useThemeUI } from 'theme-ui';

import { Carousel, Image, useCarousel } from '../..';
import {
  ProductImage,
  SourceSetProps,
  ProductImageWidth,
} from '../../../gatsby';

export interface StageCarouselProps {
  images: ProductImage[];
}

function createSrcSets(srcSets: SourceSetProps[]): string {
  const sizes = Object.keys(ProductImageWidth);
  return srcSets.reduce(
    (acc, set, idx) => acc.concat(`${set.src} ${sizes[idx]}w,`),
    '',
  );
}

export const StageCarousel: React.FC<StageCarouselProps> = props => {
  const { images } = props;
  const { theme } = useThemeUI();
  const { coordinate, previous, next } = useCarousel(images.length);
  return (
    <Carousel.Frame
      iconRight={<Carousel.IconRight onClick={next} />}
      iconLeft={<Carousel.IconLeft onClick={previous} />}>
      <Carousel.Track length={images.length} coordinate={coordinate}>
        {images.map(image => (
          <Image
            key={image.id}
            alt={image.altText}
            sizes={`(min-width: ${theme.breakpoints[2]}) 50vw, 100vw`}
            src={image.originalSrc}
            srcSet={createSrcSets(image.srcSet)}
          />
        ))}
      </Carousel.Track>
    </Carousel.Frame>
  );
};
