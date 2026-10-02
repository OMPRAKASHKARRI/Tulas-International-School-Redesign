import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary'

// Decorative follower ring. The native cursor stays visible and the ring is
// pointer-events:none, so clicking and text selection are never affected.
export default function CustomCursor() {
  const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reduceMotion = useReducedMotion()
  const enabled = hasFinePointer && !reduceMotion
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 450, damping: 34, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 450, damping: 34, mass: 0.4 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return undefined
    let first = true
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (first) { // snap to the pointer once so the ring doesn't fly in from the corner
        sx.jump(e.clientX)
        sy.jump(e.clientY)
        first = false
        setVisible(true)
      }
    }
    const over = (e) => setHovering(Boolean(e.target.closest?.(INTERACTIVE)))
    const leave = () => setVisible(false)
    const enter = () => !first && setVisible(true)
    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', over, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    document.documentElement.addEventListener('mouseenter', enter)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
      document.documentElement.removeEventListener('mouseenter', enter)
    }
  }, [enabled, x, y, sx, sy])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4"
    >
      <motion.div
        animate={{ scale: hovering ? 1.9 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={`h-8 w-8 rounded-full border-2 border-accent ${hovering ? 'bg-accent/20' : ''}`}
      />
    </motion.div>
  )
}
