import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif-var',
})

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans-var',
})

export const metadata: Metadata = {
  title: 'The Convo',
  description:
    'A walk that stops at a garden. Plant an anonymous memory with a song, and wander among blooms others left behind.',
}

export const viewport: Viewport = {
  themeColor: '#dceff5',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${serif.variable} ${sans.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
