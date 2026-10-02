import { useState } from 'react'

/**
 * Loads image.src (local copy) first, then image.remote (official URL).
 * If both fail it renders a neutral placeholder (or `fallback`) instead of a broken icon.
 */
export default function SmartImage({ image, className = '', fallback = null, ...rest }) {
  const [stage, setStage] = useState(0)
  if (stage > 1) return fallback ?? <div aria-hidden="true" className={`${className} bg-ink/15`} />
  return (
    <img
      src={stage === 0 ? image.src : image.remote}
      alt={image.alt}
      className={className}
      onError={() => setStage((s) => s + 1)}
      {...rest}
    />
  )
}
