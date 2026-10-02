import { images, intro, recognitions, school } from '../../data/schoolContent.js'
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow={`Since ${school.established}`} title="Welcome to Tulas International School" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {intro.about.map((p, i) => <Reveal as="p" key={i} delay={0.1 * (i + 1)}>{p}</Reveal>)}
            </div>
            <Reveal delay={0.3} className="mt-8"><Button href={school.website} variant="subtle">Visit the official website</Button></Reveal>
          </div>
          <Reveal className="relative">
            <SmartImage image={images.campus} width="800" height="600" loading="lazy" className="aspect-[4/3] w-full rounded-card object-cover shadow-xl" />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-accent px-5 py-3 text-ink shadow-lg sm:-left-6">
              <p className="font-display text-2xl">{school.established}</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Established</p>
            </div>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recognitions.map((r) => (
            <StaggerItem as="li" key={r.by + r.place} className="rounded-card border border-line bg-surface p-6">
              <p className="font-display text-4xl text-eyebrow">{r.rank}</p>
              <p className="mt-1 font-semibold">{r.place}</p>
              <p className="mt-2 text-sm text-muted">{r.by}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-4 text-xs text-muted">Rankings as published on tis.edu.in.</p>
      </Container>
    </section>
  )
}
