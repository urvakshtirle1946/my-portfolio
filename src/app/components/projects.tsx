'use client'

import Image from 'next/image'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  const { elementRef: projectsRef, isVisible: isProjectsVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })

  const projects = [
    {
      id: 1,
      title: "Intership Orbit",
      description: "A full-stack internship management system with React, Node.js, and MongoDB.",
      image: "/Intership.png",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://internship-management-system-llpu.vercel.app/",
      githubUrl: "https://github.com/urvakshtirle1946/Internship-Management-System.git",
      featured: true
    },
    {
      id: 2,
      title: "Yashashvi Advertising",
      description: "A portfolio website for Yashsashvi Advertising, increasing web traffic by 40% and improving bounce rate by 25% through an improved UI/UX design.",
      image: "/Yashashvi.png",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
      liveUrl: "https://yashashvi-advertising.vercel.app/",
      githubUrl: "https://github.com/urvakshtirle1946/Yashashvi-Advertising.git",
      featured: true
    },
    {
      id: 3,
      title: "User Dashboard",
      description: "A modern administrative dashboard built with Next.js 14, featuring user management, data visualization, and real-time analytics. Includes responsive design and state management with Zustand.",
      image: "/User.png",
      technologies: ["Next.js 14", "Zustland", "Tailwind CSS 3.3"],
      liveUrl: "https://userss-dashboard.vercel.app/",
      githubUrl: "https://github.com/urvakshtirle1946/user-dashboard.git",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media platforms with data visualization, reporting tools, and automated insights.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout tracking, progress monitoring, and social features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning with natural language processing and context awareness.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  return (
    <section 
      id="projects" 
      className="relative w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 pb-24 sm:pb-24">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            Featured Projects
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-black dark:bg-white mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Featured Projects Grid with staggered animations */}
        <div 
          ref={projectsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isProjectsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          {projects.filter(project => project.featured).map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
              style={{
                transform: `translateY(${isProjectsVisible ? 0 : 50}px) scale(${isProjectsVisible ? 1 : 0.9})`,
                transitionDelay: `${index * 200}ms`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Project Image with hover effect */}
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden flex-shrink-0">
                {(project.id === 1 || project.id === 2 || project.id === 3) ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
                  </div>
                )}
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project Content with staggered text animations */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <h3 
                  className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 sm:mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                  style={{
                    transform: `translateY(${isProjectsVisible ? 0 : 20}px)`,
                    transitionDelay: `${index * 200 + 100}ms`
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1"
                  style={{
                    transform: `translateY(${isProjectsVisible ? 0 : 20}px)`,
                    transitionDelay: `${index * 200 + 200}ms`
                  }}
                >
                  {project.description}
                </p>
                
                {/* Technologies with staggered animation */}
                <div 
                  className="flex flex-wrap gap-2 mb-4"
                  style={{
                    transform: `translateY(${isProjectsVisible ? 0 : 20}px)`,
                    transitionDelay: `${index * 200 + 300}ms`
                  }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      style={{
                        transform: `translateX(${isProjectsVisible ? 0 : -10}px)`,
                        transitionDelay: `${index * 200 + 300 + techIndex * 50}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons with slide-in effect */}
                <div 
                  className="flex gap-2 sm:gap-3"
                  style={{
                    transform: `translateY(${isProjectsVisible ? 0 : 20}px)`,
                    transitionDelay: `${index * 200 + 400}ms`
                  }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-center transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
