import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

// Driven by motion values, so scrolling never triggers a React re-render.
// With reduced motion the bar tracks the scroll position directly (no spring lag).
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? scrollYProgress : smooth }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-accent"
    />
  )
}
