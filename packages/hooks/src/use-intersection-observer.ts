import { useEffect, useRef, useState, RefObject } from 'react';

export interface IntersectionInit {
  readonly steps?: number;
  readonly options?: IntersectionOptions;
}

export interface IntersectionOptions {
  readonly threshold?: number | number[];
  readonly rootMargin?: string;
  readonly root?: Element | null;
}

export interface UseIntersectionObserver {
  readonly entries: IntersectionObserverEntry[];
  readonly targetRef: RefObject<Element>;
}

export function calcThreshold(steps: number): number | number[] {
  if (steps === 1) {
    return 1;
  }
  return Array.from({ length: steps }).map(
    (_, i) => +(i / steps).toPrecision(2),
  );
}

export function useIntersectionObserver(
  init: IntersectionInit,
): UseIntersectionObserver {
  const targetRef = useRef<Element>(null);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const { options, steps = 1 } = init;

  const updateEntries = (ent: IntersectionObserverEntry[]): void =>
    setEntries([...ent]);

  useEffect(() => {
    const observer = new IntersectionObserver(updateEntries, {
      ...options,
      threshold: (options && options.threshold) || calcThreshold(steps),
    });

    observer.observe(targetRef.current as Element);
    return () => observer.unobserve(targetRef.current as Element);
  }, []);

  return { entries, targetRef };
}
