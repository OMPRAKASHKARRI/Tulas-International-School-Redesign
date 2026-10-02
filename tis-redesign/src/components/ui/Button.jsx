import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent text-ink hover:brightness-110',
  outline: 'border border-white/60 text-white hover:bg-white hover:text-ink',
  subtle: 'border border-line bg-surface text-fg hover:border-accent',
}

/** Link-styled button. External URLs open in a new tab safely. */
export default function Button({ href, variant = 'primary', icon = true, className = '', children }) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {icon && external && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  )
}
