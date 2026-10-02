import { programs } from '../../data/schoolContent.js'
import { Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Academics" title="CBSE education, boarding or day" description="Co-educational learning for boys and girls from Class IV to XII." />
        <Stagger as="ul" className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem as="li" key={p.title} className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface">
              <div className="overflow-hidden">
                <SmartImage image={{ ...p.image, alt: '' }} width="640" height="420" loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-eyebrow">{p.meta}</p>
                <h3 className="mt-2 text-2xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
                <Button href={p.cta.href} variant="subtle" className="mt-6 self-start">{p.cta.label}</Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
