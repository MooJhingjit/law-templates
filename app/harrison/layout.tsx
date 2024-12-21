import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeaderHarrisonA } from '@/components/header/harrison-a'
import { FooterHarrisonA } from '@/components/footer/harrison-a'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harrison Template',
  description: 'Harrison Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <HeaderHarrisonA />
        {children}
        <Toaster />
        <FooterHarrisonA />
      </body>
    </html>
  )
}
