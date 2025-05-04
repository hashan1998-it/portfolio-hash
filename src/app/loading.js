'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-foreground-muted/20"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-primary border-t-transparent"></div>
      </div>
    </div>
  )
}