'use client'

import Link from 'next/link'
import Button from '@/components/UI/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Button href="/" variant="primary" icon={<Home className="w-5 h-5" />}>
            Go Home
          </Button>
          <Button href="#" variant="outline" icon={<ArrowLeft className="w-5 h-5" />} onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}