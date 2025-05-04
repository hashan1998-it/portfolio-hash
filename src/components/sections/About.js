'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Section id="about" title="About Me" className="py-20">
      <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Passionate Developer from Sri Lanka
          </h3>
          <div className="space-y-4 text-foreground-muted">
            <p>
              I'm a self-motivated and enthusiastic BSc Computing & Information Systems 
              student with a proven ability to adapt to various technology stacks. My 
              journey in computing began with a curiosity for building innovative solutions 
              that make a difference.
            </p>
            <p>
              With experience in modern web technologies like React, Laravel, and Flutter, 
              I excel in creating responsive, user-friendly applications. I'm particularly 
              interested in full-stack development and enjoy crafting both beautiful 
              interfaces and robust backend systems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or working on personal projects that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated circles background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 rounded-full border-4 border-primary/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-60 right-60 w-32 h-32 rounded-full border-4 border-secondary/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full border-4 border-accent/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </Section>
  )
}