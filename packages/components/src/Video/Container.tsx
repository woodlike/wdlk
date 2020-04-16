import * as React from 'react';

export interface VideoContainerProps {
  render(data: VideoRenderProps): JSX.Element;
}

export interface VideoRenderProps {
  readonly videoRef: React.RefObject<unknown>;
  readonly isMuted: boolean;
  readonly setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  readonly isPlaying: boolean;
  readonly setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  play(): Promise<void>;
  pause(): void;
}

export const Container: React.FC<VideoContainerProps> = (props): JSX.Element => {
  const [isMuted, setMuted] = React.useState<boolean>(true);
  const [isPlaying, setPlay] = React.useState<boolean>(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const play = async (): Promise<void> => {
    try {
      await (videoRef.current as HTMLVideoElement).play();
    } catch (err) {
      Promise.resolve(console.error(`Video Container [error]: ${err}`));
    }
  };

  const pause = (): void => (videoRef.current as HTMLVideoElement).pause();

  const data: VideoRenderProps = {
    isMuted,
    setMuted,
    isPlaying,
    setPlay,
    videoRef,
    play,
    pause,
  };

  return props.render(data);
};

Container.displayName = 'VideoContainer';
