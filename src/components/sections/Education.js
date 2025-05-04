'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const educationData = [
  {
    degree: "BSc. (Hons) in Computing & Information Systems",
    school: "Sabaragamuwa University of Sri Lanka",
    period: "2020 - 2025",
    gpa: "3.63",
    details: [
      "Selected to the Dean's List for highest performance in Second Year Examination",
      "Specializing in Full-Stack Development and Database Systems",
      "Active participation in tech competitions"
    ]
  },
  {
    degree: "G.C.E Advanced Level - Science Stream",
    school: "Sewamuktha Kandaura Maha Vidyalaya",
    period: "2015 - 2018",
    location: "Polonnaruwa",
    details: [
      "Science stream with Mathematics specialization",
      "Laid strong foundation for computing and analytical thinking"
    ]
  }
]

const EducationCard = ({ data, index }) => (
  <motion.div
    className="relative pl-10 pb-10 last:pb-0"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-0 top-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <GraduationCap className="h-5 w-5 text-primary" />
      </div>
      {index < educationData.length - 1 && (
        <div className="absolute top-10 left-5 h-full w-0.5 bg-foreground-muted/20" />
      )}
    </div>
    
    <div className="glass rounded-lg p-6 ml-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{data.degree}</h3>
          <p className="text-primary font-medium">{data.school}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-foreground-muted">{data.period}</p>
          {data.gpa && (
            <p className="text-secondary font-medium">GPA: {data.gpa}</p>
          )}
        </div>
      </div>
      
      {data.location && (
        <p className="text-foreground-muted mb-3">{data.location}</p>
      )}
      
      <ul className="space-y-2">
        {data.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-foreground-muted">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

export default function Education() {
  return (
    <Section id="education" title="Education" className="py-20">
      <div className="max-w-3xl mx-auto">
        {educationData.map((data, index) => (
          <EducationCard key={index} data={data} index={index} />
        ))}
      </div>
    </Section>
  )
}