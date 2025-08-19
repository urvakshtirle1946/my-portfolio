'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  const { elementRef: contentRef, isVisible: isContentVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Bootstrap"],
    backend: ["Node.js", "Express.js", "Java", "MySQL", "MongoDB"],
    tools: ["Git","Firebase", "Vercel", "Figma"]
  }

  const experience = [
    {
      id: 1,
      company: "Megabyte Solutions",
      position: "Full Stack Developer",
      duration: "2024 - 2025",
      description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for scalable architecture.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on major projects",
        "Streamlined database queries in MySQL"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 sm:pt-24 pb-24 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Experience & Skills
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 delay-300 ${
            isContentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-8">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-black dark:bg-white rounded-full mr-3"></div>
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mr-3"></div>
                  Backend Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-gray-500 dark:bg-gray-500 rounded-full mr-3"></div>
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-8">
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline connector */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-6 h-6 bg-white rounded-full shadow-inner"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-xl font-bold text-black dark:text-white">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                          {exp.company}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
