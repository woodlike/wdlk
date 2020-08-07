/**@jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { Theme } from '@wdlk/components';

export interface ThumbnailProps {
  readonly alt: string;
  readonly isActive: boolean;
  readonly url: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const stylesThumbnail: SxStyleProp = {
  width: [50, 50, 50, 70, 70, 90],
  height: [50, 50, 50, 70, 70, 90],
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: '1px 1px 1px 1px',
};

const stylesImage: SxStyleProp = {
  width: '100%',
  height: '100%',
};

const createStylesThumbnail = (isActive: boolean) => ({
  ...stylesThumbnail,
  borderColor: ({ colors }: Theme) => (isActive ? colors.link : 'transparent'),
});

export const Thumbnail: React.FC<ThumbnailProps> = props => (
  <div sx={createStylesThumbnail(props.isActive)} onClick={props.onClick}>
    <img sx={stylesImage} src={props.url} alt={props.alt} />
  </div>
);

Thumbnail.displayName = 'Carousel.Thumbnail';
