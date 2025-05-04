'use client'

import { motion } from 'framer-motion'

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}