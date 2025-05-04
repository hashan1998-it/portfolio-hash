'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background/90 backdrop-blur-sm border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground-muted flex items-center gap-1">
              © {currentYear} Hashan Sooriyage. Built with 
              <Heart className="w-4 h-4 text-red-500 mx-1" /> using Next.js
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://github.com/hashan1998-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hashan-sooriyage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}