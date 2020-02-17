/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { useRef } from 'react';

import { VideoProps } from '.';

const stylesVideo: SxStyleProp = {
  width: '100%',
  objectFit: 'cover',
};

const createStylesVideo = (): SxStyleProp => ({
  ...stylesVideo
});

export const Media: React.FC<VideoProps> = (props): JSX.Element | null => {
  const { sources } = props;
  const videoRef = useRef(null);

  return sources.length > 0 ? (
    <video
      sx={createStylesVideo()}
      autoPlay={true}
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      preload={props.preload}
      poster={props.poster}
      ref={videoRef}>
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
};

Media.displayName = 'Media';
