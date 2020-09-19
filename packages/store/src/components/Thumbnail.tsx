import React from 'react';
import styled from './styled';

export interface ThumbnailProps {
  readonly alt: string;
  readonly isActive: boolean;
  readonly url: string;
  readonly onClick: React.MouseEventHandler<HTMLDivElement>;
}

interface StyledThumbnailProps {
  readonly isActive: boolean;
}

const StyledThumbnail = styled.div<StyledThumbnailProps>`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props =>
    props.isActive ? props.theme.colors.link : 'transparent'};
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${props => props.theme.breakpoints[5]}) {
    width: 90px;
    height: 90px;
  }
`;

StyledThumbnail.displayName = 'StyledThumbnail';

const StyledThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
`;
StyledThumbnailImage.displayName = 'StyledThumbnailImage';

export const Thumbnail: React.FC<ThumbnailProps> = props => (
  <StyledThumbnail isActive={props.isActive} onClick={props.onClick}>
    <StyledThumbnailImage src={props.url} alt={props.alt} />
  </StyledThumbnail>
);
