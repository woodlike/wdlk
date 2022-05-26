import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

export interface IntersectionOptions {
  readonly threshold: number | number[]
  readonly rootMargin?: string
  readonly root?: Element | null
}

export type UseIntersectionObserver<T> = [
  Dispatch<SetStateAction<T>>,
  IntersectionObserverEntry,
  T,
]

export function calcThreshold(steps: number): number | number[] {
  if (steps === 1) {
    return 1
  }
  const result: number[] = []

  for (let i = 0; i < steps; i++) {
    result.push(+(i / steps).toPrecision(2))
  }
  return result
}

export function useIntersectionObserver<T>(
  init: IntersectionOptions,
): UseIntersectionObserver<T> {
  const [observerRef, setRef] = useState<T>((null as unknown) as T)
  const [entry, setEntries] = useState<IntersectionObserverEntry>(
    {} as IntersectionObserverEntry,
  )
  const observer = useRef(
    new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => setEntries(entry),
      init,
    ),
  )

  useEffect(() => {
    const { current: currentObserver } = observer
    if (observerRef) {
      currentObserver.observe((observerRef as unknown) as Element)
    }
    return () => currentObserver.disconnect()
  }, [observerRef])

  return [setRef, entry, observerRef]
}
