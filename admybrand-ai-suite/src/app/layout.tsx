// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils' // We will create this file next

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Automation',
  description: 'Increase conversions by 300% with intelligent campaign optimization, automated content creation, and predictive analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background-dark font-sans text-text-primary antialiased',
        inter.variable,
        poppins.variable
      )}>
        {children}
      </body>
    </html>
  )
}