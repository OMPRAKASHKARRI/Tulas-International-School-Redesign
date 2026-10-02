import { Quote } from 'lucide-react'
import { testimonials } from '../../data/schoolContent.js'
import { Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="From the parents" title="In their words" description="Parent reviews as shown on the official TIS website." />
        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem as="li" key={t.name} className="rounded-card border border-line bg-bg p-7">
              <figure className="flex h-full flex-col">
              <Quote size={28} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
