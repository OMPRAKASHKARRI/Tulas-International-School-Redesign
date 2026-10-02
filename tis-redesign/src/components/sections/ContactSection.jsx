import { Mail, MapPin, Phone } from 'lucide-react'
import { school } from '../../data/schoolContent.js'
import { Stagger, StaggerItem } from '../animation/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const card = 'rounded-card border border-line bg-surface p-7'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="Visit or get in touch" />
        <Stagger as="ul" className="mt-12 grid gap-5 md:grid-cols-3">
          <StaggerItem as="li" className={card}>
            <MapPin className="text-eyebrow" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{school.name}<br />{school.address}</p>
            <Button href={school.mapsUrl} variant="subtle" className="mt-5">Open in Google Maps</Button>
          </StaggerItem>
          <StaggerItem as="li" className={card}>
            <Phone className="text-eyebrow" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Phone</h3>
            <p className="mt-2 text-sm text-muted">Admission helpline</p>
            <a className="font-semibold hover:text-eyebrow" href={school.phoneHref}>{school.phone}</a>
            <p className="mt-3 text-sm text-muted">Landline</p>
            <p className="font-semibold">
              {school.landlines.map((l, i) => (
                <span key={l.href}>{i > 0 && ', '}<a className="hover:text-eyebrow" href={l.href}>{l.label}</a></span>
              ))}
            </p>
          </StaggerItem>
          <StaggerItem as="li" className={card}>
            <Mail className="text-eyebrow" aria-hidden="true" />
            <h3 className="mt-4 text-xl">Email &amp; web</h3>
            <p className="mt-2"><a className="font-semibold hover:text-eyebrow" href={`mailto:${school.email}`}>{school.email}</a></p>
            <Button href={school.website} variant="subtle" className="mt-5">tis.edu.in</Button>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  )
}
