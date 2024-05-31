import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { SideMenu } from '@/components/nav/side-menu'

export const metadata: Metadata = {
  title: {
    template: '%s | Sidnei Farias',
    default: 'Sidnei Farias',
  },
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <main className="grid min-h-screen grid-cols-8">
          <SideMenu />

          {children}
        </main>
      </body>
    </html>
  )
}
