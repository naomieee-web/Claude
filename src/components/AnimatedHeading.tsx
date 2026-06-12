import { CSSProperties, useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: CSSProperties
  initialDelay?: number
  charDelay?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        let charIndex = 0
        const renderChar = (char: string) => {
          const delay =
            lineIndex * line.length * charDelay + charIndex * charDelay
          charIndex += 1
          return (
            <span
              key={charIndex}
              className="inline-block"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        }
        return (
          <span key={lineIndex} className="block">
            {line.split(' ').map((word, wordIndex, words) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split('').map((char) => renderChar(char))}
                {wordIndex < words.length - 1 && renderChar(' ')}
              </span>
            ))}
          </span>
        )
      })}
    </h1>
  )
}
