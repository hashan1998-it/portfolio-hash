'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="glass rounded-lg p-6 hover:shadow-lg transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, translateY: -5 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-lg bg-primary/10 dark:bg-primary/10 light:bg-primary/10">
        <skill.icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{skill.category}</h3>
    </div>
    
    <div className="grid grid-cols-2 gap-2">
      {skill.items.map((item, i) => (
        <motion.div
          key={i}
          className="px-3 py-2 text-sm rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground-muted hover:text-foreground transition-all duration-200 cursor-default"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
          viewport={{ once: true }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" className="py-20 bg-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  )
}