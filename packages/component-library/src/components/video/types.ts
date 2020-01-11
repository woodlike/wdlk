export interface VideoProps {
  controls: boolean;
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
