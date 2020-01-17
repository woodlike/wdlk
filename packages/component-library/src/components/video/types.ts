export interface VideoProps {
  controls: boolean;
  autoPlay: boolean;
  loop: boolean;
  preload: 'auto' | 'metadata' | 'none';
  sources: Source[];
  top: number;
  isFocused: boolean;
  poster?: string;
}

export interface Source {
  id: string;
  src: string;
  type: 'video/mp4' | 'video/webm';
}

export interface VideoStageProps {
  headline: string;
  tag: string;
  copy: string;
}
