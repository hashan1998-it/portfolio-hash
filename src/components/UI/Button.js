'use client'

import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  icon, 
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-foreground-muted hover:text-foreground hover:bg-foreground/5'
  }

  const ButtonComponent = href ? 'a' : 'button'
  
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <ButtonComponent
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {icon}
        {children}
      </ButtonComponent>
    </motion.div>
  )
}