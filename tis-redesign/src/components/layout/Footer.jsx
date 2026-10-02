import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { footerLinks, school, social } from '../../data/schoolContent.js'
import Container from '../ui/Container.jsx'
import SmartImage from '../ui/SmartImage.jsx'

const icons = { Facebook, Twitter, Linkedin, Instagram, Youtube }
const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white/80">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-block rounded-lg bg-white px-3 py-1.5">
            <SmartImage image={school.logo} width="96" height="40" loading="lazy" className="h-10 w-auto" fallback={<span className="font-display text-xl font-semibold text-ink">TIS</span>} />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            CBSE-affiliated co-educational boarding and day school in Dehradun, Uttarakhand, for boys and girls from Class IV to XII.
          </p>
          <ul className="mt-5 flex gap-2">
            {social.map((s) => {
              const Icon = icons[s.icon]
              return (
                <li key={s.name}>
                  <a href={s.href} {...ext} aria-label={`TIS on ${s.name}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition hover:bg-accent hover:text-ink">
                    <Icon size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => <li key={l.id}><a className="hover:text-accent" href={`#${l.id}`}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Official links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((l) => <li key={l.label}><a className="hover:text-accent" href={l.href} {...ext}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>{school.address}</p>
            <p><a className="hover:text-accent" href={school.phoneHref}>{school.phone}</a></p>
            <p><a className="hover:text-accent" href={`mailto:${school.email}`}>{school.email}</a></p>
          </address>
        </div>
      </Container>
      <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
        <Container>
          © 2026 Tulas International School, Dehradun. Content and imagery belong to the school; this is an unofficial frontend redesign concept.
        </Container>
      </div>
    </footer>
  )
}
