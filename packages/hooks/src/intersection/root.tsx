import * as React from 'react';

export interface IntersectionProps {
  readonly steps?: number;
  readonly options?: IntersectionOptions;
}

export interface IntersectionOptions {
  readonly threshold?: number | number[];
  readonly rootMargin?: string;
  readonly root?: Element;
}

export interface IntersectionCtxData {
  readonly options: IntersectionOptions;
}

const IntersectionCtx = React.createContext<IntersectionCtxData>(
  {} as IntersectionCtxData,
);
IntersectionCtx.displayName = 'Container:IntersectionContext';
/**
 * @description This Consumer is meant to be used on tests only.
 * If you need to access the context value use the:
 * @function useIntersectionCtx() instead.
 */
export const Consumer = IntersectionCtx.Consumer;

export function useIntersectionCtx(): IntersectionCtxData {
  const data = React.useContext(IntersectionCtx);
  return data;
}

export function calcThreshold(steps: number): number | number[] {
  if (steps === 1) {
    return 1;
  }
  return Array.from({ length: steps }).map(
    (_, i) => +(i / steps).toPrecision(2),
  );
}

export const Root: React.FC<IntersectionProps> = (props): JSX.Element => {
  const { options, steps = 1 } = props;
  const data = {
    options: {
      ...options,
      threshold: (options && options.threshold) || calcThreshold(steps),
    },
  };

  return (
    <IntersectionCtx.Provider value={data}>
      {props.children}
    </IntersectionCtx.Provider>
  );
};

Root.displayName = 'Container:IntersectionRoot';
