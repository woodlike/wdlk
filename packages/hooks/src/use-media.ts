import React from "react"

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

export function useMediaQuery(query: string) {
  const supportsMatchMedia =
    typeof window !== "undefined" && typeof window.matchMedia !== "undefined"

  const [matches, setMatches] = React.useState(() => {
    if (supportsMatchMedia) {
      matchMedia(query).matches
    }

    // Once mounted we rely on the event listeners
    return false
  })

  useEnhancedEffect(() => {
    if (!supportsMatchMedia) return
    const mql = matchMedia(query)
    let isActive = true

    const updateMatchMedia = () => {
      if (!isActive) return
      setMatches(mql.matches)
    }

    updateMatchMedia()
    mql.addEventListener("change", updateMatchMedia)

    return () => {
      mql.removeEventListener("change", updateMatchMedia)
      isActive = false
    }
  }, [matches])

  return matches
}
