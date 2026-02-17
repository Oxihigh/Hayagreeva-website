import { motion, useInView, UseInViewOptions, Variants } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  viewport?: UseInViewOptions
  disableAnimation?: boolean
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  viewport = { once: false, amount: 0.3, margin: '0px 0px -100px 0px' },
  disableAnimation = false,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewport)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={disableAnimation ? "visible" : "hidden"}
      animate={disableAnimation ? "visible" : (isInView ? 'visible' : 'hidden')}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
