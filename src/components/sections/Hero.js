'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, ChevronDown } from 'lucide-react'
import Button from '@/components/UI/Button'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute left-4 top-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob" 
             style={{ backgroundColor: '#4F46E533' }} /> {/* Indigo instead of red */}
        <div className="absolute right-4 top-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" 
             style={{ backgroundColor: '#3182CE33' }} />
        <div className="absolute left-20 bottom-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" 
             style={{ backgroundColor: '#48BB7833' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <h2 
            className="text-lg md:text-xl mb-4"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Hi, my name is
          </h2>

          <h1 
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Hashan Sooriyage
          </h1>

          <h3 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Full Stack Developer & Innovator
          </h3>

          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            style={{ color: 'var(--foreground-muted)' }}
          >
            I'm a self-motivated computing student skilled in building modern web 
            applications with React, Laravel, and Flutter. Currently pursuing my 
            BSc in Computing & Information Systems while crafting innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="#projects"
              variant="primary"
              icon={<ArrowDown className="w-5 h-5" />}
            >
              View My Work
            </Button>
            
            <Button
              href="/resume/Hashan-Sooriyage-Resume.pdf"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/hashan1998-it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hashan-sooriyage/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="text-foreground-muted hover:text-primary transition-colors"
          style={{ color: 'var(--foreground-muted)' }}
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}