'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TopBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const router = useRouter()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5])
  const y = useTransform(scrollYProgress, [0, 1], [0, 400])

  useEffect(() => {
    if (!isVisible || isExiting) return
    const handleScroll = () => triggerExit(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible, isExiting])

  function triggerExit(redirect = false) {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      if (redirect) router.push('/#hero')
    }, 1800)
  }

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center overflow-y-auto min-h-screen"
      onClick={() => triggerExit(false)}
      style={{ cursor: 'pointer' }}
      title="Click here to continue"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-background tracking-wide uppercase whitespace-nowrap w-full text-center"
        style={isExiting ? { scale: 3, opacity: 0, transition: 'all 1.8s cubic-bezier(.4,2,.3,1)' } : { scale, y }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {"Let's know about me?".split(' ').map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}
