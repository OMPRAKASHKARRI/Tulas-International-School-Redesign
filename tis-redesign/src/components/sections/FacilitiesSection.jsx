import { HeartPulse, TreePine, Trophy, Users } from 'lucide-react'
import { facilityStats, images, school } from '../../data/schoolContent.js'
import { Reveal, Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const icons = { TreePine, Trophy, HeartPulse, Users }
// Grid spans give the gallery an editorial, non-uniform rhythm on larger screens.
const spans = ['md:col-span-2 md:row-span-2', '', '', '', '', 'md:col-span-4']

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Campus & facilities" title="A pollution-free campus built for growing up" />
          <Reveal><Button href={school.virtualTourUrl}>Take the virtual tour</Button></Reveal>
        </div>

        <Stagger as="ul" className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facilityStats.map((s) => {
            const Icon = icons[s.icon]
            return (
              <StaggerItem as="li" key={s.label} className="on-dark rounded-card border border-white/10 bg-ink p-6 text-white">
                <Icon size={22} className="text-accent" aria-hidden="true" />
                <p className="mt-4 font-display text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/75">{s.label}</p>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Stagger as="ul" className="mt-6 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {images.gallery.map((img, i) => (
            <StaggerItem as="li" key={img.src} className={`group overflow-hidden rounded-card bg-ink/10 ${spans[i]}`}>
              <SmartImage image={img} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
