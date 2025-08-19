'use client'

import { useForm, ValidationError } from '@formspree/react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [state, handleSubmit] = useForm("xanbvokp")
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })
  const { elementRef: contentRef, isVisible: isContentVisible } = useScrollAnimation({
    mobileThreshold: 0.05,
    mobileRootMargin: '0px 0px -30px 0px'
  })

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "urvakshtirle@gmail.com",
      link: "mailto:urvakshtirle@gmail.com"
    },
    
    {
      icon: "📍",
      title: "Location",
      value: "Indore, Madhya Pradesh, India",
      link: "https://maps.app.goo.gl/wakb8D2ckuZJ5rtw8"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/urvaksh-tirle",
      link: "https://www.linkedin.com/in/urvaksh-tirle-772601297/"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 sm:pt-24 pb-24 sm:pb-20">
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isContentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-8 text-center">
              Send a Message
            </h3>
            
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Book a Meeting Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 sm:p-12 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your ideas and see how we can work together to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cal.com/urvaksh-tirle-alfxdi/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Meeting
              </a>
              <a 
                href="https://drive.google.com/file/d/10Ko9bbdS0vdWd8nHa9kUrY9Qg1Xp_ac6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
