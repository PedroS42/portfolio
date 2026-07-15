import { useEffect, useState } from "react"

/**
 * Tracks which section is currently active in the viewport.
 * Returns the id of the active section.
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset

      // If we're near the bottom, highlight the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds, offset])

  return activeId
}
