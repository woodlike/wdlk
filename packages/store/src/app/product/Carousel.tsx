import React from 'react';
import { Carousel } from '../..';
import { ProductImage } from '../../../gatsby';

export interface StageCarouselProps {
  images: ProductImage;
}

export const StageCarousel: React.FC<StageCarouselProps> = () => {
  return (
    <Carousel.Frame>
      <Carousel.Track length={5} coordinate={-80}>
        <div
          style={{
            backgroundColor: 'rebeccapurple',
            width: '100%',
            height: '100vh',
          }}></div>
        <div
          style={{
            backgroundColor: 'papayawhip',
            width: '100%',
            height: '100vh',
          }}></div>
        <div
          style={{
            backgroundColor: 'yellow',
            width: '100%',
            height: '100vh',
          }}></div>
        <div
          style={{
            backgroundColor: 'red',
            width: '100%',
            height: '100vh',
          }}></div>
        <div
          style={{
            backgroundColor: 'green',
            width: '100%',
            height: '100vh',
          }}></div>
      </Carousel.Track>
    </Carousel.Frame>
  );
};
