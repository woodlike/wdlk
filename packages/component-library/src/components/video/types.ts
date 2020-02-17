export interface VideoProps {
  controls: boolean;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  preload: 'auto' | 'metadata' | 'none';
  sources: Source[];
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

export interface ControlProps {
  muted: boolean;
  onClick: React.MouseEventHandler<SVGElement>;
}
