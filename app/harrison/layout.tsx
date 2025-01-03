import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { HeaderHarrisonA } from '@/components/header/harrison-a'
import { FooterHarrisonA } from '@/components/footer/harrison-a'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
      <body className={poppins.className + ' min-h-screen flex flex-col'}>
        <HeaderHarrisonA />
        {children}
        <Toaster />
        <FooterHarrisonA />
      </body>
    </html>
  )
}
