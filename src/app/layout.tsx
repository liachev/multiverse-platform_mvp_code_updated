import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'; // Import the Header component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'DRAH Multiverse Platform',
  description: 'Multiverse Platform Portal Exchange with Real Estate and Business Solutions'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light"> {/* Changed default to light mode */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header /> {/* Add the Header component */}
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        {/* Add Footer component later */}
      </body>
    </html>
  )
}
