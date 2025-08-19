import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from './context/theme-context'
import { SmoothScrollProvider } from './components/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'Urvaksh Tirle',
  description: 'Professional portfolio showcasing full stack development projects, skills, and experience.',
  keywords: 'full stack developer, web developer, React, Node.js, TypeScript, portfolio',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/generated-image.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/generated-image.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
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
