import React from 'react';
import { useTheme } from 'emotion-theming';
import { useCarousel } from '@wdlk/hooks';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { CarouselLayout, Image, Thumbnail, Track } from '../..';
import { ProductImage, SourceSetProps, ProductImageWidth } from '../../gatsby';

interface StageCarouselProps {
  readonly images: ProductImage[];
}

interface ThumbnailClickInit {
  readonly idx: number;
  readonly e: React.MouseEvent;
  jump(idx: number): void;
  setActiveIdx(idx: number): void;
}

function handleThumbnailClick({
  idx,
  e,
  jump,
  setActiveIdx,
}: ThumbnailClickInit) {
  e.preventDefault();
  setActiveIdx(idx);
  jump(idx);
}

function createSrcSets(srcSets: SourceSetProps[]): string {
  const sizes = Object.keys(ProductImageWidth);
  return srcSets.reduce(
    (acc, set, idx) => acc.concat(`${set} ${sizes[idx]}w,`),
    '',
  );
}

export const StageCarousel: React.FC<StageCarouselProps> = props => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const { carouselRef, coordinate, jump, next, previous } = useCarousel(
    props.images.length,
  );
  const { breakpoints, colors } = useTheme();
  return (
    <CarouselLayout
      iconRight={
        <ChevronRight
          color={colors.link}
          onClick={next}
          pointerEvents="visible"
          size={25}
        />
      }
      iconLeft={
        <ChevronLeft
          color={colors.link}
          onClick={previous}
          pointerEvents="visible"
          size={25}
        />
      }
      thumbnails={
        <>
          {/**
           * @description Four images are the maximum amount we can display
           * with the current Shopify setup. That is why we filter the first
           * four statically.
           */}
          {props.images
            .filter((_, idx) => idx <= 3)
            .map((image, idx) => (
              <Thumbnail
                alt={image.altText}
                isActive={activeIdx === idx}
                key={`carousel-thumbnail-${image.id}`}
                onClick={e =>
                  handleThumbnailClick({ idx, e, jump, setActiveIdx })
                }
                url={image.originalSrc}
              />
            ))}
        </>
      }>
      <Track
        ref={carouselRef}
        length={props.images.length}
        coordinate={coordinate}>
        {props.images.map(image => (
          <Image
            fit={'cover'}
            key={`carousel-image-${image.id}`}
            alt={image.altText}
            sizes={`(min-width: ${breakpoints[2]}) 50vw, 100vw`}
            src={image.originalSrc}
            srcSet={createSrcSets(image.srcSet)}
          />
        ))}
      </Track>
    </CarouselLayout>
  );
};
