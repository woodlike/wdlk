/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';

import { VideoProps } from '.';

const stylesVideo: SxStyleProp = {
  width: '100%',
  objectFit: 'cover',
};

const handleHeight = (top: number): SxStyleProp =>
  top ? { height: `calc(100vh - ${top}px)` } : { height: 'auto' };

const createStylesVideo = (top: number): SxStyleProp => ({
  ...stylesVideo,
  ...handleHeight(top),
});

export const Video: React.FC<VideoProps> = (props): JSX.Element | null => {
  const { sources } = props;
  return sources.length > 0 ? (
    <video
      sx={createStylesVideo(props.top)}
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      preload={props.preload}
      poster={props.poster}
      autoPlay={true}>
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
};

Video.displayName = 'Video';
