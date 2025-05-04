'use client'

import Section from '@/components/UI/Section'
import { motion } from 'framer-motion'
import { certificates } from '@/data/certificates'
import { ExternalLink } from 'lucide-react'

const CertificateCard = ({ certificate, index }) => (
  <motion.div
    className="glass rounded-lg p-6 hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10 mt-1">
        <certificate.icon className="w-6 h-6 text-primary" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {certificate.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-foreground-muted mb-2">
          <span>{certificate.issuer}</span>
          <span>•</span>
          <span>{certificate.date}</span>
        </div>
        <p className="text-foreground-muted mb-4">
          {certificate.description}
        </p>
        
        {certificate.verifyUrl && (
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Verify Certificate</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates & Achievements" className="py-20">
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} index={index} />
        ))}
      </div>
    </Section>
  )
}