'use client'

import { useState, useEffect } from 'react'

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updateMousePosition)

      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
      }
    }
  }, [])

  return mousePosition
}