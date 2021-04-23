import { useEffect, useState } from "react"

export function useMedia<T>(
  queries: string[],
  values: T[],
  defaultValue: T,
): T {
  const mediaQueryList = queries.map(q => {
    return window?.matchMedia(q)
  })

  // It creates only one instance of the handler on mount
  const getValue = (): T => {
    const idx = mediaQueryList.findIndex(ql => ql.matches)
    return values[idx] ?? defaultValue
  }

  const [initialValue, setInitialValue] = useState<T>(getValue)
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    const handler = (): void => setInitialValue(getValue)
    for (const query of mediaQueryList) {
      query.addListener(handler)
    }

    return () => {
      for (const query of mediaQueryList) {
        query.removeListener(handler)
      }
    }
  }, [])

  // Necesary for getting the right media query on the first render
  useEffect(() => {
    setValue(initialValue)
  }, [value, initialValue])

  return value
}
