'use client'

import { useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Linkedin, Github } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const lenisRef = useRef<Lenis | null>(null)
  const { elementRef: heroRef, scrollProgress } = useScrollAnimation({ 
    parallax: true,
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000) // Increased to 3 seconds for better readability
    return () => clearInterval(interval)
  }, [roles.length])

  // Get Lenis instance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const existingLenis = (window as Window & { lenis?: Lenis }).lenis
      if (existingLenis) {
        lenisRef.current = existingLenis
      }
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      // Calculate offset for the fixed navigation bar
      const navHeight = 100 // Approximate height of navigation bar
      const elementTop = projectsSection.offsetTop - navHeight
      
      // Use Lenis for smooth scrolling if available
      if (lenisRef.current) {
        lenisRef.current.scrollTo(Math.max(0, elementTop), {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        // Fallback to native smooth scrolling
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900 pb-24 sm:pb-0 sm:pt-20 overflow-hidden"
    >
      {/* Background elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
          style={{
            transform: `translateY(${scrollProgress * -50}px) scale(${1 + scrollProgress * 0.1})`
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-72 h-72 bg-gray-300 dark:bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
          style={{
            transform: `translateY(${scrollProgress * 30}px) scale(${1 - scrollProgress * 0.05})`
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
          style={{
            transform: `translateY(${scrollProgress * -20}px) rotate(${scrollProgress * 10}deg)`
          }}
        ></div>
      </div>

      {/* Main content with parallax */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translateY(${scrollProgress * -20}px)`
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Greeting with fade in */}
          <p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 2),
              transform: `translateY(${scrollProgress * 30}px)`
            }}
          >
            Hello, I&apos;m
          </p>
          
          {/* Name with scale effect */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 animate-slide-up"
            style={{
              transform: `scale(${1 - scrollProgress * 0.1}) translateY(${scrollProgress * 40}px)`
            }}
          >
            <span className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Urvaksh Tirle
            </span>
          </h1>
          
          {/* Animated role with parallax */}
          <div 
            className="h-16 sm:h-20 flex items-center justify-center mb-8"
            style={{
              transform: `translateY(${scrollProgress * 25}px)`
            }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              I&apos;m a{' '}
              <span 
                key={currentRole}
                className="text-black dark:text-white font-semibold inline-block"
                style={{
                  animation: 'fadeInOut 3s ease-in-out'
                }}
              >
                {roles[currentRole]}
              </span>
            </h2>
          </div>
          
          {/* Description with fade out */}
          <p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: Math.max(0, 1 - scrollProgress * 1.5),
              transform: `translateY(${scrollProgress * 20}px)`
            }}
          >
            Turning ideas into digital experiences that matter. I blend imagination with tech to craft designs people love using.
          </p>

          {/* Let's Connect Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black dark:text-white mb-4 text-center">
              Let&apos;s Connect
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a 
                href="mailto:urvakshtirle@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail size={18} />
                
              </a>
              <a 
                href="https://www.linkedin.com/in/urvaksh-tirle-772601297/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                
              </a>
              <a 
                href="https://github.com/urvakshtirle1946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={18} />
                
              </a>
            </div>
          </div>
          
          {/* CTA Buttons with scale effect */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            style={{
              transform: `scale(${1 - scrollProgress * 0.05}) translateY(${scrollProgress * 15}px)`
            }}
          >
            <button 
              onClick={scrollToProjects}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a 
              href="https://drive.google.com/file/d/10Ko9bbdS0vdWd8nHa9kUrY9Qg1Xp_ac6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black dark:border-white text-black dark:text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero