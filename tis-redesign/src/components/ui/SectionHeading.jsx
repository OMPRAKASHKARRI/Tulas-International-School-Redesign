import { Reveal } from '../animation/Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, light = false, center = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-accent' : 'text-eyebrow'}`}>{eyebrow}</p>
      <h2 className={`text-3xl leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-muted'}`}>{description}</p>}
    </Reveal>
  )
}
