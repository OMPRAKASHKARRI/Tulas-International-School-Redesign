// Reusable Framer Motion variants (durations kept in the 0.3–0.6s range).
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } }),
}
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
