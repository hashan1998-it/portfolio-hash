'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="glass rounded-lg p-6 hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 rounded-lg bg-primary/10">
        <skill.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{skill.category}</h3>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {skill.items.map((item, i) => (
        <motion.span
          key={i}
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-foreground/5 text-foreground-muted hover:bg-foreground/10 hover:text-foreground transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <item.icon 
            className="w-4 h-4" 
            style={{ color: item.color }}
          />
          <span>{item.name}</span>
        </motion.span>
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" className="py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  )
}