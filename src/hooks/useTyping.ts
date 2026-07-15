import { useEffect, useState } from "react"

/**
 * Typewriter effect that cycles through a list of words.
 */
export function useTyping(words: string[], typingSpeed = 90, pause = 1600) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const current = words[wordIndex % words.length]

    let delay = deleting ? typingSpeed / 2 : typingSpeed
    if (!deleting && text === current) delay = pause
    if (deleting && text === "") delay = 350

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === "") {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText((prev) =>
          deleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1),
        )
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, pause])

  return text
}
