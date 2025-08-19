'use client'

import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  parallax?: boolean
  mobileThreshold?: number
  mobileRootMargin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = false, // Changed to false to allow re-triggering
    rootMargin = '0px 0px -50px 0px',
    parallax = false,
    mobileThreshold = 0.05,
    mobileRootMargin = '0px 0px -30px 0px'
  } = options

  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const lenisRef = useRef<Lenis | null>(null)

  // Function to reset animation state
  const resetAnimation = () => {
    setIsVisible(false)
    setScrollProgress(0)
  }

  useEffect(() => {
    // Get Lenis instance
    if (typeof window !== 'undefined') {
      const existingLenis = (window as Window & { lenis?: Lenis }).lenis
      if (existingLenis) {
        lenisRef.current = existingLenis
      }
    }

    const element = elementRef.current
    if (!element) return

    // Function to determine if we're on mobile
    const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 768
    let isMobile = getIsMobile()
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else {
          // Always set to false when not intersecting to allow re-triggering
          setIsVisible(false)
        }
      },
      {
        threshold: isMobile ? mobileThreshold : threshold,
        rootMargin: isMobile ? mobileRootMargin : rootMargin,
      }
    )

    observer.observe(element)

    // Handle window resize for responsive behavior
    const handleResize = () => {
      const newIsMobile = getIsMobile()
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile
        // Re-observe with new settings
        observer.unobserve(element)
        observer.observe(element)
      }
    }

    window.addEventListener('resize', handleResize)

    // Parallax effect
    if (parallax && lenisRef.current) {
      const handleScroll = () => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate progress through the element
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ))
        
        setScrollProgress(progress)
      }

      lenisRef.current.on('scroll', handleScroll)
      
      return () => {
        if (lenisRef.current) {
          lenisRef.current.off('scroll', handleScroll)
        }
        observer.unobserve(element)
        window.removeEventListener('resize', handleResize)
      }
    }

    return () => {
      observer.unobserve(element)
      window.removeEventListener('resize', handleResize)
    }
  }, [threshold, triggerOnce, rootMargin, parallax, mobileThreshold, mobileRootMargin])

  return { elementRef, isVisible, scrollProgress, resetAnimation }
}
