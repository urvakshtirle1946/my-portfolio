import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from './context/theme-context'
import { SmoothScrollProvider } from './components/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'Urvaksh Tirle - Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full stack development projects, skills, and experience.',
  keywords: 'full stack developer, web developer, React, Node.js, TypeScript, portfolio',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
