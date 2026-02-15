import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'INSAF BUILDING DESIGN & CONSULTANT LTD - Architectural Design Experts',
  description: 'Leading architectural firm in Bangladesh. RAJUK approved panel architects specializing in residential, commercial design with 530+ successful projects.',
  keywords: 'RAJUK approved architects, Bangladesh architects, Dhaka architects, building design, structural design, interior design',
  authors: [{ name: 'INSAF Limited' }],
  openGraph: {
    title: 'INSAF Building Design & Consultant Ltd',
    description: 'RAJUK Panel Listed Architects - Creating architectural excellence since 2018',
    type: 'website',
    locale: 'en_US',
    url: 'https://insaflimited.com',
    siteName: 'INSAF Limited',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INSAF Architects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INSAF Building Design & Consultant Ltd',
    description: 'RAJUK Panel Listed Architects',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FFD700" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}