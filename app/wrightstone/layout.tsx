import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { HeaderWrightstoneA } from '@/components/header/wrightstone-a'
import { FooterWrightstoneA } from '@/components/footer/wrightstone-a'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Wrightstone & Partners Template',
  description: 'Wrightstone & Partners Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + ' min-h-screen flex flex-col'}>
        <HeaderWrightstoneA />
        {children}
        <Toaster />
        <FooterWrightstoneA />
      </body>
    </html>
  )
}
