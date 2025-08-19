'use client'

import { useEffect, useState } from 'react'

export function FloatingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px) scale(${isVisible ? 1 : 0})`,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-black dark:border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isVisible ? 1 : 0})`,
        }}
      />
    </>
  )
}
