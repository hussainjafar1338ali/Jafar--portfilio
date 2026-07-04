import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typing / deleting effect.
 */
export default function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!words || words.length === 0) return

    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      },
      deleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  useEffect(() => {
    if (!words || words.length === 0) return
    setText(words[index % words.length].substring(0, subIndex))
  }, [subIndex, index, words])

  return text
}
