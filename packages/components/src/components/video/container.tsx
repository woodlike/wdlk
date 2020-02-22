import * as React from 'react';

export interface VideoContainerProps {
  render(data: VideoRenderProps): JSX.Element;
}

export interface VideoRenderProps {
  readonly videoRef: React.RefObject<unknown>;
  readonly isMuted: boolean;
  readonly setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Container: React.FC<VideoContainerProps> = (props): JSX.Element => {
  const [isMuted, setMuted] = React.useState(true);
  const videoRef = React.createRef();
  const data: VideoRenderProps = {
    isMuted,
    setMuted,
    videoRef,
  };

  return props.render(data);
};

Container.displayName = 'VideoContainer';
