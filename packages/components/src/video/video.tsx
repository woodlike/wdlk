/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui';
import { forwardRef, useRef, useImperativeHandle, RefObject } from 'react';

export interface VideoProps {
  controls: boolean;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  preload: 'auto' | 'metadata' | 'none';
  sources: Source[];
  poster?: string;
}

export interface ImperativeRefProps {
  play(): Promise<void>;
}

export interface CustomizedChildRef {
  play(): Promise<void>;
  pause(): void;
}

export interface Source {
  id: string;
  src: string;
  type: 'video/mp4' | 'video/webm';
}

const stylesVideo: SxStyleProp = {
  width: '100%',
  objectFit: 'cover',
};

const createStylesVideo = (): SxStyleProp => ({
  ...stylesVideo,
});

export const Media = forwardRef<ImperativeRefProps, VideoProps>((props, ref) => {
  const childRef = useRef<CustomizedChildRef>();
  const { sources } = props;

  useImperativeHandle(ref, () => ({
    async play(): Promise<void> {
      try {
        (await childRef) && childRef.current && childRef.current.play();
      } catch (err) {
        Promise.resolve(console.error(`Video play control [error]:${err}`));
      }
    },
    pause(): void {
      childRef && childRef.current && childRef.current.pause();
    },
  }));

  return sources.length > 0 ? (
    <video
      sx={createStylesVideo()}
      autoPlay={true}
      controls={props.controls}
      loop={props.loop}
      muted={props.muted}
      preload={props.preload}
      poster={props.poster}
      playsInline={true}
      ref={(childRef as unknown) as RefObject<HTMLVideoElement>}>
      {sources.map(source => (
        <source key={source.id} src={source.src} type={source.type} />
      ))}
    </video>
  ) : null;
});

Media.displayName = 'Media';
