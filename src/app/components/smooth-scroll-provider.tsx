'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with updated API
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      infinite: false,
    })

    // Expose Lenis instance globally for other components to use
    if (typeof window !== 'undefined') {
      (window as Window & { lenis?: Lenis }).lenis = lenisRef.current
    }

    // RAF loop
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenisRef.current?.destroy()
      // Clean up global reference
      if (typeof window !== 'undefined') {
        delete (window as Window & { lenis?: Lenis }).lenis
      }
    }
  }, [])

  return <>{children}</>
}
