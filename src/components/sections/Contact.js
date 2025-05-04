'use client'

import Section from '@/components/UI/Section'
import Button from '@/components/UI/Button'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hashansooriyage@gmail.com",
    href: "mailto:hashansooriyage@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 76 325 6089",
    href: "tel:+94763256089"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Polonnaruwa, Sri Lanka",
    href: null
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/hashan1998-it"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hashan-sooriyage/"
  }
]

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-lg text-foreground-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          I'm always open to new opportunities and collaborations. Whether you have 
          a project in mind or just want to say hello, feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              className="glass rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <info.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              {info.href ? (
                <a href={info.href} className="text-foreground-muted hover:text-primary">
                  {info.value}
                </a>
              ) : (
                <p className="text-foreground-muted">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-foreground/5 text-foreground-muted hover:text-primary hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            href="mailto:hashansooriyage@gmail.com"
            variant="primary"
            icon={<Mail className="w-5 h-5" />}
          >
            Send Me a Message
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}