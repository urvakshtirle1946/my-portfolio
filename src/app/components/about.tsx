'use client'

import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  const { elementRef: imageRef, isVisible: isImageVisible, scrollProgress: imageScrollProgress } = useScrollAnimation({ 
    parallax: true,
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  const { elementRef: contentRef, isVisible: isContentVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 sm:pt-24 pb-24 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isTitleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo with realistic parallax */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              isImageVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-10 scale-95'
            }`}
            style={{
              transform: `translateX(${imageScrollProgress * 20}px) rotateY(${imageScrollProgress * 5}deg)`
            }}
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Background decoration with parallax */}
              <div 
                className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full transform rotate-6 scale-105 opacity-20"
                style={{
                  transform: `rotate(${6 + imageScrollProgress * 10}deg) scale(${1.05 + imageScrollProgress * 0.1})`
                }}
              ></div>
              
              {/* Profile image container with 3D effect */}
              <div 
                className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700"
                style={{
                  transform: `perspective(1000px) rotateY(${imageScrollProgress * 15}deg) scale(${1 + imageScrollProgress * 0.05})`
                }}
              >
                {/* Profile image */}
                <Image
                  src="/generated-image.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating elements with parallax */}
              <div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce shadow-lg"
                style={{
                  transform: `translateY(${imageScrollProgress * -30}px) scale(${1 + imageScrollProgress * 0.2})`
                }}
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce animation-delay-1000 shadow-lg"
                style={{
                  transform: `translateY(${imageScrollProgress * 20}px) scale(${1 - imageScrollProgress * 0.1})`
                }}
              ></div>
            </div>
          </div>

          {/* Bio Content with staggered animations */}
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isContentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 
              className="text-2xl sm:text-3xl font-bold text-black dark:text-white"
              style={{
                transform: `translateY(${isContentVisible ? 0 : 20}px)`,
                transitionDelay: '600ms'
              }}
            >
              So, who am I?
            </h3>
            
            <p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              style={{
                transform: `translateY(${isContentVisible ? 0 : 20}px)`,
                transitionDelay: '700ms'
              }}
            >
              Hello World! I’m a dedicated Full-Stack Developer with a passion for creating innovative digital solutions. With over 5 months of experience in web development, I specialize in building scalable, user-friendly applications that solve real-world problems.
            </p>
            
            <p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              style={{
                transform: `translateY(${isContentVisible ? 0 : 20}px)`,
                transitionDelay: '800ms'
              }}
            >
              My journey in tech started with curiosity and has grown into a deep understanding of modern web technologies. I believe in writing clean, maintainable code and love collaborating on projects that make a real impact.
            </p>

            {/* Key highlights with staggered animation */}
            <div 
              className="grid sm:grid-cols-2 gap-4 pt-6"
              style={{
                transform: `translateY(${isContentVisible ? 0 : 20}px)`,
                transitionDelay: '900ms'
              }}
            >
              {[
                { text: "5+ Months Experience", delay: '1000ms' },
                { text: "10+ Projects Completed", delay: '1100ms' },
                { text: "Full Stack Expertise", delay: '1200ms' },
                { text: "UI/UX Design", delay: '1300ms' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3"
                  style={{
                    transform: `translateX(${isContentVisible ? 0 : -20}px)`,
                    transitionDelay: item.delay,
                    transition: 'all 0.6s ease-out'
                  }}
                >
                  <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default About
