import { useEffect, useState } from "react"

export function useMedia<T>(
  queries: string[],
  values: T[],
  defaultValue: T,
): T {
  const mql = queries.map(q => {
    if (typeof window === "undefined") {
      return {
        matches: false,
        addListener() {
          return
        },
        removeListener() {
          return
        },
      }
    }
    return window.matchMedia(q)
  })

  const getValue = (): T => {
    const idx = mql.findIndex(ql => ql.matches)
    return values[idx] ?? defaultValue
  }

  const [value, setValue] = useState<T>(getValue)
  useEffect(() => {
    const handler = (): void => setValue(getValue)
    mql.forEach(q => q.addListener(handler))

    return () => mql.forEach(q => q.removeListener(handler))
  }, [value])

  return value
}
