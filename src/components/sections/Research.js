'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { research } from '@/data/research'

const ResearchCard = ({ project, index }) => (
  <motion.div
    className="glass rounded-lg p-6 h-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-secondary/10 mt-1">
        <project.icon className="w-6 h-6 text-secondary" />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-foreground pr-4">
            {project.title}
          </h3>
          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary whitespace-nowrap">
            {project.status}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-foreground-muted mb-3">
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        
        <p className="text-foreground-muted mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-foreground/5 text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

export default function Research() {
  return (
    <Section id="research" title="Research & Major Projects" className="py-20">
      <div className="grid lg:grid-cols-3 gap-6">
        {research.map((project, index) => (
          <ResearchCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}