'use client'

import { useEffect } from 'react'
import useMousePosition from '@/hooks/useMousePosition'

export default function Cursor() {
  const { x, y } = useMousePosition()

  useEffect(() => {
    const links = document.querySelectorAll('a, button')
    const cursorDot = document.querySelector('.cursor-dot')

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursorDot?.classList.add('link-hover')
      })
      link.addEventListener('mouseleave', () => {
        cursorDot?.classList.remove('link-hover')
      })
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {})
        link.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <div
      className="cursor-dot"
      style={{ left: x, top: y }}
    />
  )
}