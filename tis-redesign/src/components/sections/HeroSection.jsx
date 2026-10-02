import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { images, intro, school } from '../../data/schoolContent.js'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'

export default function HeroSection() {
  const reduce = useReducedMotion()
  const enter = (delay) => (reduce ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: 'easeOut' } })
  return (
    <section id="hero" className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white sm:items-center sm:pb-0">
      <SmartImage image={images.hero} width="1200" height="630" fetchpriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/70 sm:to-transparent" />
      <Container>
        <div className="max-w-2xl">
          <motion.p {...enter(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-accent" /> Boarding &amp; Day School · Dehradun
          </motion.p>
          <motion.h1 {...enter(0.1)} className="text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
            {intro.headline}
          </motion.h1>
          <motion.p {...enter(0.2)} className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{intro.sub}</motion.p>
          <motion.div {...enter(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#about" variant="outline" icon={false}>Explore Our School <ArrowDown size={16} aria-hidden="true" /></Button>
            <Button href={school.applyUrl}>Admissions Enquiry</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
