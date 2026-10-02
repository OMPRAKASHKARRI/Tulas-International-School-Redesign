import { MotionConfig } from 'framer-motion'
import CustomCursor from './components/animation/CustomCursor.jsx'
import ScrollProgress from './components/animation/ScrollProgress.jsx'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import AcademicsSection from './components/sections/AcademicsSection.jsx'
import AdmissionsSection from './components/sections/AdmissionsSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import FacilitiesSection from './components/sections/FacilitiesSection.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import LearningSection from './components/sections/LearningSection.jsx'
import PhilosophySection from './components/sections/PhilosophySection.jsx'
import TestimonialsSection from './components/sections/TestimonialsSection.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-ink">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <AcademicsSection />
        <FacilitiesSection />
        <LearningSection />
        <TestimonialsSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}
