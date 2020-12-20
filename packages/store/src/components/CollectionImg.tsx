import { Image } from './Image';
import { ProductImage } from '../gatsby';
import React from 'react';
import { createSrcSets } from '..';
import { css } from '@emotion/core';
import styled from './styled';

export interface CollectionImg {
  readonly isActive: boolean;
  readonly images: [ProductImage, ProductImage];
}

interface StyledImgProps {
  readonly isActive: boolean;
}

const activeTransition = css`
  :last-of-type {
    opacity: 1;
  }
`;

const idleTransition = css`
  :last-of-type {
    opacity: 0;
  }
`;

const StyledCollectionImgContainer = styled.div`
  position: relative;
  ::before {
    content: '';
    display: block;
    padding-top: 150%;
  }
`;
StyledCollectionImgContainer.displayName = 'StyledCollectionImgContainer';

const StyledCollectionImg = styled(Image)<StyledImgProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transition: opacity ${props => props.theme.transition.duration[0]}s ${props => props.theme.transition.timing[0]};
  ${props => (props.isActive ? activeTransition : idleTransition)}
`;
StyledCollectionImg.displayName = 'StyledCollectionImg';

export const CollectionImg: React.FC<CollectionImg> = props => (
  <StyledCollectionImgContainer>
    {props.images.map(image => (
      <StyledCollectionImg
        fit="cover"
        key={`collection-image-${image.id}`}
        alt={image.altText}
        isActive={props.isActive}
        height="100%"
        width="100%"
        src={image.originalSrc}
        srcSet={createSrcSets(image.srcSet)}
      />
    ))}
  </StyledCollectionImgContainer>
);
