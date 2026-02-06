import { useEffect, useState } from 'react'

type TypewriterTextProps = {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
  tag?: 'span' | 'p'
}

/**
 * Affiche le texte caractère par caractère (effet machine à écrire).
 * Même style pour Hero et Musiques.
 */
export function TypewriterText({
  text,
  speed = 45,
  delay = 0,
  className = '',
  showCursor = true,
  tag: Tag = 'span',
}: TypewriterTextProps) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= text.length) return
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setVisible((v) => {
          if (v >= text.length) {
            clearInterval(id)
            return v
          }
          return v + 1
        })
      }, speed)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(start)
  }, [text, speed, delay, visible])

  return (
    <Tag className={className}>
      {text.slice(0, visible)}
      {showCursor && visible < text.length && (
        <span className="typewriter-cursor" aria-hidden>
          |
        </span>
      )}
    </Tag>
  )
}
