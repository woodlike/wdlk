export interface VideoProps {
  controls: boolean;
  autoPlay: boolean;
  loop: boolean;
  preload: 'auto' | 'metadata' | 'none';
  sources: Source[];
  poster?: string;
  top: number;
}

export interface Source {
  id: string;
  src: string;
  type: 'video/mp4' | 'video/webm';
}
