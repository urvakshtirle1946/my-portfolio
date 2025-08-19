"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/app/context/theme-context"
import Lenis from "lenis"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavigationProps {
  items: NavItem[]
  className?: string
}

export function Navigation({ items, className }: NavigationProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || 'Home')
  const { theme, toggleTheme } = useTheme()
  const isManualClick = useRef(false)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  // Get Lenis instance
  useEffect(() => {
    // Find Lenis instance from window or create a new one
    if (typeof window !== 'undefined') {
      // Try to get existing Lenis instance
      const existingLenis = (window as Window & { lenis?: Lenis }).lenis
      if (existingLenis) {
        lenisRef.current = existingLenis
      }
    }
  }, [])

  // Add scroll detection to update active tab
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active tab if it was manually clicked recently
      if (isManualClick.current) {
        return
      }

      const scrollPosition = window.scrollY + 100 // Reduced offset for better detection

      // Check each section to see which one is in view
      let foundActive = false
      
      items.forEach((item) => {
        const element = document.querySelector(item.url) as HTMLElement
        if (element && !foundActive) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveTab(item.name)
            foundActive = true
          }
        }
      })

      // If no section is found, default to Home when at the top
      if (!foundActive && scrollPosition < 100) {
        setActiveTab('Home')
      }
    }

    // Initial call to set correct active tab
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const scrollToSection = (url: string) => {
    try {
      const element = document.querySelector(url) as HTMLElement
      if (element) {
        // Calculate offset for the fixed navigation bar
        const isMobile = window.innerWidth < 640
        const navHeight = isMobile ? 80 : 100 // Different offset for mobile vs desktop
        const elementTop = element.offsetTop - navHeight
        
        // Use Lenis for smooth scrolling if available
        if (lenisRef.current) {
          lenisRef.current.scrollTo(Math.max(0, elementTop), {
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          })
        } else {
          // Fallback to native smooth scrolling
          window.scrollTo({
            top: Math.max(0, elementTop),
            behavior: 'smooth'
          })
        }
      }
    } catch (error) {
      console.error('Error scrolling to section:', error)
    }
  }

  const handleThemeToggle = () => {
    try {
      toggleTheme()
    } catch (error) {
      console.error('Error toggling theme:', error)
    }
  }

  const handleNavClick = (itemName: string, itemUrl: string) => {
    // Set manual click flag to prevent scroll detection from overriding
    isManualClick.current = true
    
    // Clear any existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }
    
    // Immediately update the active tab for instant feedback
    setActiveTab(itemName)
    
    // Scroll to section
    scrollToSection(itemUrl)
    
    // Reset the manual click flag after a delay to allow scroll detection to resume
    clickTimeoutRef.current = setTimeout(() => {
      isManualClick.current = false
    }, 1000) // 1 second delay before allowing scroll detection to take over
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [])

  // Don't render if no items
  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      {/* Mobile Navigation - Bottom Fixed */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2 pb-4">
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center p-3">
            {/* Navigation Items */}
            <div className="flex items-center justify-around gap-2 flex-1 min-w-0">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name, item.url)}
                    className={cn(
                      "relative flex flex-col items-center justify-center p-2.5 rounded-lg transition-all duration-150 min-w-0 flex-1",
                      "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white active:scale-95",
                      isActive && "text-black dark:text-white bg-gray-100 dark:bg-gray-700",
                    )}
                  >
                    <Icon size={20} strokeWidth={2.5} className="mb-1.5" />
                    <span className="text-[11px] font-medium truncate leading-tight">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="mobile-tubelight"
                        className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-lg -z-10"
                        initial={false}
                        transition={{
                          type: "tween",
                          duration: 0.2,
                          ease: "easeOut"
                        }}
                      >
                        {/* Mobile Tubelight Effect */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-t-full shadow-md pointer-events-none">
                          <div className="absolute w-8 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full blur-sm -top-0.5 -left-0.5" />
                        </div>
                      </motion.div>
                    )}
                  </button>
                )
              })}
            </div>
            
            {/* Right side buttons for mobile */}
            <div className="flex items-center ml-2 flex-shrink-0">
              {/* Theme Toggle for Mobile */}
              <button
                onClick={handleThemeToggle}
                className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 mb-1" />
                ) : (
                  <Sun className="h-4 w-4 mb-1" />
                )}
                <span className="text-[8px] font-bold">THEME</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Top Fixed */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-full shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-3">
              {/* Avatar */}
              <div className="flex items-center pr-2 sm:pr-3 border-r border-gray-200 dark:border-gray-600 flex-shrink-0">
                <button
                  onClick={() => handleNavClick('Home', '#home')}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-black dark:border-white shadow-lg hover:scale-110 transition-transform duration-200"
                >
                <img
                  src="/generated-image.png"
                  alt="Urvaksh Tirle"
                  className="w-full h-full object-cover"
                />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center gap-0 justify-center px-1 flex-shrink-0">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <Link
                  key={item.name}
                      href={item.url}
                  onClick={(e) => {
                    e.preventDefault()
                        handleNavClick(item.name, item.url)
                      }}
                      className={cn(
                        "relative cursor-pointer text-sm font-semibold px-3 py-2 rounded-full transition-all duration-150 flex-shrink-0",
                        "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white",
                        isActive && "bg-gray-200 dark:bg-gray-600 text-black dark:text-white shadow-md",
                      )}
                    >
                      <span className="flex items-center gap-0.5">
                        <Icon size={14} strokeWidth={2.5} />
                        <span>{item.name}</span>
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="desktop-tubelight"
                          className="absolute inset-0 w-full bg-blue-500/10 dark:bg-blue-400/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "tween",
                            duration: 0.2,
                            ease: "easeOut"
                          }}
                        >
                                                    {/* Desktop Tubelight Effect */}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t-full shadow-md pointer-events-none">
                            <div className="absolute w-6 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full blur-sm -top-0.5 -left-0.5" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  )
                })}
          </div>

              {/* Right side buttons container */}
              <div className="flex items-center space-x-1.5 pl-2 border-l border-gray-200 dark:border-gray-600 flex-shrink-0">
                {/* Book Meeting Button */}
                <a
                  href="https://cal.com/urvaksh-tirle-alfxdi/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  Book Meeting
                </a>

                {/* Theme Toggle Button */}
                <button
                  onClick={handleThemeToggle}
                  className="p-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </button>
              </div>
        </div>
      </div>
            </div>
          </div>
    </>
  )
}
