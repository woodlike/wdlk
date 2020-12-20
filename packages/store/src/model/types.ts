import { SourceSetProps } from '../gatsby';

export interface ActionType<T extends string, P = undefined> {
  readonly type: T;
  readonly payload: P;
}

export interface Image {
  readonly id: string;
  readonly src: string;
  readonly localFile: string;
}

export interface ProductImageProps {
  readonly altText: string;
  readonly id: string;
  readonly originalSrc: string;
  readonly srcSet: SourceSetProps[];
  readonly localFile?: {
    readonly name?: string;
  };
}