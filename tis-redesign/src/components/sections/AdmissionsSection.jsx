import { images, school } from '../../data/schoolContent.js'
import { Reveal } from '../animation/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="on-dark relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <SmartImage image={{ ...images.hero, alt: '' }} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/85" />
      <Container className="text-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Admissions · Class IV to XII</p>
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-5xl">Join a community that encourages leadership, innovation and lifelong learning</h2>
          <p className="mx-auto mt-5 max-w-xl text-white/80">Applications are handled on the school’s official admissions portal, which opens in a new tab.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={school.applyUrl}>Apply Now</Button>
            <Button href={school.phoneHref} variant="outline" icon={false}>Call {school.phone}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
