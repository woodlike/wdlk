/** @jsx jsx */
import { jsx } from 'theme-ui';

import { VideoProps } from '.';

export const Video: React.FC<VideoProps> = (props): JSX.Element | null => {
  const { sources } = props;
  return sources.length > 0 ? (
    <video
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      preload={props.preload}
      poster={props.poster}>
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
};

Video.displayName = 'Video';
