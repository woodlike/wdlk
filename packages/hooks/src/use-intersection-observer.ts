import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export interface IntersectionOptions {
  readonly threshold: number | number[];
  readonly rootMargin?: string;
  readonly root?: Element | null;
}

export type UseIntersectionObserver<T> = [
  IntersectionObserverEntry,
  T,
  Dispatch<SetStateAction<T>>,
];

export function calcThreshold(steps: number): number | number[] {
  if (steps === 1) {
    return 1;
  }
  return Array.from({ length: steps }).map(
    (_, i) => +(i / steps).toPrecision(2),
  );
}

export function useIntersectionObserver<T>(
  init: IntersectionOptions,
): UseIntersectionObserver<T> {
  const [observerRef, setRef] = useState<T>((null as unknown) as T);
  const [entry, setEntries] = useState<IntersectionObserverEntry>(
    {} as IntersectionObserverEntry,
  );
  const observer = useRef(
    new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => setEntries(entry),
      init,
    ),
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    if (observerRef) {
      currentObserver.observe((observerRef as unknown) as Element);
    }
    return () => currentObserver.disconnect();
  }, [observerRef]);

  return [entry, observerRef, setRef];
}
