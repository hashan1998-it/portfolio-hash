'use client'

import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Research from '@/components/sections/Research'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Cursor from '@/components/layout/Cursor'
import PageTransition from '@/components/animations/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Research />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  )
}