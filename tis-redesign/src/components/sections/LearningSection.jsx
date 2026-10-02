import { images, learning, sports } from '../../data/schoolContent.js'
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function LearningSection() {
  return (
    <section id="learning" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <SmartImage image={images.secret} width="640" height="720" loading="lazy" className="aspect-[4/5] w-full rounded-card object-cover" />
          </Reveal>
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Beyond academics" title="What’s the secret to making school awesome?" description={learning.secret} />
            <Reveal as="blockquote" delay={0.1} className="mt-8 border-l-4 border-accent pl-5">
              <p className="font-display text-xl sm:text-2xl">{learning.quote}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{learning.text}</p>
            </Reveal>
            <Reveal as="h3" delay={0.1} className="mt-10 text-xl">16+ sports curated for joy and discipline</Reveal>
            <Stagger as="ul" className="mt-4 flex flex-wrap gap-2">
              {sports.map((s) => (
                <StaggerItem as="li" key={s} className="rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent hover:bg-accent/15">{s}</StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
