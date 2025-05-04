'use client'

import Section from '@/components/UI/Section'
import ProjectCard from '@/components/UI/Card'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" className="py-20">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}