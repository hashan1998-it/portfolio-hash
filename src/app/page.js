'use client'

import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
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
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  )
}