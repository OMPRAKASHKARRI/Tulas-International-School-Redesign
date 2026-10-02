import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const ThemeContext = createContext(null)
const KEY = 'tis-theme'

const systemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

function readSaved() {
  try {
    const saved = localStorage.getItem(KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null // storage blocked (private mode etc.)
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => readSaved() ?? systemTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Until the visitor picks a theme, follow live OS changes.
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => { if (!readSaved()) setTheme(systemTheme()) }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    root.classList.add('theme-anim')
    window.setTimeout(() => root.classList.remove('theme-anim'), 450)
    const next = theme === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem(KEY, next) } catch { /* ignore */ }
    setTheme(next)
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
