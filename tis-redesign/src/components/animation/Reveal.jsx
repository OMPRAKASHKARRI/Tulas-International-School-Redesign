import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, stagger } from './variants.js'

const viewport = { once: true, margin: '-60px' }

/** Fades/slides a single block in once when it enters the viewport. */
export function Reveal({ as = 'div', variants = fadeUp, delay = 0, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag variants={variants} custom={delay} initial={reduce ? false : 'hidden'} whileInView="show" viewport={viewport} {...rest}>
      {children}
    </Tag>
  )
}

/** Parent that staggers its <StaggerItem> children. */
export function Stagger({ as = 'div', children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag variants={stagger} initial={reduce ? false : 'hidden'} whileInView="show" viewport={viewport} {...rest}>
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', children, ...rest }) {
  const Tag = motion[as]
  return <Tag variants={fadeUp} {...rest}>{children}</Tag>
}
