/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

export interface ThumbnailProps {
  readonly alt: string;
  readonly active: boolean;
  readonly url: string;
}

const stylesThumbnail: SxStyleProp = {
  width: [0, 0, 0, 0, 60, 80],
  height: [0, 0, 0, 0, 60, 80],
  borderStyle: 'solid',
  borderWidth: '1px 1px 1px 1px',
};

const stylesImage: SxStyleProp = {
  width: 'inherit',
  height: 'inherit',
};

const createStylesThumbnail = (active: boolean) => ({
  ...stylesThumbnail,
  borderColor: active ? 'papayawhip' : 'transparent',
});

export const Thumbnail: React.FC<ThumbnailProps> = props => (
  <div sx={createStylesThumbnail(props.active)}>
    <img sx={stylesImage} src={props.url} alt={props.alt} />
  </div>
);

Thumbnail.displayName = 'Carousel.Thumbnail';
