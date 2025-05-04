'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'GPA', value: '3.63' }
]

export default function About() {
  return (
    <Section id="about" title="About Me" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-lg p-6 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-3xl font-bold text-primary mb-2">{stat.value}</h4>
                <p className="text-foreground-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}