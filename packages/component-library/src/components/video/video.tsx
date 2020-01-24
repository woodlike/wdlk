/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { VideoProps } from '.';
import { withFocusStyle } from '../with-focus-style';

const stylesVideo: SxStyleProp = {
  width: '100%',
  objectFit: 'cover',
};

const handleHeight = (top: number): SxStyleProp =>
  top && top > 0 ? { height: `calc(100vh - ${top}px)` } : { height: 'auto' };

const createStylesVideo = (top: number): SxStyleProp => ({
  ...stylesVideo,
  ...handleHeight(top),
});

export const VideoMedia: React.FC<VideoProps> = (props): JSX.Element | null => {
  const { sources } = props;
  return sources.length > 0 ? (
    <video
      sx={createStylesVideo(props.top)}
      controls={props.controls}
      loop={props.loop}
      preload={props.preload}
      poster={props.poster}
      autoPlay={true}
      data-testid="video-media-test-id">
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
};

VideoMedia.displayName = 'VideoMedia';
export const Media = withFocusStyle<VideoProps>(VideoMedia);
