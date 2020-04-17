import { useRef, useState, RefObject } from 'react';

export interface VideoControlState {
  readonly isMuted: boolean;
  readonly setMuted: React.Dispatch<React.SetStateAction<boolean>>;
  readonly videoRef: RefObject<HTMLVideoElement>;
  readonly play: () => Promise<void>;
  readonly pause: () => void;
}

export function useVideoControl(mute = true): VideoControlState {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setMuted] = useState<boolean>(mute);

  const play = async (): Promise<void> => {
    try {
      if (!videoRef || !videoRef.current) {
        return;
      }
      await videoRef.current.play();
    } catch (err) {
      Promise.resolve(console.error(`Video Control Hook [error]: ${err}`));
    }
  };

  const pause = (): void => {
    if (!videoRef || !videoRef.current) {
      return;
    }
    videoRef.current.pause();
  };

  return {
    videoRef,
    isMuted,
    setMuted,
    pause,
    play,
  };
}
