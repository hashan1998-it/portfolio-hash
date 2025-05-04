'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

export function Providers({ children }) {
  useEffect(() => {
    // Check if Tailwind classes are being applied
    console.log('Document element classes:', document.documentElement.className)
    
    // Load Lenis after component mount
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smoothWheel: true,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}