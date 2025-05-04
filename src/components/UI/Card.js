'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Button from './Button'

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  image 
}) {
  return (
    <motion.div
      className="glass rounded-lg overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-foreground-muted mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubUrl && (
            <Button
              href={githubUrl}
              variant="outline"
              icon={<Github className="w-4 h-4" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              href={liveUrl}
              variant="outline"
              icon={<ExternalLink className="w-4 h-4" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}