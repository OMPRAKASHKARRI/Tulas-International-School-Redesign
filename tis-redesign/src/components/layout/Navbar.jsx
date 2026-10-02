import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { school } from '../../data/schoolContent.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { useTheme } from '../../hooks/useTheme.js'
import Button from '../ui/Button.jsx'
import SmartImage from '../ui/SmartImage.jsx'

const ids = navLinks.map((l) => l.id)

function ThemeToggle({ onDark }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`grid h-11 w-11 place-items-center rounded-full border transition ${onDark ? 'border-white/40 text-white hover:bg-white/10' : 'border-line text-fg hover:bg-fg/5'}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const reduceMotion = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  // The 'change' event only fires on scroll, so sync once on mount (reload mid-page, anchor links).
  useEffect(() => { setScrolled(scrollY.get() > 40) }, [scrollY])

  // Close the mobile menu if the viewport grows to the desktop layout.
  useEffect(() => { if (isDesktop) setOpen(false) }, [isDesktop])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const onDark = !scrolled && !open // transparent over the hero image
  return (
    <header className={`${onDark ? 'on-dark ' : ''}fixed inset-x-0 top-1 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-line bg-bg/90 backdrop-blur' : ''}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center rounded-lg bg-white px-2.5 py-1" aria-label={`${school.name}, home`}>
          <SmartImage image={school.logo} width="96" height="40" className="h-9 w-auto" fallback={<span className="px-1 font-display text-lg font-semibold text-ink">TIS</span>} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'location' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${onDark ? 'text-white/85 hover:text-white' : 'text-muted hover:text-fg'} ${active === l.id ? (onDark ? '!text-white' : '!text-fg') : ''}`}
              >
                {l.label}
                {active === l.id && <motion.span layoutId="nav-dot" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-accent" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle onDark={onDark} />
          <Button href={school.applyUrl} className="hidden !min-h-11 sm:inline-flex">Apply Now</Button>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${onDark ? 'border-white/40 text-white' : 'border-line text-fg'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="mx-auto max-h-[calc(100svh-4.5rem)] max-w-7xl space-y-1 overflow-y-auto px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.id ? 'location' : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${active === l.id ? 'bg-accent/15 text-fg' : 'text-muted'}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2"><Button href={school.applyUrl} className="w-full">Apply Now</Button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
