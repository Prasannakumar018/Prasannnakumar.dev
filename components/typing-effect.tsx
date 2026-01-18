'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
  className?: string
  prefix?: string
}

export default function TypingEffect({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseDuration = 2000,
  className = '',
  prefix = ''
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration])

  return (
    <span className={className}>
      {prefix}{displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
