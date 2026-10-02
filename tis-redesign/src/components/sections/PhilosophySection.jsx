import { GraduationCap, Globe, Palette, Users } from 'lucide-react'
import { philosophy } from '../../data/schoolContent.js'
import { Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const icons = { GraduationCap, Palette, Users, Globe }

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Why choose TIS" title="A school that chooses you" description="When you choose a school that chooses you, it becomes more than a place to learn." />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p) => {
            const Icon = icons[p.icon]
            return (
              <StaggerItem as="li" key={p.title}>
              <div className="group h-full rounded-card border border-line bg-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-accent">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/20 text-eyebrow transition group-hover:bg-accent group-hover:text-ink"><Icon size={22} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </section>
  )
}
