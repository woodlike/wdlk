import { useState, useCallback, useMemo } from 'react';

export interface UseCarousel {
  readonly coordinate: number;
  set(curr: number): void;
}

export function previous(current: number, length: number): number {
  return (current - 1 + length) % length;
}

export function next(current: number, length: number): number {
  return (current + 1 + length) % length;
}

export function useCarousel(length: number): UseCarousel {
  const [coordinate, setCoordinate] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);

  const set = useCallback((n: number) => setCurrent(n), [current]);
  useMemo(
    () =>
      setCoordinate(coordinate =>
        current > length ? coordinate : current * 100,
      ),
    [current, coordinate],
  );

  return { coordinate, set };
}
